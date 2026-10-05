import cidImg from "@/assets/cid.jpg"
import { SiLeetcode, SiCodeforces } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import { CometCard } from "../ui/comet-card"

const links = [
  { label: "LeetCode", href: "https://leetcode.com/u/Architect_04", icon: SiLeetcode },
  { label: "Codeforces", href: "https://codeforces.com/profile/Himanshu_Pragyan", icon: SiCodeforces },
  { label: "GitHub", href: "https://github.com/Himanshu2-8", icon: FaGithub },
]

export default function SidePanel() {
  return (
    <CometCard>
      <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-10 rounded-3xl p-6 flex flex-col items-center bg-zinc-900 border border-white/10 shadow-xl min-h-[680px] justify-center">
        <div className="w-full rounded-2xl overflow-hidden group">
          <img src={cidImg} alt="Profile" className="w-full h-96 object-cover transition duration-500 group-hover:scale-105" />
        </div>

        <h1 className="text-white text-2xl font-bold mt-5">
          Himanshu Pragyan
        </h1>
        <p className="text-white/50 text-sm font-medium mt-1">
          Full-Stack &amp; AI Engineer
        </p>

        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Open to internships
        </span>

        <div className="flex gap-3 mt-5">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-accent hover:text-black transition duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-5 w-full text-center rounded-xl bg-accent text-black font-bold py-3 hover:opacity-90 active:scale-95 transition"
        >
          Download Resume
        </a>
      </div>
    </CometCard>
  )
}
