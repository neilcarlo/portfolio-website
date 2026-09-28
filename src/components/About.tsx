import { Code2, Layers3, Sparkles, Wrench } from "lucide-react";

const values = [
  ["Problem solving", Code2], ["Clean & maintainable code", Wrench], ["User-focused design", Sparkles], ["Complete applications", Layers3]
];

export default function About() {
  return <section id="about" className="mx-auto max-w-6xl px-6 py-24">
    <div className="reveal grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-indigo-400">About Me</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Practical software, built with intention.</h2></div>
      <div><p className="text-lg leading-8 text-slate-400">I enjoy creating practical software and solving real-world problems through technology. My focus is on building applications that are reliable, understandable, and genuinely useful to the people who use them.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">{values.map(([label, Icon]) => { const I = Icon as typeof Code2; return <div key={label as string} className="surface rounded-2xl border border-white/10 bg-white/[.025] p-4"><I size={18} className="text-indigo-300"/><div className="mt-3 text-sm font-semibold">{label as string}</div></div> })}</div>
      </div>
    </div>
    <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">{["Projects Built","Technologies Used","Years Learning / Experience","Clients / Users"].map((x)=><div key={x} className="glass rounded-2xl p-5"><div className="text-2xl font-bold">—</div><div className="mt-1 text-xs text-slate-500">{x}</div></div>)}</div>
  </section>;
}
