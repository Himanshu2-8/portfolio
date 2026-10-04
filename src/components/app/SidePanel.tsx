import cidImg from "@/assets/cid.jpg"
import { SiLeetcode, SiCodeforces } from "react-icons/si"
import { FaGithub } from "react-icons/fa"

const links = [
  { label: "LeetCode", href: "https://leetcode.com/u/Architect_04", icon: SiLeetcode },
  { label: "Codeforces", href: "https://codeforces.com/profile/Himanshu_Pragyan", icon: SiCodeforces },
  { label: "GitHub", href: "https://github.com/Himanshu2-8", icon: FaGithub },
]

export default function SidePanel() {
  return (
    <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-28 lg:self-start rounded-3xl p-5 flex flex-col items-center bg-accent">
      <div className="w-full rounded-2xl overflow-hidden group">
        <img src={cidImg} alt="Profile" className="w-full h-72 object-cover grayscale-30 transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
      </div>


      <h1 className="text-neutral-950 text-3xl font-bold mt-5">
        Himanshu Pragyan
      </h1>
      <p className="text-neutral-900/70 text-sm font-medium mt-1">
        Full-Stack & AI Engineer
      </p>

      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-950/10 px-3 py-1 text-xs font-medium text-neutral-950">
        <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
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
            className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950/10 text-neutral-950 hover:bg-neutral-950 hover:text-accent transition"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      <a
        href="/resume.pdf"
        download
        className="mt-5 w-full text-center rounded-xl bg-neutral-950 text-accent font-semibold py-3 hover:bg-neutral-800 transition"
      >
        Download Resume
      </a>
    </div>
  )
}

