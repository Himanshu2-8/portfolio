import { FloatingNav } from "../ui/floating-navbar";

const navBarLeftItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/himanshu-pragyan",
  },
  {
    name: "E-Mail",
    link: "mailto:himanshupragyan348@gmail.com",
  }
]

export default function Navbar() {
  return (
    <FloatingNav navItems={navBarLeftItems} className="bg-transparent rounded-3xl" />
  )
}