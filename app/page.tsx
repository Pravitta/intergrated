import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      {/* ── Login Card ── */}
      <div
        className="relative z-10 w-full max-w-[460px] rounded-3xl overflow-hidden"
        style={{ boxShadow: "10px 10px 0px rgba(0,0,0,0.07)" }}
      >
        {/* Orange header */}
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

        {/* Cream body */}
        <div
          className="flex flex-col gap-9"
          style={{ background: "#fdf5ec", padding: "56px 44px 56px 44px" }}
        >
          <LoginForm />

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
