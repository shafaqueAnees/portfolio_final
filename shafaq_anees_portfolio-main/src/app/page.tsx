
"use client"
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Home() {


  useEffect(() => {
    Aos.init()
  }, [])
  


  return (
   <div>
<Hero />
<About />
<Skill />
<Project />
<Contact />
   </div>
  );
}
