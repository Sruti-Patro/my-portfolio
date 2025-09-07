'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
							title: 'Portfolio Website',
							description:
								'A responsive personal portfolio to showcase skills, resume, and projects.',
							details: [
								'Designed and developed with React & TailwindCSS',
								'Showcased skills, projects, and resume in a structured layout',
								'Deployed seamlessly on GitHub Pages',
								'Optimized for mobile and desktop screens',
							],
							tech: ['React', 'TailwindCSS', 'GitHub Pages'],
							preview: 'https://patro-sruti.vercel.app/',
						},
						{
							title: 'Real-Time Chat App',
							description:
								'A web-based chat app supporting multiple users with real-time messaging.',
							details: [
								'Built with React frontend and Node.js + Express backend',
								'Implemented WebSocket-based communication using Socket.io',
								'Enabled seamless real-time communication between multiple users',
								'Deployed for easy accessibility and testing',
							],
							tech: ['React', 'Node.js', 'Express.js', 'Socket.io'],
							preview: 'https://patro-sruti.vercel.app/',
						},
						{
							title: 'Zygon 2025 Fest Website',
							description:
								'An interactive carnival-themed event website for the annual college fest.',
							details: [
								'Contributed to animations and responsiveness',
								'Created categorized event sections with filters',
								'Added modal popups for detailed event info',
								'Worked collaboratively with a team to deliver on time',
							],
							tech: ['React', 'Vite', 'Framer Motion', 'ScrollObserver', 'CSS'],
							preview: 'https://zygon.vercel.app/',
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
							<h3 className="text-2xl font-bold mb-4 text-yellow-200">{project.title}</h3>
							<p className="text-yellow-100/70 mb-4">{project.description}</p>

							{/* View Button */}
							<Link
								href={project.preview}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block mb-6 px-4 py-2 rounded-md bg-lime-900 text-yellow-200 font-semibold hover:bg-yellow-200 hover:text-lime-900 transition"
							>
								View Project
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
