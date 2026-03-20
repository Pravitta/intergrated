import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function BloomlistHub() {
  const teamProjects = [
    {
      name: "Pravitta's Bloomlist",
      path: "/pravitta",
      description: "A cute & minimal collective productivity planner.",
      emoji: "🌸",
      color: "#e07b21",
    },
    {
      name: "Deeksha's Focus Timer",
      path: "/deeksha",
      description: "Sakura-themed Pomodoro timer for deep work.",
      emoji: "🪴",
      color: "#7c9a67",
    },
    {
      name: "Kaarthika's Quote Hub",
      path: "/kaarthika",
      description: "Daily inspiration with a minimal quote generator.",
      emoji: "🌻",
      color: "#d4a373",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden bg-[#f3e3ce]">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 text-8xl opacity-10 select-none pointer-events-none animate-pulse">🌿</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-10 select-none pointer-events-none animate-pulse delay-700">🌿</div>

      <div className="max-w-4xl w-full z-10 text-center space-y-12">
        <header className="space-y-4">
          <h1 
            className="font-black tracking-tight"
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(48px, 10vw, 96px)", color: "#3b2a1a", lineHeight: 1 }}
          >
            Team Bloomlist
          </h1>
          <p className="text-[#a0724a] font-bold text-lg xl:text-xl max-w-2xl mx-auto">
            One repository, three perspectives. Choose a project to see our collective growth.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {teamProjects.map((project, i) => (
            <Link key={i} href={project.path} className="block group">
              <Card className="h-full border-2 border-primary/5 bg-white/60 backdrop-blur-md shadow-xl rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 overflow-hidden relative">
                <div 
                  className="absolute top-0 left-0 w-full h-2" 
                  style={{ background: project.color }}
                />
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-500 drop-shadow-md">
                    {project.emoji}
                  </span>
                  <h2 className="font-black text-xl text-[#3b2a1a]">
                    {project.name}
                  </h2>
                  <p className="text-sm font-bold text-[#a0724a]">
                    {project.description}
                  </p>
                  <span 
                    className="mt-4 px-6 py-2 rounded-full font-black text-xs text-white uppercase tracking-widest shadow-md transition-all group-hover:scale-105"
                    style={{ background: project.color }}
                  >
                    View Project ✨
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <footer className="pt-12 text-[#a0724a]/60 font-black text-xs uppercase tracking-[0.3em]">
          Combined Repository • 2026 Bloomlist Team
        </footer>
      </div>
    </div>
  );
}
