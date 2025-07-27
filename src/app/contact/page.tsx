"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Clock, Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	phone: z.string().optional(),
	organization: z.string().optional(),
	subject: z.string().min(1, {
		message: "Please select a subject.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export default function ContactPage() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			organization: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			if (response.ok) {
				setIsSubmitted(true);
				form.reset();
			} else {
				console.error('Failed to submit form');
				// You could add error state handling here
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			// You could add error state handling here
		}
	}

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
						Contact Us
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-xl text-emerald-100 max-w-3xl mx-auto"
					>
						Get in touch with our team to discuss your project needs or to learn
						more about our solutions.
					</motion.p>
				</div>
			</div>

			<section className="py-16 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
								Get In Touch
							</h2>
							<p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
								Whether you have questions about our hydrogen solutions, want to
								explore partnership opportunities, or are ready to start a
								project, we&#39;re here to help.
							</p>

							<div className="space-y-6">
								{/* <div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
										<MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Our Headquarters
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											123 Innovation Way
											<br />
											Nairobi, Kenya
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
										<Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Phone
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											+254 123 456 789
										</p>
									</div>
								</div> */}

								<div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
										<Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Email
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											info@crossafriquehydrogen.com
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
										<Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Address
										</h3>
										<p className="text-gray-700 dark:text-gray-300">
											Monday - Friday: 8:00 AM - 5:00 PM
											<br />
											Saturday - Sunday: Closed
										</p>
									</div>
								</div>
							</div>

							{/* <div className="mt-12">
								<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
									Regional Offices
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
										<h4 className="font-medium text-gray-900 dark:text-white mb-1">
											South Africa
										</h4>
										<p className="text-gray-700 dark:text-gray-300 text-sm">
											456 Green Energy Street
											<br />
											Cape Town, South Africa
											<br />
											+27 21 987 6543
										</p>
									</div>

									<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
										<h4 className="font-medium text-gray-900 dark:text-white mb-1">
											Morocco
										</h4>
										<p className="text-gray-700 dark:text-gray-300 text-sm">
											789 Renewable Avenue
											<br />
											Casablanca, Morocco
											<br />
											+212 522 123 456
										</p>
									</div>

									<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
										<h4 className="font-medium text-gray-900 dark:text-white mb-1">
											Nigeria
										</h4>
										<p className="text-gray-700 dark:text-gray-300 text-sm">
											321 Clean Energy Road
											<br />
											Lagos, Nigeria
											<br />
											+234 1 234 5678
										</p>
									</div>

									<div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
										<h4 className="font-medium text-gray-900 dark:text-white mb-1">
											Egypt
										</h4>
										<p className="text-gray-700 dark:text-gray-300 text-sm">
											654 Hydrogen Boulevard
											<br />
											Cairo, Egypt
											<br />
											+20 2 1234 5678
										</p>
									</div>
								</div>
							</div> */}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
						>
							{isSubmitted ? (
								<div className="text-center py-12">
									<div className="flex justify-center mb-4">
										<div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full">
											<CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
										</div>
									</div>
									<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
										Thank You!
									</h3>
									<p className="text-gray-700 dark:text-gray-300 mb-6">
										Your message has been sent successfully. Our team will get
										back to you as soon as possible.
									</p>
									<Button
										onClick={() => setIsSubmitted(false)}
										className="bg-emerald-600 hover:bg-emerald-700"
									>
										Send Another Message
									</Button>
								</div>
							) : (
								<>
									<h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
										Send Us a Message
									</h2>

									<Form {...form}>
										<form
											onSubmit={form.handleSubmit(onSubmit)}
											className="space-y-6"
										>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<FormField
													control={form.control}
													name="name"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Name</FormLabel>
															<FormControl>
																<Input placeholder="Your name" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>

												<FormField
													control={form.control}
													name="email"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Email</FormLabel>
															<FormControl>
																<Input placeholder="Your email" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<FormField
													control={form.control}
													name="phone"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Phone (Optional)</FormLabel>
															<FormControl>
																<Input
																	placeholder="Your phone number"
																	{...field}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>

												<FormField
													control={form.control}
													name="organization"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Organization (Optional)</FormLabel>
															<FormControl>
																<Input
																	placeholder="Your organization"
																	{...field}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>

											<FormField
												control={form.control}
												name="subject"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Subject</FormLabel>
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}
														>
															<FormControl>
																<SelectTrigger>
																	<SelectValue placeholder="Select a subject" />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																<SelectItem value="general-inquiry">
																	General Inquiry
																</SelectItem>
																<SelectItem value="project-consultation">
																	Project Consultation
																</SelectItem>
																<SelectItem value="partnership">
																	Partnership Opportunity
																</SelectItem>
																<SelectItem value="technical-support">
																	Technical Support
																</SelectItem>
																<SelectItem value="career">
																	Career Information
																</SelectItem>
																<SelectItem value="other">Other</SelectItem>
															</SelectContent>
														</Select>
														<FormMessage />
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name="message"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Message</FormLabel>
														<FormControl>
															<Textarea
																placeholder="Please describe your inquiry or requirements"
																className="min-h-[120px]"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>

											<Button
												type="submit"
												className="w-full bg-emerald-600 hover:bg-emerald-700"
											>
												<Send className="mr-2 h-4 w-4" /> Send Message
											</Button>
										</form>
									</Form>
								</>
							)}
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-50 dark:bg-gray-800">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
						>
							Our Locations
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-gray-700 dark:text-gray-300"
						>
							With a strong base in Africa and active partnerships across
							Europe, we bridge continents to deliver clean energy solutions
							that are both locally grounded and globally informed.
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="relative h-[500px] w-full rounded-lg overflow-hidden"
					>
						{/* In a real application, this would be an interactive map */}
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4588470933!2d3.1191195!3d6.5480551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Nairobi, Kenya Map"
						/>
					</motion.div>
				</div>
			</section>

			<section className="py-16 bg-emerald-700 text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-3xl font-bold mb-6"
						>
							Join Our Newsletter
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="text-lg text-emerald-100 mb-8"
						>
							Stay updated with the latest news, insights, and developments in
							hydrogen technologies and our projects across Africa.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
						>
							<Input
								placeholder="Your email address"
								className="bg-emerald-600 border-emerald-500 text-white placeholder:text-emerald-300"
							/>
							<Button className="bg-white text-emerald-700 hover:bg-emerald-50">
								Subscribe
							</Button>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
