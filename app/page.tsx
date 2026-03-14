"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => router.push("/dashboard"), 600);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "#f3e3ce", fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Background hearts */}
      {["top-[6%] left-[22%]", "top-[22%] right-[18%]", "bottom-[16%] left-[25%]", "bottom-[8%] right-[22%]", "top-[48%] left-[8%]", "top-[52%] right-[9%]"].map((pos, i) => (
        <span key={i} className={`absolute text-[#d98c5f]/20 text-base select-none pointer-events-none ${pos}`}>♥</span>
      ))}

      {/* LARGE outside elements — all DIFFERENT */}
      {/* Top-left */}
      <div className="absolute top-4 left-4 select-none pointer-events-none flex flex-col items-center gap-2">
        <span className="text-[96px] leading-none drop-shadow-lg">🌵</span>
        <span className="text-[48px] leading-none opacity-80">🌸</span>
        <span className="text-[30px] leading-none opacity-50">🍃</span>
      </div>
      {/* Top-right */}
      <div className="absolute top-4 right-4 select-none pointer-events-none flex flex-col items-center gap-2">
        <span className="text-[88px] leading-none drop-shadow-lg">🪴</span>
        <span className="text-[44px] leading-none opacity-80">🌼</span>
        <span className="text-[28px] leading-none opacity-50">✨</span>
      </div>
      {/* Bottom-left */}
      <div className="absolute bottom-4 left-4 select-none pointer-events-none flex flex-col items-center gap-2">
        <span className="text-[36px] leading-none opacity-60">🌿</span>
        <span className="text-[52px] leading-none opacity-80">💐</span>
        <span className="text-[80px] leading-none drop-shadow-md">🌵</span>
      </div>
      {/* Bottom-right */}
      <div className="absolute bottom-4 right-4 select-none pointer-events-none flex flex-col items-center gap-2">
        <span className="text-[32px] leading-none opacity-60">🍀</span>
        <span className="text-[52px] leading-none opacity-80">🌻</span>
        <span className="text-[80px] leading-none drop-shadow-md">🪴</span>
      </div>
      {/* Mid-left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none flex flex-col items-center gap-3">
        <span className="text-[40px] leading-none opacity-60">🌾</span>
        <span className="text-[50px] leading-none opacity-70">🌺</span>
        <span className="text-[34px] leading-none opacity-50">🍃</span>
      </div>
      {/* Mid-right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none flex flex-col items-center gap-3">
        <span className="text-[40px] leading-none opacity-60">🌷</span>
        <span className="text-[50px] leading-none opacity-70">🌱</span>
        <span className="text-[36px] leading-none opacity-50">🍂</span>
      </div>

      {/* ── VERY TALL Login Card ── */}
      <div
        className="relative z-10 w-[460px] rounded-3xl overflow-hidden"
        style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.07)" }}
      >
        {/* Orange header — very tall */}
        <div
          className="flex flex-col items-center justify-center px-8 relative"
          style={{ background: "#e07b21", paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="flex gap-4 mb-8">
            <div className="w-4 h-4 rounded-full bg-white/30" />
            <div className="w-4 h-4 rounded-full bg-white/30" />
            <div className="w-4 h-4 rounded-full bg-white/30" />
          </div>
          <h1
            className="text-white font-bold text-center leading-tight"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: "52px" }}
          >
            Daily Spark ✨
          </h1>
          <p
            className="text-white/70 mt-3 font-bold tracking-[0.22em] uppercase"
            style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px" }}
          >
            Your week, blooming 🌸
          </p>
        </div>

        {/* Cream body — generously spaced */}
        <div
          className="flex flex-col gap-9"
          style={{ background: "#fdf5ec", padding: "56px 44px 56px 44px" }}
        >
          <form onSubmit={handleLogin} className="flex flex-col gap-8">
            {/* Username */}
            <div className="flex flex-col gap-3">
              <label
                className="font-800 uppercase tracking-[0.2em]"
                style={{ color: "#a0724a", fontSize: "12px", fontWeight: 800 }}
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="w-full outline-none transition-all"
                style={{
                  height: "56px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  background: "#f0e0cd",
                  border: "2px solid #e4c9b0",
                  borderRadius: "14px",
                  color: "#5c3b1a",
                  fontSize: "15px",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#e07b21"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(224,123,33,0.12)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#e4c9b0"; e.currentTarget.style.boxShadow = "none"; }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-3">
              <label
                className="font-800 uppercase tracking-[0.2em]"
                style={{ color: "#a0724a", fontSize: "12px", fontWeight: 800 }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full outline-none transition-all"
                style={{
                  height: "56px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  background: "#f0e0cd",
                  border: "2px solid #e4c9b0",
                  borderRadius: "14px",
                  color: "#5c3b1a",
                  fontSize: "15px",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#e07b21"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(224,123,33,0.12)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#e4c9b0"; e.currentTarget.style.boxShadow = "none"; }}
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer font-700" style={{ color: "#a0724a", fontSize: "13px", fontWeight: 700 }}>
                <input type="checkbox" className="accent-[#e07b21] w-4 h-4 rounded" />
                Remember me
              </label>
              <a href="#" style={{ color: "#e07b21", fontSize: "13px", fontWeight: 800 }} className="underline underline-offset-2">
                Forgot password?
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isLoading || !username || !password}
                className="transition-all hover:brightness-110 active:scale-95 disabled:opacity-60 shadow-md"
                style={{
                  background: "#e07b21",
                  paddingLeft: "68px",
                  paddingRight: "68px",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                  borderRadius: "999px",
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 900,
                  fontSize: "15px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : "SIGN IN"}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <span className="text-2xl select-none">🌵</span>
            <p style={{ color: "#c8a882", fontSize: "13px", fontWeight: 600 }}>
              No account?{" "}
              <a href="#" style={{ color: "#e07b21", fontWeight: 800 }} className="underline underline-offset-2">
                Plant a seed
              </a>
            </p>
            <span className="text-2xl select-none">🌻</span>
          </div>
        </div>
      </div>
    </div>
  );
}
