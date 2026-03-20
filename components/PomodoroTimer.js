import TimerControls from "./TimerControls";

export default function SakuraTimer() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#ffe6f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          width: "300px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#ff4da6" }}>🌸 Sakura Focus</h2>
        
        <TimerControls />
      </div>
    </div>
  );
}