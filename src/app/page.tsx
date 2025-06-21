import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'

export default function Home() {
  const posts = getAllPosts()
  const featuredProjects = [
    {
      title: 'dev-tools',
      description: '31 professional developer utilities in your browser',
      tech: ['React', 'TypeScript', 'Tailwind'],
      link: 'https://github.com/areguig/dev-tools'
    },
    {
      title: 'K-a-a-s', 
      description: 'API testing with Karate made simple',
      tech: ['Quarkus', 'Next.js', 'Docker'],
      link: 'https://github.com/areguig/K-a-a-s'
    },
    {
      title: 'spring-boot-starter-echo-proxy',
      description: 'Mock services and proxy requests effortlessly',
      tech: ['Java', 'Spring Boot'],
      link: 'https://github.com/areguig/spring-boot-starter-echo-proxy'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Akli Reguig
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Senior Software Engineer & DevOps Enthusiast sharing insights on Java, Spring Boot, 
            testing strategies, and modern development practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <Link href="/about">
                About Me
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                View Projects
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/areguig" target="_blank" rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/areguig" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com/aklireguig" target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Latest Blog Posts</h2>
              <p className="text-muted-foreground">
                Sharing knowledge about software development, testing, and DevOps
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
              <p className="text-muted-foreground">
                Open source tools and experiments
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{project.title}</span>
                    <Link 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Currently</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Senior Software Engineer at <strong>Renault Digital</strong>, focusing on enterprise software 
            development and DevOps practices. Always exploring new technologies and sharing knowledge .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/about">
                Learn More About Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://linkedin.com/in/areguig" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}