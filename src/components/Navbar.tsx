import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ dark, toggleTheme }: { dark: boolean; toggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handler = () => {
      const sections = links.map((x) => document.getElementById(x.toLowerCase())).filter(Boolean) as HTMLElement[];
      const current = sections.find((s) => window.scrollY + 150 >= s.offsetTop && window.scrollY + 150 < s.offsetTop + s.offsetHeight);
      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-glow">
        <a href="#home" className="text-lg font800 font-extrabold tracking-tight">Neil <span className="text-indigo-400">Carlo</span></a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={`rounded-xl px-3 py-2 text-sm transition ${active === link ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"}`}>{link}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle dark and light theme" className="rounded-xl p-2 text-slate-300 hover:bg-white/10 hover:text-white">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <a href="#contact" className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-100 sm:inline-flex">Let's Talk</a>
          <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="rounded-xl p-2 md:hidden">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl md:hidden">
            {links.map((link) => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white">{link}</a>)}
          </div>
        )}
      </nav>
    </header>
  );
}
