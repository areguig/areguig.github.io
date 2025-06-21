import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Blog - Akli Reguig',
  description: 'Articles about software development, testing, and DevOps practices.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sharing insights on software development, testing frameworks, database optimization, 
          and modern development practices.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-2xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {post.description}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-primary hover:underline font-medium"
              >
                Read more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts available yet.</p>
        </div>
      )}
    </div>
  )
}