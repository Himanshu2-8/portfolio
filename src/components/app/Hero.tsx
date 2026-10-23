import { FaGithub } from "react-icons/fa"
import { GitHubCalendar } from "react-github-calendar"
import { SquigglyText } from "../ui/squiggly-text"

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100%-4.5rem)] scroll-mt-20 flex-col justify-center rounded-3xl p-4 lg:p-6"
    >
      {/* Small label */}
      <p className="mb-6 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
        Software Developer
      </p>

      {/* Main heading */}
      <SquigglyText className="text-6xl leading-[0.85] font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
        SOFTWARE
        <br />
        <span className="text-white/15">ENGINEER</span>
      </SquigglyText>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-lg leading-relaxed font-medium text-white/60 lg:text-xl">
        I build modern web applications and backend systems with a focus on
        clean architecture, real-time experiences, and thoughtful design.
      </p>

      {/* GitHub */}
      <div className="mt-12 max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <FaGithub className="text-white/80" size={22} />
          <span className="font-semibold text-white/80">GitHub Activity</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <GitHubCalendar
            username="Himanshu2-8"
            colorScheme="dark"
            theme={{
              dark: ["#1a1a1a", "#0c2f3d", "#0a6e8a", "#0db8d9", "#16cbf9"],
            }}
            fontSize={12}
            blockSize={13}
            blockMargin={4}
            hideColorLegend={false}
            hideMonthLabels={false}
          />
        </div>
      </div>
    </section>
  )
}
