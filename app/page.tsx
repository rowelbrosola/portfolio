"use client";

import type React from "react";
import Link from "next/link";
import {
  Code,
  Container,
  Figma,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Kanban,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you can send formData to a backend or third-party service
    console.log(formData);

    // Simulate successful submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between mx-auto">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Rowel </span>Brosola
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 md:px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-sky-400 text-xl md:text-2xl font-medium">
                Hi <span className="inline-block animate-wave">👋</span>{" "}
                I&apos;m Rowel Brosola
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                Passionate full stack web developer
              </h1>
              <p className="text-xl text-muted-foreground">
                Creating beautifully crafted websites
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-sky-400 hover:bg-sky-500 text-white"
                >
                  Hire me
                </Button>
                <div className="hidden md:flex items-center gap-6 ml-4">
                  <Link
                    href="https://www.linkedin.com/in/rowel-b-767254188/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://github.com/rowelbrosola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href="mailto:rowelvbrosola@gmail.com"
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img
                  src="/profile-header.png"
                  alt="Developer portrait"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted/50 py-24 md:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                My Work
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                A selection of my recent work showcasing my expertise in Next.js
                and Laravel development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="pt-0">
                <CardHeader className="p-0">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src="/ricardo-bravo-auto-solutions.png"
                      alt="E-commerce platform"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription className="mt-2">
                    A full-featured e-commerce platform built with Next.js,
                    featuring product listings
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <div className="flex gap-2">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      Next.js
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      Tailwind
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href="https://ricardobravoautosolutions.com"
                      target="_blank"
                    >
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="pt-0">
                <CardHeader className="p-0">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src="/ricardo-admin.png"
                      alt="CRM dashboard"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>CRM Dashboard</CardTitle>
                  <CardDescription className="mt-2">
                    A comprehensive CRM system built with Laravel, featuring
                    customer management, analytics, and reporting tools.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <div className="flex gap-2">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      Laravel
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      PostgreSQL
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href="https://app.ricardobravoautosolutions.com"
                      target="_blank"
                    >
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="pt-0">
                <CardHeader className="p-0">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src="/ascend-logix.png"
                      alt="Company landing page"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>Company Landing Page</CardTitle>
                  <CardDescription className="mt-2">
                    A modern, responsive landing page designed for a business
                    website. Built with Next.js and Tailwind CSS, it includes
                    sections for hero, services, testimonials, and a contact
                    form.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <div className="flex gap-2">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      Next.js
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      Tailwind
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#">View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container px-4 md:px-6 py-24 md:py-32">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                My Expertise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Technical Skills
              </h2>
              <p className="text-muted-foreground md:w-2/3 mx-auto">
                A comprehensive overview of my technical skills and areas of
                expertise.
              </p>
            </div>

            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="tools">Tools & Others</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <SkillCard
                    icon={<Code />}
                    title="Next.js"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="React"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="TypeScript"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="Tailwind CSS"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="JavaScript"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="HTML/CSS"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="Redux"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="Framer Motion"
                    description="Intermediate"
                  />
                </div>
              </TabsContent>
              <TabsContent value="backend" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <SkillCard
                    icon={<Server />}
                    title="Laravel"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Server />}
                    title="PHP"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Database />}
                    title="MySQL"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Database />}
                    title="PostgreSQL"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Server />}
                    title="Node.js"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Server />}
                    title="Express"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Database />}
                    title="MongoDB"
                    description="Basic"
                  />
                  <SkillCard
                    icon={<Server />}
                    title="REST APIs"
                    description="Advanced"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <SkillCard
                    icon={<Github />}
                    title="Git/GitHub"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Container />}
                    title="Docker"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="CI/CD"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="DigitalOcean"
                    description="Advanced"
                  />
                  <SkillCard
                    icon={<Figma />}
                    title="Figma"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Code />}
                    title="Jest"
                    description="Intermediate"
                  />
                  <SkillCard
                    icon={<Kanban />}
                    title="Agile/Scrum"
                    description="Advanced"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/50 py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Let&apos;s Work Together
                </h2>
                <p className="text-muted-foreground">
                  I&apos;m currently available for freelance work and full-time
                  opportunities. If you&apos;re interested in working together
                  or have any questions, feel free to reach out.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                    </Button>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        rowelvbrosola@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-muted-foreground">
                        linkedin.com/in/rowel-b-767254188
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 max-w-xl mx-auto px-4"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>

                    {submitted && (
                      <p className="text-green-600 text-center font-medium">
                        ✅ Thank you! Your message has been sent.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-bold text-xl">
              <span className="text-primary">Rowel </span>Brosola
            </span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/rowelbrosola"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/rowel-b-767254188/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-3 mb-4">{icon}</div>
        <CardTitle className="text-lg mb-1">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
