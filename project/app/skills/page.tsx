"use client";

import { useEffect, useMemo, useState } from "react";
import type { IconType as RIIconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiTensorflow,
  SiMediapipe,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiJsonwebtokens,
  SiSwagger,
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandVscode, TbDatabase } from "react-icons/tb";

export default function SkillsPage() {
  type Skill = { name: string; icon: RIIconType | string; color: string };
  type Group = { name: string; radius: number; skills: Skill[] };

  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState(0);

  const groups: Group[] = useMemo(
    () => [
      {
        name: "Languages",
        radius: 180,
        skills: [
          { name: "C", icon: SiC, color: "#A8B9CC" },
          { name: "C++", icon: SiCplusplus, color: "#00599C" },
          { name: "Python", icon: SiPython, color: "#3776AB" },
          { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
          { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
          { name: "SQL", icon: TbDatabase, color: "#3B82F6" },
        ],
      },
      {
        name: "Frontend",
        radius: 230,
        skills: [
          { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
          { name: "React", icon: SiReact, color: "#61DAFB" },
          { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
          { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
          { name: "CSS3", icon: SiCss3, color: "#1572B6" },
          { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
          { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
          { name: "jQuery", icon: SiJquery, color: "#0769AD" },
        ],
      },
      {
        name: "Backend",
        radius: 280,
        skills: [
          { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
          { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
          { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
          { name: "REST APIs", icon: SiSwagger, color: "#85EA2D" },
          { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
        ],
      },
      {
        name: "Full Stack",
        radius: 320,
        skills: [
          { name: "MERN", icon: SiReact, color: "#61DAFB" },
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
          { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
          { name: "React", icon: SiReact, color: "#61DAFB" },
          { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
        ],
      },
      {
        name: "Databases",
        radius: 360,
        skills: [
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
          { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        ],
      },
      {
        name: "Machine Learning",
        radius: 400,
        skills: [
          { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
          { name: "MediaPipe", icon: SiMediapipe, color: "#00B3FF" },
          { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
          { name: "NumPy", icon: SiNumpy, color: "#013243" },
          { name: "Pandas", icon: SiPandas, color: "#150458" },
        ],
      },
      {
        name: "Tools & Platforms",
        radius: 440,
        skills: [
          { name: "Git", icon: SiGit, color: "#F05032" },
          { name: "GitHub", icon: SiGithub, color: "#181717" },
          { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
          { name: "Linux", icon: SiLinux, color: "#FCC624" },
          { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % groups.length), 5000);
    return () => clearInterval(id);
  }, [groups.length]);

  const center = groups[active];

  return (
    <section id="skills" className="min-h-screen bg-cosmic pt-20 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-electric text-center mb-8">Skills & Expertise</h1>

        <div className="flex justify-center mb-6">
          <div className="glass-blue rounded-2xl p-2 md:p-4 inline-flex flex-wrap gap-2 justify-center">
            {groups.map((g, i) => (
              <button
                key={g.name}
                onClick={() => setActive(i)}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                  active === i ? "bg-blue-600 text-white shadow-lg" : "text-blue-200 hover:text-white hover:bg-blue-600/50"
                }`}
              >
                {g.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-2xl md:max-w-3xl mx-auto aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 md:w-24 md:h-24 glass-blue rounded-full flex items-center justify-center">
                <span className="text-sm md:text-lg font-bold text-electric text-center">{center.name}</span>
              </div>

              {center.skills.map((s, idx) => {
                const count = center.skills.length;
                const angle = (idx * (360 / count)) * (Math.PI / 180);
                const radius = Math.min(center.radius * 0.45, 110);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const IconComp = s.icon as RIIconType;

                return (
                  <div
                    key={s.name}
                    style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    className="group"
                    onMouseEnter={() => setHovered(s.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 glass-blue rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {typeof s.icon === "string" ? (
                        <span className="text-xl" style={{ color: s.color }}>{s.icon as string}</span>
                      ) : (
                        <IconComp className="w-6 h-6 md:w-8 md:h-8" style={{ color: s.color }} />
                      )}
                    </div>

                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 text-white px-2 py-1 rounded-lg text-xs md:text-sm whitespace-nowrap z-10 transition-opacity duration-200 ${
                        hovered === s.name ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {s.name}
                      <div className="w-2 h-2 bg-black/80 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}