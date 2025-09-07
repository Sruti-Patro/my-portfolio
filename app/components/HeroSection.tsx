"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="p-3 relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-lime-900/80 to-yellow-200/20 opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(90deg,yellow,rgba(0,0,0,20))]" />
      </div>

      <motion.div
  className="bg-lime-950/60 backdrop-blur-lg rounded-lg border border-yellow-200/20 p-6 flex flex-col md:flex-row items-center gap-6"
>
  {/* Profile Image */}
  <div className="w-48 h-48 relative rounded-full overflow-hidden border-2 border-yellow-200 shadow-lg">
    <Image src="/image.png" alt="Sruti Patro" fill className="object-cover" />
  </div>

  {/* Info Section */}
  <div className="flex-1 font-mono text-center md:text-left">
    <p className="text-yellow-200/80">$ whoami</p>
    <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-yellow-200">Sruti Patro</h1>
    <p className="text-yellow-100/70 mb-2">Full Stack Developer</p>
    <p className="text-yellow-200/80">$ skills</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {['Node.js','MERN Stack','Next.js','TypeScript'].map((skill,i)=>(
        <span key={i} className="px-3 py-1 bg-yellow-200/10 text-yellow-200 rounded-md border border-yellow-200/30">
          {skill}
        </span>
      ))}
    </div>
  </div>
</motion.div>

    </section>
  );
}
