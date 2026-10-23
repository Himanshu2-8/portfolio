import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: ReactNode
  }[]
  className?: string
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-50 mb-6 flex items-center justify-center bg-background/80 py-1 backdrop-blur-md",
        className
      )}
    >
      <div className="flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md">
        {navItems.map((navItem, idx) => {
          const isExternal = navItem.link.startsWith("http")
          return (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
              className={cn(
                "relative flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
              )}
            >
              {navItem.icon ? (
                <span className="sm:hidden">{navItem.icon}</span>
              ) : null}
              <span className={navItem.icon ? "hidden sm:block" : undefined}>
                {navItem.name}
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
