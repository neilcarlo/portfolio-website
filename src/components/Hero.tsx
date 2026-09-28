import { ArrowDownRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { socialLinks } from "../data/portfolio";

export default function Hero() {
  return <section id="home" className="relative overflow-hidden pt-36">
    <div className="absolute inset-0 grid-bg opacity-70"/>
    <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px]"/>
    <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]"/>
    <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 lg:grid-cols-[1.05fr_.95fr]">
      <div className="reveal">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/> Available for freelance & development opportunities
        </div>
        <div className="mb-5 flex items-center gap-2 text-sm text-slate-400"><MapPin size={16}/> Philippines</div>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-.04em] sm:text-6xl lg:text-7xl">Building digital experiences that <span className="bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">solve real problems.</span></h1>
        <p className="muted mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">I'm Neil Carlo Palacio, a software developer from the Philippines focused on building reliable, modern, and user-friendly applications.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-100">View My Work <ArrowDownRight size={18} className="transition group-hover:rotate-[-45deg]"/></a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[.03] px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[.07]">Contact Me</a>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 hover:text-white"><Github size={18}/></a>
          <a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 hover:text-white"><Linkedin size={18}/></a>
          <a aria-label="Email" href={socialLinks.email} className="rounded-xl border border-white/10 p-3 text-slate-400 hover:text-white"><Mail size={18}/></a>
        </div>
      </div>
      <div className="reveal [transition-delay:150ms]">
        <div className="glass overflow-hidden rounded-3xl shadow-glow">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-rose-400/80"/><span className="h-3 w-3 rounded-full bg-amber-400/80"/><span className="h-3 w-3 rounded-full bg-emerald-400/80"/>
            <span className="ml-3 text-xs text-slate-500">developer.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 text-sm leading-8 text-slate-300"><code><span className="text-fuchsia-300">const</span> <span className="text-cyan-300">developer</span> = {"{"}{"\n"}  <span className="text-indigo-300">name</span>: <span className="text-emerald-300">"Neil Carlo Palacio"</span>,{"\n"}  <span className="text-indigo-300">role</span>: <span className="text-emerald-300">"Software Developer"</span>,{"\n"}  <span className="text-indigo-300">location</span>: <span className="text-emerald-300">"Philippines"</span>,{"\n"}  <span className="text-indigo-300">passion</span>: <span className="text-emerald-300">"Building useful software"</span>{"\n"}{"}"};</code></pre>
          <div className="border-t border-white/10 px-6 py-4 text-xs text-slate-500">// turning ideas into useful products</div>
        </div>
      </div>
    </div>
  </section>;
}
