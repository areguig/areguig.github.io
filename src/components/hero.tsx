import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Code, Server, Database } from 'lucide-react'

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hi, I&apos;m{' '}
            <span className="text-primary">Akli Reguig</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Senior Software Engineer & Freelance Consultant based in Paris, France. 
            I help businesses build scalable applications and optimize their development processes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-4 py-2">
            <Code className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Java/Spring Boot</span>
          </div>
          <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-4 py-2">
            <Server className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">DevOps & CI/CD</span>
          </div>
          <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-4 py-2">
            <Database className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">PostgreSQL</span>
          </div>
          <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-4 py-2">
            <span className="text-sm font-medium">💼 Available for Freelance</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/blog">
              Read My Blog
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">
              About Me
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="mailto:contact@areguig.com">
              Hire Me
            </Link>
          </Button>
        </div>

        <div className="mt-16 text-sm text-muted-foreground">
          <p><strong>Senior Freelance Software Engineer</strong> • Available for consulting</p>
          <p>10+ years experience • Open source contributor • Arctic Code Vault</p>
        </div>
      </div>
    </section>
  )
}