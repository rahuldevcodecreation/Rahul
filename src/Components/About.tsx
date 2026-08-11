import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  BoltIcon, 
  DocumentDuplicateIcon 
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
import { Code2 } from "lucide-react";

// --- UTILS ---
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

export default function About() {
  const sectionRef = useRef<HTMLOptionElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Staggered reveal of the bento grid items
      gsap.fromTo(
        ".bento-item",
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-zinc-950 py-24 px-6 overflow-hidden">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
             <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] uppercase tracking-widest text-indigo-300 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              System Architecture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Code<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300"> Scale Excellence</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences. 
            Bridging the gap between design systems and raw engineering logic.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          
          {/* 1. Main Bio (Spans 8 cols) */}
          <SpotlightCard className="bento-item md:col-span-4 lg:col-span-8 md:row-span-2">
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <CpuChipIcon className="w-32 h-32 text-indigo-500 rotate-12" />
              </div>
              
              <div className="relative z-10">
                <GlobeAltIcon className="w-8 h-8 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">The Story So Far</h3>
                <p className="text-zinc-400 leading-7">
                  I'm Rahul, a Frontend Developer based in <span className="text-zinc-200">Palampur, Himachal Pradesh, India.</span>
                </p>
                <p className="text-zinc-400 leading-7 mt-4">
                  Over the past year at Codecreationstudio, I've built responsive, mobile-first
                  websites and WordPress sites, and created landing pages and funnels using
                  <span className="text-indigo-300"> GoHighLevel</span>. My work spans converting
                  Figma UI/UX designs into pixel-perfect, production-ready pages, ensuring
                  cross-browser compatibility, and optimizing sites for speed and SEO.
                </p>
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                <TechBadge label="HTML5 / CSS3" />
                <TechBadge label="Bootstrap 5" />
                <TechBadge label="WordPress" />
                <TechBadge label="GoHighLevel" />
              </div>
            </div>
          </SpotlightCard>

          {/* 2. Stats (Spans 4 cols) */}
          <SpotlightCard className="bento-item md:col-span-2 lg:col-span-4">
            <div className="p-6 flex flex-col items-center justify-center h-full text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                1+
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mt-2">Years Experience</div>
              <div className="w-full h-px bg-zinc-800 my-4" />
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                4
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mt-2">Portfolio Projects</div>
            </div>
          </SpotlightCard>

          {/* 3. Connect/Copy (Spans 4 cols) */}
          <SpotlightCard className="bento-item md:col-span-2 lg:col-span-4 cursor-pointer group" onClick={() => { navigator.clipboard.writeText('rahul.r2001n@gmail.com'); alert('Email Copied!') }}>
             <div className="p-6 h-full flex flex-col justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-400 text-sm">Drop a signal</span>
                  <DocumentDuplicateIcon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-xl md:text-2xl font-mono text-white group-hover:text-indigo-300 transition-colors truncate">
                  rahul.r2001n@gmail.com
                </div>
                <div className="mt-2 text-xs text-indigo-500/50 group-hover:text-indigo-400 transition-colors">
                  // Click to copy address
                </div>
             </div>
          </SpotlightCard>

          {/* 4. The Infinite Stack (Spans 12 cols - Strip) */}
          <SpotlightCard className="bento-item md:col-span-6 lg:col-span-12 overflow-hidden">
             <div className="p-4 flex items-center gap-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0e1116] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0e1116] to-transparent z-10" />
                
                <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
                   {/* Duplicated list for infinite scroll illusion */}
                   {[...STACK, ...STACK].map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 group/icon">
                         <tech.Icon className="w-6 h-6 grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all text-white" />
                         <span className="text-sm font-mono text-zinc-600 group-hover/icon:text-zinc-300 transition-colors">{tech.name}</span>
                      </div>
                   ))}
                </div>
             </div>
          </SpotlightCard>

          {/* 5. Philosophy/Code (Spans 6 cols) */}
          <SpotlightCard className="bento-item md:col-span-3 lg:col-span-6">
             <div className="p-6 h-full">
                <div className="flex items-center gap-2 text-zinc-500 mb-4 text-xs font-mono">
                   <CodeBracketIcon className="w-4 h-4" />
                   <span>philosophy.ts</span>
                </div>
                <div className="font-mono text-xs md:text-sm text-zinc-400 bg-black/30 p-4 rounded-lg border border-white/5">
                   <p><span className="text-purple-400">const</span> <span className="text-blue-400">craft</span> = <span className="text-yellow-300">{"{"}</span></p>
                   <p className="pl-4">markup: <span className="text-green-400">"semantic"</span>,</p>
                   <p className="pl-4">layout: <span className="text-orange-400">"mobile-first"</span>,</p>
                   <p className="pl-4">handoff: <span className="text-cyan-400">"pixel-perfect"</span>,</p>
                   <p className="pl-4">seo: <span className="text-red-400">"optimized"</span></p>
                   <p><span className="text-yellow-300">{"}"}</span>;</p>
                </div>
             </div>
          </SpotlightCard>

           {/* 6. Current Focus (Spans 6 cols) */}
           <SpotlightCard className="bento-item md:col-span-3 lg:col-span-6 bg-indigo-900/10">
              <div className="p-6 h-full flex flex-col justify-between">
                 <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Current Focus</div>
                      <h4 className="text-lg font-medium text-white">WordPress & GoHighLevel Builds</h4>
                    </div>
                    <BoltIcon className="w-5 h-5 text-yellow-500 animate-pulse" />
                 </div>
                 <p className="text-zinc-400 text-sm mt-4">
                    Turning Figma designs into responsive, SEO-friendly websites and high-converting landing pages — theme customization, plugin integration, and funnel builds included.
                 </p>
                 <div className="mt-4 flex items-center text-xs text-white/50 gap-1 group cursor-pointer hover:text-white transition-colors">
                    {/* <span>View Experiments</span>
                    <ArrowTopRightOnSquareIcon className="w-3 h-3" /> */}
                 </div>
              </div>
           </SpotlightCard>

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function TechBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
      {label}
    </span>
  );
}

// The core "Skipper" component - tracks mouse for gradient
function SpotlightCard({ 
  children, 
  className = "", 
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-xl border border-zinc-800 bg-[#0e1116] shadow-2xl transition-all duration-300",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
} 

const STACK = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Bootstrap 5", Icon: SiBootstrap },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "WordPress", Icon: SiWordpress },
  { name: "Git", Icon: SiGit },
  { name: "Figma", Icon: SiFigma },
  { name: "VS Code", Icon: Code2 },
];