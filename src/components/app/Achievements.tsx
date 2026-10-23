import { FaTrophy } from "react-icons/fa"
import { SiMeta, SiLeetcode, SiHackerrank } from "react-icons/si"
import { SquigglyText } from "../ui/squiggly-text"

const achievements = [
  {
    title: "Meta Hacker Cup 2025",
    detail:
      "Secured a global rank of 6,976 in Meta's prestigious annual competitive programming tournament.",
    icon: SiMeta,
    color: "#0081fb",
    tag: "Global",
  },
  {
    title: "BrAINWAVE AI/ML Hackathon — Finalist",
    detail:
      "Finalist among 100+ teams at the national-level hackathon organized by AIMS-DTU.",
    icon: FaTrophy,
    color: "#facc15",
    tag: "National",
  },
  {
    title: "500+ DSA Problems Solved",
    detail:
      "Solved 500+ Data Structures and Algorithms problems across LeetCode, Codeforces, CodeChef, and GeeksforGeeks.",
    icon: SiHackerrank,
    color: "#2ec866",
    tag: "Consistency",
  },
  {
    title: "Competitive Programming Ratings",
    detail: "Rated 1600 on LeetCode and 1000 on Codeforces.",
    icon: SiLeetcode,
    color: "#ffa116",
    tag: "Ratings",
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="flex min-h-[calc(100vh-4rem)] scroll-mt-20 flex-col justify-center rounded-3xl p-2 lg:p-6"
    >
      <SquigglyText className="pb-10 text-6xl leading-[0.85] font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
        ACHIEVEMENTS
      </SquigglyText>
      <div className="grid gap-4">
        {achievements.map(({ title, detail, icon: Icon, color, tag }) => (
          <div
            key={title}
            className="group flex items-start gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-600"
          >
            <div className="mt-0.5 rounded-xl border border-neutral-800 bg-neutral-950 p-3">
              <Icon size={24} style={{ color }} />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-neutral-100">
                  {title}
                </h3>
                <span className="rounded-full border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-[10px] font-medium tracking-wide text-neutral-400 uppercase">
                  {tag}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-400">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
