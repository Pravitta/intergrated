import Link from "next/link";
import DashboardContent from "../components/DashboardContent";

export default function DashboardPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Page Card */}
      <div
        className="relative z-10 flex flex-col flex-1 rounded-3xl overflow-hidden"
        style={{ background: "#fdf5ec", margin: "14px 32px", boxShadow: "0 4px 30px rgba(0,0,0,0.07)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between shrink-0" style={{ padding: "20px 36px 14px 36px" }}>
          <div className="flex items-end gap-2 select-none">
            <span style={{ fontSize: "50px", lineHeight: 1 }}>🌵</span>
            <span style={{ fontSize: "32px", lineHeight: 1, marginBottom: "6px" }}>🪴</span>
            <span style={{ fontSize: "20px", lineHeight: 1, marginBottom: "10px", opacity: 0.6 }}>🌸</span>
          </div>
          <h1 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "58px", color: "#3b2a1a", lineHeight: 1 }}>Weekly Planner</h1>
          <div className="flex items-end gap-2 select-none">
            <span style={{ fontSize: "20px", lineHeight: 1, marginBottom: "10px", opacity: 0.6 }}>🌼</span>
            <span style={{ fontSize: "32px", lineHeight: 1, marginBottom: "6px" }}>🌻</span>
            <span style={{ fontSize: "48px", lineHeight: 1 }}>🌷</span>
            <Link href="/" className="ml-3 transition-colors hover:opacity-70" style={{ color: "#c8a882", fontSize: "13px", fontWeight: 700, alignSelf: "center", paddingBottom: "4px" }}>
              ← Sign out
            </Link>
          </div>
        </div>

        {/* Body (Client Component) */}
        <DashboardContent />
      </div>
    </div>
  );
}
