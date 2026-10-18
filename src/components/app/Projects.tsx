import { FaArrowAltCircleRight } from "react-icons/fa"

interface Project {
  title: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    title: "Hoop",
    description:
      "Real-time multiplayer trivia duel platform. LangChain and Groq LLMs generate topic-based quiz questions on the fly, while Socket.IO powers live player rooms, round timers and instant score updates. Built with Next.js and TypeScript, with game lobbies, leaderboards and immediate answer evaluation.",
    url: "https://hoop-ui.vercel.app",
  },
  {
    title: "ClickPic",
    description:
      "Backend for a stationery and printout ordering platform, serving 100+ active users with live orders and payments. Includes role-based admin workflows for inventory management, order fulfillment and reporting, used in day-to-day operations.",
    url: "https://presto.bytesoc.dev/",
  },
  {
    title: "Explore",
    description:
      "Autonomous AI research assistant that searches the web, scrapes pages and writes structured reports with source references using Mistral LLMs. A step-by-step pipeline separates research, summarization and review, and a Streamlit UI shows live progress with configurable limits to control API costs.",
    url: "https://explore-xngmugfenxrm6xtnulnj3x.streamlit.app/",
  },
]

export default function Projects() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] flex-col justify-center rounded-3xl p-8 lg:p-12"
    >
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url}>{project.url}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
