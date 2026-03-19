"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
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
    <form onSubmit={handleLogin} className="flex flex-col gap-8">
      {/* Username */}
      <div className="flex flex-col gap-3">
        <label
          className="uppercase tracking-[0.2em]"
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
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#e07b21";
            e.currentTarget.style.boxShadow = "0 0 0 4px rgba(224,123,33,0.12)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#e4c9b0";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-3">
        <label
          className="uppercase tracking-[0.2em]"
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
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#e07b21";
            e.currentTarget.style.boxShadow = "0 0 0 4px rgba(224,123,33,0.12)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#e4c9b0";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Remember / Forgot */}
      <div className="flex items-center justify-between">
        <label
          className="flex items-center gap-2.5 cursor-pointer"
          style={{ color: "#a0724a", fontSize: "13px", fontWeight: 700 }}
        >
          <input type="checkbox" className="accent-[#e07b21] w-4 h-4 rounded" />
          Remember me
        </label>
        <a
          href="#"
          style={{ color: "#e07b21", fontSize: "13px", fontWeight: 800 }}
          className="underline underline-offset-2"
        >
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
          ) : (
            "SIGN IN"
          )}
        </button>
      </div>
    </form>
  );
}
