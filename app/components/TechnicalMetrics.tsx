'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Projects Impact */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Projects Impact</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Quiz Portal</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built MERN-based quiz platform with role-based access</li>
									<li>• Improved user engagement with real-time feedback</li>
									<li>• Reduced manual evaluation efforts by 60%</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Zygon Fest Website</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Designed interactive carnival-themed event portal</li>
									<li>• Added event filters & modal popups for details</li>
									<li>• Improved event visibility for 1000+ participants</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Internships Impact */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Internship Experience</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Azure Internship (2024)</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Gained hands-on experience with cloud deployment</li>
									<li>• Learned cloud security best practices</li>
									<li>• Improved understanding of scalable architectures</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">MERN Internship (2023)</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built full-stack applications with MERN stack</li>
									<li>• Learned REST API design & integration</li>
									<li>• Strengthened React.js and Node.js skills</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Leadership & Community */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Leadership & Community</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">IEEE Student Branch</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Organized Treasure Hunt event under IEEE</li>
									<li>• Contributed to building student chapter</li>
									<li>• Increased peer participation by 40%</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">College Contributions</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Contributed to Zygon 2025 fest website team</li>
									<li>• Participated in industrial visit to SEAT PAPERS</li>
									<li>• Enhanced exposure to SAP, ERP, and real-time tools</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
