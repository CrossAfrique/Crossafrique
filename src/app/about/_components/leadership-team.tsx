"use client";
import { motion } from "framer-motion";
import { MapPin, Users, GraduationCap } from "lucide-react";

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

        {/* Key Metrics Section - Same container style as "Our Team" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center">
              Key Metrics
            </h2>

            {/* Three Floating Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tile 1: Development Footprint */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl cursor-default transition-all"
              >
                <div className="flex flex-col items-center mb-4">
                  <MapPin className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                    Development Footprint
                  </h3>
                </div>
                <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 text-sm leading-relaxed">
                  <li>30 MW multi-vector clean-energy pipeline across three African countries</li>
                  <li>Projects active in seven strategic sectors</li>
                  <li>1,000–8,000 tonnes of CO₂ reduction per hub annually</li>
                  <li>Multi-vector systems: power, heat, cooling, H₂ production</li>
                </ul>
              </motion.div>

              {/* Tile 2: Partnership Network */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl cursor-default transition-all"
              >
                <div className="flex flex-col items-center mb-4">
                  <Users className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                    Partnership Network
                  </h3>
                </div>
                <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 text-sm leading-relaxed">
                  <li>5 EU & African universities in research collaboration</li>
                  <li>4 technology and EPC partners across continents</li>
                  <li>Ecosystem of 20+ engineers and researchers</li>
                </ul>
              </motion.div>

              {/* Tile 3: Capacity Building */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl cursor-default transition-all"
              >
                <div className="flex flex-col items-center mb-4">
                  <GraduationCap className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                    Capacity Building & Talent Development
                  </h3>
                </div>
                <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 text-sm leading-relaxed">
                  <li>120 trainees per year via African Hydrogen Fellowship</li>
                  <li>30% participation by women and youth</li>
                  <li>Hands-on, project-based training</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipTeam;