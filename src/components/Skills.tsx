import { skillGroups } from "../data/portfolio";
export default function Skills() {
  return <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
    <div className="reveal"><p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-indigo-400">Toolkit</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Skills & technologies</h2><p className="mt-4 max-w-2xl text-slate-400">A flexible toolkit for building complete applications across the frontend, backend, databases, and developer workflow.</p></div>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group, i)=><div key={group.title} className={`reveal glass rounded-3xl p-6 [transition-delay:${i*80}ms]`}><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-lg text-indigo-300">{group.icon}</div><h3 className="mt-5 font-semibold">{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="rounded-lg border border-white/10 bg-white/[.03] px-2.5 py-1.5 text-xs text-slate-300">{item}</span>)}</div></div>)}</div>
  </section>;
}
