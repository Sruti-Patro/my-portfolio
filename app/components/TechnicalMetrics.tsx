'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-lime-900/20">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-yellow-200 font-serif"
				>
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Projects Impact */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-yellow-200">Projects Impact</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-lime-950/60 rounded-lg p-6 border border-lime-700 shadow-md"
							>
								<h4 className="text-lg font-semibold text-yellow-200">Portfolio Website</h4>
								<ul className="mt-2 space-y-2 text-yellow-100/80">
									<li>• Built a responsive personal portfolio to showcase skills & projects</li>
									<li>• Optimized with TailwindCSS and animations using Framer Motion</li>
									<li>• Deployed on GitHub Pages for global accessibility</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-lime-950/60 rounded-lg p-6 border border-lime-700 shadow-md"
							>
								<h4 className="text-lg font-semibold text-yellow-200">Zygon 2025 Fest Website</h4>
								<ul className="mt-2 space-y-2 text-yellow-100/80">
									<li>• Designed carnival-themed interactive event website</li>
									<li>• Added filters & modal popups for 20+ events</li>
									<li>• Enhanced fest visibility for 1000+ participants</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Internship Experience */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-yellow-200">Internship Experience</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-lime-950/60 rounded-lg p-6 border border-lime-700 shadow-md"
							>
								<h4 className="text-lg font-semibold text-yellow-200">Viden Edutech Pvt. Ltd. (2025)</h4>
								<ul className="mt-2 space-y-2 text-yellow-100/80">
									<li>• Modernized legacy ASP application to Next.js + NestJS</li>
									<li>• Spearheaded TypeScript migration & API development</li>
									<li>• Rebuilt UI with Bootstrap for mobile-first design</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-lime-950/60 rounded-lg p-6 border border-lime-700 shadow-md"
							>
								<h4 className="text-lg font-semibold text-yellow-200">Previous Trainings</h4>
								<ul className="mt-2 space-y-2 text-yellow-100/80">
									<li>• Azure Masters Training – learned deployment & cloud security</li>
									<li>• MERN Internship (2023) – built full-stack apps & REST APIs</li>
									<li>• Strengthened React.js, Node.js, and API integration skills</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Leadership & Community */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-yellow-200">Leadership & Community</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-lime-950/60 rounded-lg p-6 border border-lime-700 shadow-md"
							>
								<h4 className="text-lg font-semibold text-yellow-200">IEEE Student Branch</h4>
								<ul className="mt-2 space-y-2 text-yellow-100/80">
									<li>• Led as Web Developer, managing official IEEE site</li>
									<li>• Organized Treasure Hunt & boosted engagement of 300+ students</li>
									<li>• Contributed to building a strong student chapter culture</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-lime-950/60 rounded-lg p-6 border border-lime-700 shadow-md"
							>
								<h4 className="text-lg font-semibold text-yellow-200">Other Achievements</h4>
								<ul className="mt-2 space-y-2 text-yellow-100/80">
									<li>• Selected for Smart India Hackathon internal round (2025)</li>
									<li>• Participated in industrial visit at SEAT PAPERS, gaining exposure to SAP & ERP tools</li>
									<li>• Actively contributed to tech fests and peer learning initiatives</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
