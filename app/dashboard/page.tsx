import Link from "next/link";
import DashboardContent from "../components/DashboardContent";

export default function DashboardPage() {
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden lg:overflow-visible">
      {/* Page Card */}
      <div
        className="relative z-10 flex flex-col flex-1 rounded-2xl lg:rounded-3xl overflow-hidden lg:overflow-visible mx-1 my-1 md:mx-2 md:my-2 lg:mx-4 lg:my-3 xl:mx-6 xl:my-4 shadow-2xl transition-all duration-500"
        style={{ background: "#fdf5ec" }}
      >
        {/* Responsive Header - Compressed & Bloom-Filled */}
        <div className="flex flex-col md:flex-row items-center justify-between shrink-0 gap-3 p-4 lg:px-12 lg:py-8 border-b-2 border-[#e4c9b0]/20 relative overflow-hidden">
          {/* Left Decorations - LUSH & OVERSIZED */}
          <div className="flex items-end gap-5 select-none order-2 md:order-1 px-4 relative z-10">
            <span className="text-7xl lg:text-[84px] leading-none drop-shadow-md transform hover:scale-110 transition-transform cursor-default">🌵</span>
            <span className="text-5xl lg:text-[56px] leading-none mb-2 opacity-90 drop-shadow-sm">🪴</span>
            <span className="text-3xl lg:text-[40px] leading-none mb-3 opacity-70">🌸</span>
            <span className="absolute -top-4 -left-2 text-4xl opacity-40 animate-pulse">✨</span>
          </div>

          {/* Title */}
          <h1 
            className="font-black text-center order-1 md:order-2 tracking-tight transition-all duration-300 relative z-10"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(36px, 9vw, 84px)", color: "#3b2a1a", lineHeight: 1 }}
          >
            Weekly Planner
          </h1>

          {/* Right Decorations & Sign Out - LUSH & OVERSIZED */}
          <div className="flex items-end gap-5 select-none order-3 px-4 relative z-10">
            <div className="hidden sm:flex items-end gap-4 pr-6 relative">
              <span className="text-3xl lg:text-[40px] leading-none mb-3 opacity-70">🌼</span>
              <span className="text-5xl lg:text-[56px] leading-none mb-2 opacity-90 drop-shadow-sm">🌻</span>
              <span className="text-7xl lg:text-[84px] leading-none drop-shadow-md transform hover:scale-110 transition-transform cursor-default">🌷</span>
              <span className="absolute -top-6 -right-2 text-5xl opacity-40 animate-pulse">✨</span>
            </div>
            <Link 
              href="/" 
              className="px-6 py-3 rounded-full border-2 border-primary/40 bg-white/40 hover:bg-primary/10 transition-all text-sm font-black text-primary hover:text-primary-foreground whitespace-nowrap shadow-md"
            >
              ← Sign out
            </Link>
          </div>
          
          {/* Subtle corner blooms to "fill the sides" even more */}
          <span className="absolute top-0 left-0 text-3xl opacity-10 p-2">🌿</span>
          <span className="absolute top-0 right-0 text-3xl opacity-10 p-2">🌿</span>
        </div>

        {/* Body (Client Component) */}
        <DashboardContent />
      </div>
    </div>
  );
}
