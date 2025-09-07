'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					My Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Portfolio Website',
							description: 'A personal portfolio built with Next.js, TypeScript, and TailwindCSS.',
							details: [
								'Implemented responsive design with TailwindCSS',
								'Added smooth animations with Framer Motion',
								'Organized sections for About, Projects, and Contact',
								'Deployed seamlessly on Vercel',
							],
							tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel'],
						},
						// {
						// 	title: 'Quiz Portal',
						// 	description: 'A full-stack MERN quiz platform with authentication and role-based access.',
						// 	details: [
						// 		'Developed Admin, Quiz Creator, and Participant dashboards',
						// 		'Implemented authentication and authorization with JWT',
						// 		'Supported multiple question types with analytics',
						// 		'Designed clean and responsive UI for students',
						// 	],
						// 	tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Bootstrap'],
						// },
						{
							title: 'Zygon Fest Website',
							description: 'An interactive carnival-themed event website for our college annual fest.',
							details: [
								'Created categorized event sections with scroll animations',
								'Integrated filters for year and department',
								'Added modal popups for event details',
								'Worked in a team to deliver responsive design',
							],
							tech: ['React', 'Vite', 'Framer Motion', 'ScrollObserver', 'CSS'],
						},
						// {
						// 	title: 'Contact Management App',
						// 	description: 'A MERN stack CRUD app for managing user contacts.',
						// 	details: [
						// 		'Implemented add, update, and delete functionalities',
						// 		'Integrated search and validation features',
						// 		'Added user authentication and error handling',
						// 		'Deployed full-stack app with MongoDB backend',
						// 	],
						// 	tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Bootstrap'],
						// },
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
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
