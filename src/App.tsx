import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  const [dark,setDark]=useState(()=>localStorage.getItem("theme")!=="light");
  useEffect(()=>{document.documentElement.classList.toggle("dark",dark);document.documentElement.classList.toggle("light",!dark);localStorage.setItem("theme",dark?"dark":"light")},[dark]);
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[]);
  return <><Navbar dark={dark} toggleTheme={()=>setDark(!dark)}/><main><Hero/><About/><Skills/><Projects/><Experience/><Services/><Contact/></main><Footer/></>;
}
