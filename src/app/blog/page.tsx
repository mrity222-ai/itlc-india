
'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Search, User, ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const blogPosts = [
  {
    image: 'https://picsum.photos/seed/blog1/600/400',
    title: 'The Future of AI in Web Development',
    date: 'Oct 26, 2024',
    category: 'AI',
    description: 'Discover how artificial intelligence is reshaping the landscape of web development, from automated coding to personalized user experiences.',
    author: 'Admin',
    tags: ['AI', 'Web Dev', 'Future Tech'],
  },
  {
    image: 'https://picsum.photos/seed/blog2/600/400',
    title: 'Minimalist Design: Less is More',
    date: 'Oct 22, 2024',
    category: 'UI/UX',
    description: 'An exploration into the principles of minimalist design and how it can improve user engagement and conversion rates.',
    author: 'Admin',
    tags: ['UI/UX', 'Design', 'Minimalism'],
  },
  {
    image: 'https://picsum.photos/seed/blog3/600/400',
    title: 'Securing Your Cloud Infrastructure',
    date: 'Oct 18, 2024',
    category: 'Cybersecurity',
    description: 'A comprehensive guide to best practices for securing your applications and data in the cloud.',
    author: 'Admin',
    tags: ['Cybersecurity', 'Cloud', 'DevOps'],
  },
  {
    image: 'https://picsum.photos/seed/blog4/600/400',
    title: 'The Rise of Headless CMS',
    date: 'Oct 15, 2024',
    category: 'Web Dev',
    description: 'Learn about the benefits of using a headless CMS for your next project and why it might be the right choice for you.',
    author: 'Admin',
    tags: ['CMS', 'Web Dev', 'Architecture'],
  },
];

const categories = ['All', 'AI', 'UI/UX', 'Cybersecurity', 'Web Dev'];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = filter === 'All' || post.category === filter;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="container py-16 md:py-24">
      <header className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-bold font-headline mb-2 text-shadow-cyber">Our Blog</h1>
        <p className="text-lg text-muted-foreground">Insights, trends, and thoughts from the ITLC team.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search blogs..." 
            className="pl-10 bg-card/50 backdrop-blur-sm" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'secondary'}
              onClick={() => setFilter(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <div 
            key={post.title} 
            className="animate-fade-in-up"
            style={{animationDelay: `${index * 150 + 400}ms`}}
          >
            <Card className="futuristic-card h-full overflow-hidden group flex flex-col">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                 <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex-grow">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`https://i.pravatar.cc/40?u=${post.author}`} />
                      <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <Button variant="link" asChild className="p-0 group/link">
                    <Link href="#">
                      Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1"/>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
