import cidImg from "@/assets/cid.jpg"
import { SiLeetcode, SiCodeforces } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import { CometCard } from "../ui/comet-card"

const links = [
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Architect_04",
    icon: SiLeetcode,
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/Himanshu_Pragyan",
    icon: SiCodeforces,
  },
  { label: "GitHub", href: "https://github.com/Himanshu2-8", icon: FaGithub },
]

export default function SidePanel() {
  return (
    <CometCard>
      <div className="flex min-h-[680px] w-full shrink-0 flex-col items-center justify-center rounded-3xl border border-white/10 bg-zinc-900 p-6 shadow-xl lg:sticky lg:top-10 lg:w-80">
        <div className="group w-full overflow-hidden rounded-2xl">
          <img
            src={cidImg}
            alt="Profile"
            className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <h1 className="mt-5 text-2xl font-bold text-white">Himanshu Pragyan</h1>
        <p className="mt-1 text-sm font-medium text-white/50">
          Full-Stack &amp; AI Engineer
        </p>

        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Open to internships
        </span>

        <div className="mt-5 flex gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/60 transition duration-200 hover:bg-accent hover:text-black"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-5 w-full rounded-xl bg-accent py-3 text-center font-bold text-black transition hover:opacity-90 active:scale-95"
        >
          Download Resume
        </a>
      </div>
    </CometCard>
  )
}
