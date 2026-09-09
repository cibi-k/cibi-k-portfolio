/**
 * AuroraBackground
 * A fixed, GPU-cheap animated gradient mesh used as the base layer for the
 * "Liquid Glass" aesthetic. Pure CSS transforms (no JS animation loop, no
 * canvas) so it stays smooth on low-power devices and costs ~0 main-thread work.
 * Sits behind every section (z-[-1]) — glass panels placed on top pick up
 * soft color bleed via backdrop-filter, exactly like Apple's Liquid Glass / Arc.
 */
const AuroraBackground = () => (
  <div
    aria-hidden="true"
    className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
  >
    <div className="absolute inset-0 bg-background" />
    <div
      className="aurora-layer"
      style={{
        width: "60vw",
        height: "60vw",
        maxWidth: 700,
        maxHeight: 700,
        left: "-10%",
        top: "-10%",
        background: "hsl(var(--aurora-1))",
        animationDelay: "0s",
      }}
    />
    <div
      className="aurora-layer"
      style={{
        width: "50vw",
        height: "50vw",
        maxWidth: 600,
        maxHeight: 600,
        right: "-8%",
        top: "10%",
        background: "hsl(var(--aurora-2))",
        animationDelay: "-7s",
      }}
    />
    <div
      className="aurora-layer"
      style={{
        width: "45vw",
        height: "45vw",
        maxWidth: 550,
        maxHeight: 550,
        left: "20%",
        bottom: "-15%",
        background: "hsl(var(--aurora-3))",
        animationDelay: "-14s",
      }}
    />
    {/* Fine grain noise-free vignette so glass panels always have contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
  </div>
);

export default AuroraBackground;
