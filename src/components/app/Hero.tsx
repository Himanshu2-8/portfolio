import { FaGithub } from "react-icons/fa";
import {GitHubCalendar} from "react-github-calendar";
import { SquigglyText } from "../ui/squiggly-text";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] rounded-3xl p-8 lg:p-12 flex flex-col justify-center"
    >
      {/* Small label */}
      <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6">
        Software Developer
      </p>

      {/* Main heading */}
      <SquigglyText className="text-white text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.85]">
        SOFTWARE
        <br />
        <span className="text-white/15">ENGINEER</span>
      </SquigglyText>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-white/60 text-lg lg:text-xl leading-relaxed font-medium">
        I build modern web applications and backend systems with
        a focus on clean architecture, real-time experiences, and
        thoughtful design.
      </p>

      {/* GitHub */}
      <div className="mt-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <FaGithub className="text-white/80" size={22} />
          <span className="text-white/80 font-semibold">
            GitHub Activity
          </span>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
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
  );
}