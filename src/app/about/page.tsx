import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'

export const metadata = {
  title: 'About - Akli Reguig',
  description: 'Learn more about Akli Reguig - Senior Software Engineer and DevOps enthusiast based in Paris, France.',
}

export default function AboutPage() {
  const skills = [
    'Java/J2EE', 'Spring Framework', 'Spring Boot', 'PostgreSQL', 'Oracle', 
    'Jenkins', 'Docker', 'Kubernetes', 'DevOps', 'Agile', 'SOAP Web Services',
    'TestContainers', 'Spock', 'Lombok', 'JOOQ', 'Gradle'
  ]

  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Renault Digital',
      location: 'Chennevières, Île-de-France, France',
      period: 'Current',
      description: 'Working on digital transformation initiatives and software engineering projects.'
    }
  ]

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Senior Software Engineer passionate about DevOps, clean code, and sharing knowledge
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Professional Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              I&apos;m a Senior Software Engineer with over a decade of experience in enterprise software development. 
              Currently working at Renault Digital, I specialize in Java/Spring Boot applications, DevOps practices, 
              and database technologies.
            </p>
            <p className="text-muted-foreground">
              I&apos;m passionate about writing clean, testable code and implementing robust CI/CD pipelines. 
              I enjoy sharing knowledge through technical blog posts and contributing to open-source projects.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Paris, France</span>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <h3 className="font-semibold">Université Pierre et Marie Curie (Paris VI)</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>2007 - 2012</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Computer Science & Software Engineering
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Experience */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-primary font-medium">{job.company}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
          <CardDescription>
            Technologies and tools I work with regularly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notable Projects */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Notable Projects</CardTitle>
          <CardDescription>
            Some of the projects I&apos;ve worked on
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-2 border-muted pl-4">
            <h3 className="font-semibold">SGE - Agile</h3>
            <p className="text-sm text-muted-foreground">
              Client management application for ErDF. Developed web interfaces, backend services, 
              and implemented automated testing using modern Java frameworks.
            </p>
          </div>
          <div className="border-l-2 border-muted pl-4">
            <h3 className="font-semibold">Open Source Contributions</h3>
            <p className="text-sm text-muted-foreground">
              Arctic Code Vault Contributor with multiple GitHub achievements. 
              Active contributor to various development tools and Spring Boot utilities.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-muted-foreground mb-6">
          I&apos;m always interested in discussing software architecture, DevOps practices, 
          or potential collaboration opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="https://linkedin.com/in/areguig" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/areguig" target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}