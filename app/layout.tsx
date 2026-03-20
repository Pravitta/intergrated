import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Bloomlist - Your Week, Blooming",
  description: "A cute and minimal productivity to-do list.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className="min-h-screen relative overflow-x-hidden"
        style={{ 
          background: "#f3e3ce", 
          margin: 0,
          fontFamily: "'Nunito', sans-serif" 
        }}
      >
        {/* Subtle background hearts - kept as permanent background texture */}
        <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
          {["top-[6%] left-[22%]", "top-[22%] right-[18%]", "bottom-[16%] left-[25%]", "bottom-[8%] right-[22%]", "top-[48%] left-[8%]", "top-[52%] right-[9%]"].map((pos, i) => (
            <span key={i} className={`absolute text-[#d98c5f]/20 text-base ${pos}`}>♥</span>
          ))}
        </div>

        <main className="relative z-10 min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}