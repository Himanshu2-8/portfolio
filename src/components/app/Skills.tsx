import { FaJava } from "react-icons/fa"
import {
  SiTypescript, SiJavascript, SiPython, SiReact, SiNextdotjs, SiTailwindcss,
  SiSpringboot, SiNodedotjs, SiFastapi, SiPostgresql, SiRedis, SiApachekafka,
  SiDocker, SiGit,
} from "react-icons/si"
import { SquigglyText } from "../ui/squiggly-text"

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
      { name: "Kafka", icon: SiApachekafka, color: "#ffffff" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Git", icon: SiGit, color: "#f05032" },
    ],
  },
]


export default function Skills() {
  return (<section
    id="home"
    className="min-h-[calc(100vh-4rem)] rounded-3xl p-2 lg:p-6 flex flex-col justify-center"
  >
    <SquigglyText className="text-white text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.85] pb-10">
      SKILLS
    </SquigglyText>
    {skillGroups.map((group) => (
      <div key={group.title}>
        <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-neutral-500">
          {group.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {group.skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-neutral-200 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-600 hover:cursor-pointer"
            >
              <Icon size={20} style={{ color }} />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>)
}