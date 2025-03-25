"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { type ReactNode, type ElementType } from "react";

interface FadeInXProps {
	children: ReactNode;
	delay?: number;
	className?: string;
	as?: ElementType;
}

export default function FadeInX({
	children,
	delay,
	className,
	as: Component = motion.div,
}: FadeInXProps) {
	return (
		<Component
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: delay || 0 }}
			className={cn("flex flex-col sm:flex-row gap-4", className)}
		>
			{children}
		</Component>
	);
}
