import React, { useState, useRef } from "react";
import { 
  
  GlobeAltIcon, 
  ServerIcon, 
  CubeTransparentIcon,
  SparklesIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";
import {
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJavascript,
  SiWordpress,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { Rocket, Code2 } from "lucide-react";

// --- DATA ---
const STACK = {
  frontend: [
    { name: "HTML5", Icon: SiHtml5, color: "#E34F26", desc: "Markup" },
    { name: "CSS3", Icon: SiCss, color: "#1572B6", desc: "Styling" },
    { name: "Bootstrap 5", Icon: SiBootstrap, color: "#7952B3", desc: "Framework" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", desc: "Interactivity" },
  ],
  platforms: [
    { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
    { name: "GoHighLevel", Icon: Rocket, color: "#4f46e5" },
  ],
  workflow: [
    { name: "Git & GitHub", Icon: SiGit, color: "#F05032", desc: "Version Control" },
    { name: "Figma", Icon: SiFigma, color: "#F24E1E", desc: "Design Handoff" },
    { name: "VS Code", Icon: Code2, color: "#007ACC", desc: "Editor" },
  ]
};

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

export default function ModernTechStack() {
  return (
    <section className="relative min-h-screen w-full bg-[#030303] text-white overflow-hidden selection:bg-indigo-500/30">
      
      {/* 1. Dynamic Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80"></div>
        {/* Aurora Blurs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:bg-white/10 transition-colors cursor-default">
            <SparklesIcon className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-medium tracking-wide text-indigo-200">TOOLKIT_ONLINE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
            The <br className="md:hidden"/> Toolkit
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            A focused set of tools for building fast, responsive websites. <br className="hidden md:block" />
            From Figma handoff to a live, SEO-friendly page.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          
          {/* COL 1: Design & Workflow */}
          <div className="md:col-span-1 flex flex-col gap-6">
             <Card title="Design & Workflow" icon={<CubeTransparentIcon className="w-5 h-5"/>} className="h-full min-h-[300px]">
                <div className="flex flex-col gap-4 mt-2">
                  {STACK.workflow.map((item) => (
                    <div key={item.name} className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center p-1.5 shadow-inner">
                          <item.Icon className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-200">{item.name}</div>
                          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{item.desc}</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 group-hover:shadow-[0_0_10px_rgba(129,140,248,0.5)] transition-all"></div>
                    </div>
                  ))}
                </div>
                {/* Visual Filler */}
                <div className="mt-auto pt-6">
                    <div className="w-full h-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-transparent rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-slide-loading"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-mono text-zinc-600">
                        <span>WORKFLOW</span>
                        <span>DAILY_USE</span>
                    </div>
                </div>
             </Card>
          </div>

          {/* COL 2: Frontend Core (Centerpiece) */}
          <div className="md:col-span-2">
             <Card title="Frontend Foundations" icon={<CodeBracketIcon className="w-5 h-5"/>} className="h-full min-h-[300px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {STACK.frontend.map((item) => (
                    <div key={item.name} className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 p-6 hover:border-white/10 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <item.Icon className="w-16 h-16 grayscale rotate-12 transform translate-x-4 -translate-y-4" style={{ color: item.color }} />
                        </div>
                        
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-2 mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                <item.Icon className="w-full h-full" style={{ color: item.color }} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
                                <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-white/5 text-zinc-400 border border-white/5">
                                    {item.desc}
                                </span>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/10 flex items-center gap-4">
                    <GlobeAltIcon className="w-6 h-6 text-blue-400" />
                    <div>
                        <div className="text-sm font-medium text-blue-200">SEO-Friendly by Default</div>
                        <div className="text-xs text-blue-400/60">Optimized for speed & search visibility</div>
                    </div>
                </div>
             </Card>
          </div>

          {/* ROW 2: Platforms (Full Width) */}
          <div className="md:col-span-3">
             <Card title="CMS & Funnel Platforms" icon={<ServerIcon className="w-5 h-5"/>}>
                <div className="flex flex-wrap md:flex-nowrap gap-6 items-center mt-4">
                    {/* Terminal Graphic */}
                    <div className="w-full md:w-1/3 bg-black/50 rounded-lg border border-white/5 p-4 font-mono text-xs text-zinc-400">
                        <div className="flex gap-1.5 mb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                        </div>
                        <div className="space-y-1">
                            <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> deploy site</p>
                            <p className="text-zinc-600">Optimizing for SEO...</p>
                            <p><span className="text-green-400">✔</span> Cross-browser tested</p>
                            <p><span className="text-green-400">✔</span> Mobile-first verified</p>
                            <p className="animate-pulse">_</p>
                        </div>
                    </div>

                    {/* Tech List */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {STACK.platforms.map((item) => (
                            <div key={item.name} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <item.Icon className="w-8 h-8 mb-3" style={{ color: item.color }} />
                                <span className="text-sm font-medium text-zinc-300">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
             </Card>
          </div>

        </div>
      </div>

      {/* CSS Animation Inject */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes slide-loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
        }
        .animate-slide-loading {
            animation: slide-loading 2s infinite linear;
        }
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function Card({ 
    children, 
    title, 
    icon,
    className = "" 
}: { 
    children: React.ReactNode; 
    title: string; 
    icon: React.ReactNode;
    className?: string; 
}) {
    // Holographic Tilt Effect
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden p-6 md:p-8 flex flex-col gap-4 group",
                className
            )}
        >
            {/* Spotlight Gradient */}
            <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800/50 text-zinc-300 border border-white/5">
                        {icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>
                </div>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600/50"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
                {children}
            </div>
        </div>
    );
}