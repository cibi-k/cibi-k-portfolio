import { useEffect, useState } from "react";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

type Status = "idle" | "loading" | "success" | "error";

/**
 * Fetches live public profile stats from GitHub's official REST API
 * (https://docs.github.com/en/rest/users/users) — no scraping, no auth
 * required for public data. Fails gracefully (rate limits, offline) so the
 * rest of the page never breaks if GitHub is unreachable.
 */
export const useGitHubStats = (username: string) => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!username) return;
    let cancelled = false;
    setStatus("loading");

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
        });
        setStatus("success");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { stats, status };
};
