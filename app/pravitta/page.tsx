import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-16 relative overflow-hidden">
      {/* ── Main Container for Card & Nearby Decorations ── */}
      <div className="relative w-full max-w-[480px]">
        {/*
          Localized, non-overlapping decorations
          - Positioned relative to the login card
          - Scaled up for better visibility
        */}
        
        {/* Top-Left: Large Cactus & Flower */}
        <div className="absolute -top-24 -left-32 hidden xl:flex flex-col items-center gap-1 select-none pointer-events-none animate-in fade-in slide-in-from-right-4 duration-1000 delay-150">
          <span className="text-[100px] leading-none drop-shadow-md">🌵</span>
          <span className="text-4xl opacity-80">🌸</span>
        </div>

        {/* Top-Right: Potted Plant & Sparkle */}
        <div className="absolute -top-16 -right-28 hidden xl:flex flex-col items-center gap-1 select-none pointer-events-none animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
          <span className="text-[90px] leading-none drop-shadow-md">🪴</span>
          <span className="text-3xl opacity-60">✨</span>
        </div>

        {/* Bottom-Left: Bouquet & Leaf */}
        <div className="absolute -bottom-10 -left-24 hidden xl:flex flex-col items-center gap-1 select-none pointer-events-none animate-in fade-in slide-in-from-right-2 duration-1000 delay-500">
          <span className="text-6xl drop-shadow-sm">💐</span>
          <span className="text-3xl opacity-50">🍃</span>
        </div>

        {/* Bottom-Right: Sunflower & Clover */}
        <div className="absolute -bottom-12 -right-24 hidden xl:flex flex-col items-center gap-1 select-none pointer-events-none animate-in fade-in slide-in-from-left-2 duration-1000 delay-700">
          <span className="text-7xl drop-shadow-sm">🌻</span>
          <span className="text-3xl opacity-50">🍀</span>
        </div>

        {/* ── Login Card ── */}
        <div
          className="relative z-10 w-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(224,123,33,0.3)] bg-[#fdf5ec]"
        >
          {/* Orange header */}
          <div
            className="flex flex-col items-center justify-center px-10 relative"
            style={{ background: "#e07b21", paddingTop: "90px", paddingBottom: "90px" }}
          >
            <div className="flex gap-5 mb-10 translate-y-[-10px]">
              <div className="w-5 h-5 rounded-full bg-white/20 animate-pulse" />
              <div className="w-5 h-5 rounded-full bg-white/40 animate-pulse delay-150" />
              <div className="w-5 h-5 rounded-full bg-white/20 animate-pulse delay-300" />
            </div>
            <h1
              className="text-white font-black text-center leading-none tracking-tight"
              style={{ fontFamily: "'Dancing Script', cursive", fontSize: "min(64px, 14vw)" }}
            >
              Daily Spark ✨
            </h1>
            <p
              className="text-white/80 mt-4 font-black tracking-[0.3em] uppercase opacity-90"
              style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px" }}
            >
              Your week, blooming 🌸
            </p>
          </div>

          {/* Cream body */}
          <div
            className="flex flex-col gap-10 relative"
            style={{ background: "#fdf5ec", padding: "60px 48px 70px 48px" }}
          >
            <LoginForm />

            {/* Footer */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-[#e4c9b0]/30 relative">
              <span className="text-3xl select-none transform hover:scale-125 transition-transform cursor-default">🌵</span>
              <p className="text-[#a0724a] font-bold" style={{ fontSize: "14px" }}>
                New here?{" "}
                <a href="#" className="text-primary font-black underline underline-offset-4 hover:opacity-70 transition-all">
                  Plant a seed
                </a>
              </p>
              <span className="text-3xl select-none transform hover:scale-125 transition-transform cursor-default">🌻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
