import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/portfolio";

const filters = ["All","Web","Desktop","Mobile","Games"];

export default function Projects() {
  const [filter,setFilter]=useState("All");
  const visible=projects.filter(p=>filter==="All"||p.category===filter);
  return <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
    <div className="reveal flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-indigo-400">Selected Work</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects that make ideas tangible.</h2></div>
      <div className="flex flex-wrap gap-2">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${filter===f?"bg-white text-slate-950":"border border-white/10 bg-white/[.03] text-slate-400 hover:text-white"}`}>{f}</button>)}</div>
    </div>
    <div className="mt-10 grid gap-5 md:grid-cols-2">{visible.map((p,i)=><article key={p.name} className="reveal group overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] [transition-delay:${i*70}ms]"><div className="relative aspect-[16/9] overflow-hidden"><img src={p.image} alt={`${p.name} project preview`} className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"/><div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent"/></div><div className="p-6"><div className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-300">{p.category}</div><h3 className="text-xl font-bold">{p.name}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{p.description}</p><div className="mt-5 flex flex-wrap gap-2">{p.technologies.map(t=><span key={t} className="rounded-md bg-white/[.05] px-2 py-1 text-xs text-slate-300">{t}</span>)}</div><div className="mt-6 flex gap-2"><a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm font-medium hover:bg-white/10"><Github size={15}/> GitHub</a><a href={p.demo} target={p.demo!=="#"?"_blank":undefined} rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-indigo-100"><ExternalLink size={15}/> Live Demo</a></div></div></article>)}</div>
  </section>;
}
