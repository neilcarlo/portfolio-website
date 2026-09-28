import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { email, socialLinks } from "../data/portfolio";

export default function Contact(){
  const [copied,setCopied]=useState(false); const [sent,setSent]=useState(false);
  const copy=async()=>{await navigator.clipboard?.writeText(email);setCopied(true);setTimeout(()=>setCopied(false),1800)};
  const submit=(e:FormEvent)=>{e.preventDefault();setSent(true);setTimeout(()=>setSent(false),3000)};
  return <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
    <div className="reveal overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[.025] to-cyan-500/5 p-6 sm:p-10 lg:p-14">
      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-indigo-300">Contact</p><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's build something together.</h2><p className="mt-5 text-slate-400">Have a project, idea, or opportunity? I'd love to hear about it.</p>
        <div className="mt-8 space-y-3"><div className="flex items-center gap-3 text-sm text-slate-300"><Mail size={17} className="text-indigo-300"/>{email}<button onClick={copy} className="ml-1 rounded-lg border border-white/10 p-2 hover:bg-white/10" aria-label="Copy email">{copied?<Check size={14}/>:<Copy size={14}/>}</button></div><a href={socialLinks.github} className="flex items-center gap-3 text-sm text-slate-400 hover:text-white"><Github size={17}/> GitHub</a><a href={socialLinks.linkedin} className="flex items-center gap-3 text-sm text-slate-400 hover:text-white"><Linkedin size={17}/> LinkedIn</a></div>
      </div>
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2"><label className="text-sm text-slate-400">Name<input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-indigo-400" /></label><label className="text-sm text-slate-400">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-indigo-400" /></label><label className="text-sm text-slate-400 sm:col-span-2">Subject<input required name="subject" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-indigo-400" /></label><label className="text-sm text-slate-400 sm:col-span-2">Message<textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-indigo-400"/></label><button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 hover:bg-indigo-100 sm:col-span-2">{sent?<><Check size={17}/> Message validated</>:<><Send size={17}/> Send Message</>}</button><p className="text-xs text-slate-500 sm:col-span-2">This form validates in the browser. Connect it to your preferred email/form backend before production.</p></form>
    </div></div>
  </section>;
}
