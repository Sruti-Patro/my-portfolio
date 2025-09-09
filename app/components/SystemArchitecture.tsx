"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SystemArchitecture() {
  return (
    <section className="py-20 px-4 bg-lime-950/30 ">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-yellow-200"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Portfolio Website",
              description:
                "A responsive personal portfolio to showcase skills, resume, and projects.",
              details: [
                "Designed and developed with React & TailwindCSS",
                "Showcased skills, projects, and resume in a structured layout",
                "Deployed seamlessly on GitHub Pages",
                "Optimized for mobile and desktop screens",
              ],
              tech: ["React", "TailwindCSS", "GitHub Pages"],
              preview: "https://patro-sruti.vercel.app/",
            },
            {
              title: "Chat-A-Doodle",
              status: "Work in Progress 🚧",
              description:
                "A real-time collaborative whiteboard application where users can draw, doodle, and chat simultaneously in private, shareable rooms.",
              details: [
                "Engineered a multi-user, real-time drawing canvas and an integrated live chat using Socket.IO for instant, low-latency communication.",
                "Implemented a full user authentication system with JWT and Bcrypt, enabling users to create and join private rooms via unique, shareable IDs.",
                "Developed a robust full-stack application with a React/Vite frontend and a Node.js backend, architected with a scalable MongoDB structure.",
                "Actively resolving known bugs and developing future enhancements. The current version is a proof-of-concept with ongoing improvements.",
              ],
              tech: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Socket.IO",
                "JWT",
                "Tailwind CSS",
              ],
              preview: "https://chat-a-doodle.vercel.app/",
            },
			{
              title: "IEEE Student Branch Website",
              description:
                "Official website for the college's IEEE Student Branch, serving as a central hub for events, announcements, and member resources.",
              details: [
                "Developed with team to showcase the beauty and activities carried out by IEEE Student Branch of SU",
                "Designed a comprehensive team page to feature executive committee members and their roles.",
                "Ensured a fully responsive design for seamless access across all devices, from mobile to desktop.",
                "Integrated a contact form and social media links to boost member engagement and communication.",
              ],
              tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
              preview: "https://www.ieeesilicon.org/",
            },
            {
              title: "Zygon 2025 Fest Website",
              description:
                "An interactive carnival-themed event website for the annual college fest.",
              details: [
                "Contributed to animations and responsiveness",
                "Created categorized event sections with filters",
                "Added modal popups for detailed event info",
                "Worked collaboratively with a team to deliver on time",
              ],
              tech: ["React", "Vite", "Framer Motion", "ScrollObserver", "CSS"],
              preview: "https://zygon.vercel.app/",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-lime-950/60 rounded-xl p-6 backdrop-blur-md border border-yellow-200/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-200">
                {project.title}
              </h3>
              <p className="text-yellow-100/70 mb-4">{project.description}</p>

              {/* View Button */}
              <Link
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                // Change starts here: Added flexbox and gap for alignment
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-md bg-lime-900 text-yellow-200 font-semibold hover:bg-yellow-200 hover:text-lime-900 transition"
              >
                {/* SVG Eye Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                View
              </Link>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-yellow-200/90">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-yellow-100/80">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-yellow-200/10 text-yellow-200 rounded-full border border-yellow-200/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}