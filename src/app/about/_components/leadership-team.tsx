"use client";
import { motion } from "framer-motion/react";

const LeadershipTeam = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Our Team
            </h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
              <p className="mb-4">
                At CrossAfrique Hydrogen, our team brings together over 50 years
                of combined experience in renewable energy project development,
                project finance, and system integration. With deep technical and
                financial expertise, we design and deploy integrated energy hubs
                that combine hydrogen, solar PV, battery storage, and smart
                control systems.
              </p>
              <p>
                Having worked across Africa and Europe, our professionals bridge
                global innovation with local realities — delivering clean,
                scalable energy systems that drive industrial growth, climate
                resilience, and sustainable development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* New Tiles Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Development Footprint</h3>
        <p className="mb-2">- 30 MW multi-vector clean-energy pipeline across three African countries</p><p className="mb-2">- Projects active in seven strategic sectors: healthcare, education, agriculture, industry, ports,</p><p className="mb-2">- logistics, and telecommunications</p><p className="mb-2">- Integrated hubs designed to help clients reduce between 1,000 and 8,000 tonnes of CO₂</p><p className="mb-2">- annually.</p><p className="mb-2">- Multi-vector system designs covering electricity, heat, cooling, hydrogen production, and</p><p className="mb-2">- industrial feedstock pathways</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Partnership Network</h3>
        <p className="mb-2">- 5 EU & African universities collaborating on research, modelling, system integration, and</p><p className="mb-2">- curriculum development</p><p className="mb-2">- 4 technology and EPC partners across Africa and Europe</p><p className="mb-2">- A growing ecosystem of 20+ engineers, researchers, and technical experts contributing to</p><p className="mb-2">- ongoing projects</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Capacity Building & Talent Development</h3>
        <p className="mb-2">- Supporting 120 trainees per year through the African Hydrogen Fellowship and university</p><p className="mb-2">- programmes</p><p className="mb-2">- Structured inclusion ensuring 30% participation by women and youth</p><p className="mb-2">- Practical, project-based training delivered through hands-on work.</p>
      </motion.div>

        </div>
      </div>
    </section>
  );
};
export default LeadershipTeam;
