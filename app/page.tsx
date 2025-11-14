import BlurText from "../components/BlurText";
import MagnetLines from "../components/Magnet";

export default function Home() {
  return (
    <main className="page">
      <section className="hero-section">
        <h1 className="title">Task A — React Bits</h1>
        <p className="subtitle">
          <BlurText text="Hover to reveal blurred text." revealOnHover />
        </p>
      </section>

      <div className="section-block">
        <h2 className="section-title">BlurText Demo</h2>
        <BlurText text="Hello World (blur until hovered)" revealOnHover />
        <br />
        <BlurText text="Always revealed via prop" revealed />
      </div>

      <div className="section-block">
        <h2 className="section-title">MagnetLines Demo</h2>
        <MagnetLines
          lines={[
            "Line 1 - follow",
            "Line 2 - follow stronger",
            "Line 3 - most reactive",
          ]}
          strength={0.08}
          className="magnet-demo"
        />
      </div>
    </main>
  );
}