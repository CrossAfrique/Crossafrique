"use client";

import { useState } from "react";
import { motion } from "motion/react"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Rwanda Green Hydrogen Production Facility",
      description: "A 10 MW green hydrogen production facility powered by solar energy, providing clean hydrogen for industrial use in Kigali.",
      image: "/images/projects/rwanda-facility.jpg",
      location: "Kigali, Rwanda",
      status: "Operational",
      year: "2022",
      category: "production"
    },
    {
      id: 2,
      title: "Kenya Hydrogen Mobility Pilot",
      description: "Deploying hydrogen fuel cell buses for public transportation in Nairobi, reducing urban emissions and demonstrating hydrogen mobility solutions.",
      image: "/images/projects/kenya-mobility.jpg",
      location: "Nairobi, Kenya",
      status: "Operational",
      year: "2022",
      category: "mobility"
    },
    {
      id: 3,
      title: "Tanzania Industrial Hydrogen Application",
      description: "Implementing hydrogen solutions for the mining sector in Tanzania, reducing diesel consumption and carbon emissions in heavy industry.",
      image: "/images/projects/tanzania-industrial.jpg",
      location: "Mwanza, Tanzania",
      status: "In Progress",
      year: "2023",
      category: "industrial"
    },
    {
      id: 4,
      title: "Morocco Green Ammonia Export Project",
      description: "Developing a large-scale green ammonia production facility for export to European markets, leveraging Morocco's renewable resources.",
      image: "/images/projects/morocco-ammonia.jpg",
      location: "Tangier, Morocco",
      status: "Planning Phase",
      year: "2024",
      category: "production"
    },
    {
      id: 5,
      title: "South Africa Hydrogen Valley",
      description: "Participating in South Africa's Hydrogen Valley initiative, creating an integrated hydrogen ecosystem from production to various applications.",
      image: "/images/projects/south-africa-valley.jpg",
      location: "Johannesburg, South Africa",
      status: "In Progress",
      year: "2023",
      category: "ecosystem"
    },
    {
      id: 6,
      title: "Nigeria Hydrogen for Oil & Gas",
      description: "Implementing hydrogen technologies to reduce emissions in Nigeria's oil and gas operations, focusing on cleaner production processes.",
      image: "/images/projects/nigeria-oil-gas.jpg",
      location: "Port Harcourt, Nigeria",
      status: "Planning Phase",
      year: "2024",
      category: "industrial"
    },
    {
      id: 7,
      title: "Egypt Green Hydrogen Research Center",
      description: "Establishing a research and development center focused on adapting hydrogen technologies to North African conditions.",
      image: "/images/projects/egypt-research.jpg",
      location: "Cairo, Egypt",
      status: "Operational",
      year: "2022",
      category: "research"
    },
    {
      id: 8,
      title: "Ghana Hydrogen Microgrid Project",
      description: "Developing an integrated renewable energy microgrid with hydrogen storage to provide reliable power to rural communities.",
      image: "/images/projects/ghana-microgrid.jpg",
      location: "Kumasi Region, Ghana",
      status: "In Progress",
      year: "2023",
      category: "storage"
    },
    {
      id: 9,
      title: "Senegal Port Hydrogen Infrastructure",
      description: "Building hydrogen refueling infrastructure at the Port of Dakar to support the transition to hydrogen-powered port equipment and logistics.",
      image: "/images/projects/senegal-port.jpg",
      location: "Dakar, Senegal",
      status: "Planning Phase",
      year: "2024",
      category: "infrastructure"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="pt-16">
      <div className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            Discover how we&#39;re implementing hydrogen solutions across Africa, from production facilities to mobility applications and industrial use cases.
          </motion.p>
        </div>
      </div>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-4xl mx-auto mb-12 bg-gray-100 dark:bg-gray-800 p-1 overflow-x-auto flex flex-nowrap">
              <TabsTrigger value="all" className="flex-1">All Projects</TabsTrigger>
              <TabsTrigger value="production" className="flex-1">Production</TabsTrigger>
              <TabsTrigger value="mobility" className="flex-1">Mobility</TabsTrigger>
              <TabsTrigger value="industrial" className="flex-1">Industrial</TabsTrigger>
              <TabsTrigger value="infrastructure" className="flex-1">Infrastructure</TabsTrigger>
              <TabsTrigger value="research" className="flex-1">Research</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-60 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded">
                          {project.status}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-col space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{project.year}</span>
                          </div>
                        </div>
                        <Link href={`/projects/${project.id}`}>
                          <Button variant="outline" className="w-full flex items-center justify-center">
                            View Project Details
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Partner with Us on Future Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
            >
              We&#39;re always looking for partners to collaborate on innovative hydrogen projects across Africa. Whether you&#39;re a government entity, private company, or research institution, we&#39;d love to explore opportunities together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Discuss a Potential Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
