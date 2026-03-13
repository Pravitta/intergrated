"use client";
import { useState, useEffect } from "react";

export default function SakuraTimer() {
  const WORK_TIME = 25 * 60;

  const [time, setTime] = useState(WORK_TIME);
  const [running, setRunning] = useState(false);

  const sakuraStages = ["🌱", "🌿", "🌸", "🌸🌸"];

  const progress = 1 - time / WORK_TIME;
  const stage = Math.min(
    sakuraStages.length - 1,
    Math.floor(progress * sakuraStages.length)
  );

  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, time]);

  const start = () => setRunning(true);

  const reset = () => {
    setRunning(false);
    setTime(WORK_TIME);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

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

        <div style={{ fontSize: "80px", margin: "20px" }}>
          {sakuraStages[stage]}
        </div>

        <div style={{ fontSize: "36px", marginBottom: "20px" }}>
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>

        <button
          onClick={start}
          style={{
            background: "#ff80bf",
            border: "none",
            padding: "10px 16px",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          plant 🌸
        </button>

        <button
          onClick={reset}
          style={{
            background: "#ffcce6",
            border: "none",
            padding: "10px 16px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}