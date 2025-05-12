import EnergyHubImg from "@/app/_assets/images/energy-hub.jpg";
import FinancialStructuringImg from "@/app/_assets/images/financial-structuring.jpg";
import H2RealImg from "@/app/_assets/images/h2real.png";
import H2RingImg from "@/app/_assets/images/h2ring.png";
import IndustrialApplicationImg from "@/app/_assets/images/industrial-application.jpg";
import SystemArchitectureImg from "@/app/_assets/images/system-architecture.jpg";
import { BookOpen, ChartArea, Factory, Zap } from "lucide-react";

export const projects = [
	{
		id: "1",
		title: "H2RING - Hydrogen hub for Research, Innovation and Green Growth",
		description:
			"An innovation-led hydrogen hub integrating solar PV with a electrolyzer and recycled wastewater system, designed to power research, pilot industrial applications, and local skill development.",
		image: H2RingImg,
		location: "Nigeria",
		status: "Planning Phase",
		year: "2025",
	},
	{
		id: "2",
		title: "Hydrogen Research, Education, and Applied Learning",
		description:
			"H2REAL is a capacity-building and applied research initiative focused on developing the hydrogen economy in Africa. The program combines foundational education, international collaboration, and applied research to prepare the next generation of hydrogen professionals and bridge the African and European hydrogen ecosystems.",
		image: H2RealImg,
		location: "Virtual & Physical",
		status: "In Development",
		year: "2025",
	},
];

export const SOLUTIONS = [
	{
		id: "integrated-energy-hubs",
		title: "Integrated Energy Hubs",
		description:
			"We develop hubs combining multiple energy carriers—hydrogen, solar PV, battery storage—into coordinated, high-impact systems.",
		icon: <Zap className="w-10 h-10 text-emerald-600" />,
		image: EnergyHubImg,
		benefits: [
			"Zero-emission energy production",
			"Scalable from small to utility-scale",
			"Leverages Africa's abundant renewable resources",
			"Integrated systems for maximum efficiency",
		],
		applications: [
			"Industrial zones",
			"Commercial complexes",
			"Community energy systems",
			"Off-grid applications",
		],
	},
	{
		id: "financial-structuring",
		title: "Financial Structuring",
		description:
			"We design investment-ready projects with robust business models, using blended finance and private-public partnerships.",
		icon: <ChartArea className="w-10 h-10 text-emerald-600" />,
		image: FinancialStructuringImg,
		benefits: [
			"Reduced investment risk",
			"Access to diverse funding sources",
			"Sustainable business models",
			"Optimized return on investment",
		],
		applications: [
			"Public-private partnerships",
			"Blended finance projects",
			"Carbon credit monetization",
			"Impact investment opportunities",
		],
	},
	{
		id: "applied-research-innovation",
		title: "Innovation & Research",
		description:
			"We collaborate with universities and technical partners to drive applied research and next-generation energy solutions.",
		icon: <BookOpen className="w-10 h-10 text-emerald-600" />,
		image: IndustrialApplicationImg,
		benefits: [
			"Access to cutting-edge technologies",
			"Knowledge transfer and capacity building",
			"Locally adapted solutions",
			"Continuous improvement and innovation",
		],
		applications: [
			"University research partnerships",
			"Technology demonstration projects",
			"Innovation hubs and incubators",
			"Technical training programs",
		],
	},
	{
		id: "system-architecture-and-smart-control",
		title: "System Architecture & Smart Control",
		description:
			"We implement digital control systems that ensure efficient energy flows and grid responsiveness.",
		icon: <Factory className="w-10 h-10 text-emerald-600" />,
		image: SystemArchitectureImg,
		benefits: [
			"Optimized energy flows",
			"Real-time monitoring and control",
			"Predictive maintenance capabilities",
			"Enhanced system reliability",
		],
		applications: [
			"Smart grid integration",
			"Energy management systems",
			"Demand response solutions",
			"Digital twin modeling",
		],
	},
];
