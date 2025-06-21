import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Code2, Wrench, Settings } from 'lucide-react'

export const metadata = {
  title: 'Projects - Akli Reguig',
  description: 'Open source projects and side experiments by Akli Reguig.',
}

const projects = [
  {
    title: 'dev-tools',
    description: 'A comprehensive web-based application offering 31 professional developer utilities that run entirely in the browser.',
    longDescription: 'Developer Tools Suite provides 31 tools across 9 categories including text processing, data formatting, code formatting, security & hashing, and more. Features dark/light theme, smart search, and completely browser-based operation with no data collection.',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/areguig/dev-tools',
    demo: 'https://areguig.github.io/dev-tools',
    status: 'Active Development',
    icon: <Wrench className="h-6 w-6" />,
    category: 'Development Tools'
  },
  {
    title: 'K-a-a-s (Karate as a Service)',
    description: 'A web application that simplifies API testing using Karate with a user-friendly, browser-based platform.',
    longDescription: 'KaaS provides a web interface for Karate testing with real-time Gherkin syntax highlighting, immediate test execution feedback, and detailed results. Built with Quarkus backend and Next.js frontend.',
    tech: ['Quarkus', 'Java 21', 'Next.js', 'React', 'Docker'],
    github: 'https://github.com/areguig/K-a-a-s',
    status: 'Active Development',
    icon: <Settings className="h-6 w-6" />,
    category: 'Testing & DevOps'
  },
  {
    title: 'spring-boot-starter-echo-proxy',
    description: 'A configurable proxy and mock server library for Spring Boot applications to simplify mocking external services.',
    longDescription: 'Spring Boot Starter Echo Proxy allows developers to easily mock external services or proxy requests to real endpoints. Features dynamic configuration via JSON or API, custom response headers, and compatibility with both Spring MVC and WebFlux.',
    tech: ['Java', 'Spring Boot', 'Spring MVC', 'Spring WebFlux'],
    github: 'https://github.com/areguig/spring-boot-starter-echo-proxy',
    status: 'Stable',
    icon: <Code2 className="h-6 w-6" />,
    category: 'Spring Boot'
  },
  {
    title: 'wisdom',
    description: 'A Jekyll-powered website that curates and displays carefully selected quotes related to Information Technology and Computer Science.',
    longDescription: 'A community-driven collection of IT & CS quotes stored in YAML format. Open to contributions via pull requests, showcasing wisdom and insights from the tech world.',
    tech: ['Jekyll', 'YAML', 'GitHub Pages'],
    github: 'https://github.com/areguig/wisdom',
    demo: 'https://areguig.github.io/wisdom',
    status: 'Maintained',
    icon: <Code2 className="h-6 w-6" />,
    category: 'Web Projects'
  },
  {
    title: 'boot-testcontainers-spock-sample',
    description: 'Sample Spring Boot application demonstrating integration testing using TestContainers and the Spock testing framework.',
    longDescription: 'A practical example showcasing robust testing strategies in Spring Boot applications. Features containerized database testing with Docker, JOOQ for SQL queries, and comprehensive Spock tests.',
    tech: ['Spring Boot', 'TestContainers', 'Spock', 'JOOQ', 'Docker'],
    github: 'https://github.com/areguig/boot-testContainers-spock-sample-app',
    status: 'Educational',
    icon: <Code2 className="h-6 w-6" />,
    category: 'Spring Boot'
  },
  {
    title: 'Tweet Selector',
    description: 'An online tool that uses Twitter API to select a random tweet based on a given hashtag or handle.',
    longDescription: 'Interactive web tool for discovering random tweets from specific hashtags or user handles. Built with vanilla JavaScript and integrates with Twitter API for real-time tweet selection.',
    tech: ['JavaScript', 'Twitter API', 'HTML', 'CSS'],
    demo: '/tools/#ts',
    status: 'Legacy',
    icon: <Wrench className="h-6 w-6" />,
    category: 'Web Tools'
  },
  {
    title: 'Campaign URL Builder',
    description: 'An online tool that helps build campaign URLs by adding and encoding UTM parameters and shortening long URLs.',
    longDescription: 'Marketing utility for creating trackable campaign URLs with UTM parameters. Features URL encoding, parameter validation, and URL shortening capabilities for analytics and campaign tracking.',
    tech: ['JavaScript', 'HTML', 'CSS', 'URL APIs'],
    demo: '/tools/#cub',
    status: 'Legacy',
    icon: <Wrench className="h-6 w-6" />,
    category: 'Web Tools'
  }
]

const achievements = [
  'Arctic Code Vault Contributor',
  'Pull Shark Achievement (x3)', 
  '7 Featured Projects',
  '44+ repositories on GitHub'
]

export default function ProjectsPage() {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Open source projects and side experiments. These are some of my ongoing and experimental projects 
          that explore different aspects of software development and DevOps.
        </p>
      </div>

      {/* GitHub Stats */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            GitHub Highlights
          </CardTitle>
          <CardDescription>
            Contributions and achievements on GitHub
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-1 gap-8 mb-12">
        {projects.map((project) => (
          <Card key={project.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-1">{project.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge 
                        variant={project.status === 'Active Development' ? 'default' : 'secondary'} 
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <Link 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Link>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <Link 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Note about projects */}
      <Card>
        <CardHeader>
          <CardTitle>About These Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            These projects represent my exploration of different technologies and approaches to solving 
            development challenges. While some are still experimental or in development, they demonstrate 
            my commitment to continuous learning and open-source contribution.
          </p>
          <p className="text-muted-foreground">
            I welcome contributions, feedback, and discussions about any of these projects. 
            Feel free to open issues or submit pull requests if you find them useful or have suggestions for improvement.
          </p>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
        <p className="text-muted-foreground mb-6">
          I&apos;m always open to discussing new projects, contributing to open source, 
          or exploring innovative solutions to development challenges.
        </p>
        <Button asChild>
          <Link href="/about">
            Get in Touch
          </Link>
        </Button>
      </div>
    </div>
  )
}