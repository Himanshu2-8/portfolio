import { FaJava } from "react-icons/fa"
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiDocker,
  SiGit,
  SiElectron,
  SiMongodb,
  SiLangchain,
} from "react-icons/si"
import { SquigglyText } from "../ui/squiggly-text"

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Electron", icon: SiElectron, color: "#47848f" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "LangChain", icon: SiLangchain, color: "#1a73e8" },
    ],
  },
  {
    title: "Databases & Messaging",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
      { name: "Apache Kafka", icon: SiApachekafka, color: "#ffffff" },
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
  return (
    <section
      id="skills"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-20 flex-col justify-center rounded-3xl p-2 lg:p-6"
    >
      <SquigglyText className="pb-10 text-6xl leading-[0.85] font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
        SKILLS
      </SquigglyText>
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-3 text-sm font-medium tracking-wide text-neutral-500 uppercase">
            {group.title}
          </h3>
          <div className="mb-2 flex flex-wrap gap-3">
            {group.skills.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-neutral-200 transition duration-200 hover:-translate-y-0.5 hover:cursor-pointer hover:border-neutral-600"
              >
                <Icon size={20} style={{ color }} />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
