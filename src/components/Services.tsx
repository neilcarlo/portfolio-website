import { AppWindow, BriefcaseBusiness, Globe2, Workflow } from "lucide-react";
const services = [
  ["Web Development","Responsive and modern websites built for businesses, portfolios, and personal brands.",Globe2],
  ["Desktop Applications","Reliable desktop software for business workflows and offline environments.",AppWindow],
  ["POS & Business Systems","Custom point-of-sale, inventory, sales, and business management systems.",BriefcaseBusiness],
  ["Custom Software","Software tailored to specific business requirements.",Workflow]
];
export default function Services(){return <section className="mx-auto max-w-6xl px-6 py-24"><div className="reveal"><p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-indigo-400">What I Build</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Software that fits the problem.</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(([title,desc,Icon])=>{const I=Icon as typeof Globe2;return <div key={title as string} className="reveal rounded-3xl border border-white/10 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:bg-white/[.04]"><I className="text-indigo-300" size={24}/><h3 className="mt-6 font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{desc as string}</p></div>})}</div></section>}
