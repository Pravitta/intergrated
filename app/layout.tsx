import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Bloomlist - Your Week, Blooming",
  description: "A cute and minimal productivity to-do list.",
};

const CORNER_DECS = [
  { pos: "top-4 left-4", items: ["🌵", "🌸", "🍃"], sizes: ["96px", "48px", "30px"] },
  { pos: "top-4 right-4", items: ["🪴", "🌼", "✨"], sizes: ["88px", "44px", "28px"] },
  { pos: "bottom-4 left-4", items: ["🌿", "💐", "🌵"], sizes: ["36px", "52px", "80px"] },
  { pos: "bottom-4 right-4", items: ["🍀", "🌻", "🪴"], sizes: ["32px", "52px", "80px"] },
];

const SIDE_DECS = {
  left: ["🌾", "🌺", "🍃"],
  right: ["🌱", "🌿", "🍀"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        style={{ 
          background: "#f3e3ce", 
          minHeight: "100vh", 
          overflowX: "hidden",
          margin: 0,
          fontFamily: "'Nunito', sans-serif" 
        }}
      >
        {/* Background hearts */}
        {["top-[6%] left-[22%]", "top-[22%] right-[18%]", "bottom-[16%] left-[25%]", "bottom-[8%] right-[22%]", "top-[48%] left-[8%]", "top-[52%] right-[9%]"].map((pos, i) => (
          <span key={i} className={`fixed text-[#d98c5f]/20 text-base select-none pointer-events-none ${pos}`}>♥</span>
        ))}

        {/* Global decorations */}
        {CORNER_DECS.map(({ pos, items, sizes }, i) => (
          <div key={i} className={`fixed ${pos} z-0 flex flex-col items-center gap-2 select-none pointer-events-none`}>
            {items.map((item, j) => (
              <span key={j} style={{ fontSize: sizes[j], lineHeight: 1, opacity: j === 0 ? 1 : j === 1 ? 0.8 : 0.5 }}>{item}</span>
            ))}
          </div>
        ))}

        {/* Mid-left side decorations */}
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none flex flex-col items-center gap-3">
          <span style={{ fontSize: "40px", opacity: 0.6 }}>{SIDE_DECS.left[0]}</span>
          <span style={{ fontSize: "50px", opacity: 0.7 }}>{SIDE_DECS.left[1]}</span>
          <span style={{ fontSize: "34px", opacity: 0.5 }}>{SIDE_DECS.left[2]}</span>
        </div>

        {/* Mid-right side decorations */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none flex flex-col items-center gap-3">
          <span style={{ fontSize: "40px", opacity: 0.6 }}>{SIDE_DECS.right[0]}</span>
          <span style={{ fontSize: "50px", opacity: 0.7 }}>{SIDE_DECS.right[1]}</span>
          <span style={{ fontSize: "36px", opacity: 0.5 }}>{SIDE_DECS.right[2]}</span>
        </div>

        <main className="relative z-10 min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}