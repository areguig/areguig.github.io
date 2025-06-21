import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  published: boolean
  content: string
  html: string
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const fullPath = path.join(postsDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: name.replace(/\.mdx$/, ''),
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        published: data.published,
        content,
        html: marked(content),
      }
    })
    .filter((post) => post.published)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return allPosts
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      published: data.published,
      content,
      html: marked(content),
    }
  } catch (error) {
    return null
  }
}