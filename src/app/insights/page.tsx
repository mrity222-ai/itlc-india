
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { INSIGHTS_ARTICLES, INSIGHTS_CATEGORIES, INSIGHTS_TAGS, FEATURED_ARTICLES } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Search, Send, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function InsightsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card border-b">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Insights, Innovation & IT Intelligence</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore expert opinions, industry news, and actionable guides shaping the future of technology.
          </p>
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <Input placeholder="Search articles, insights & more…" className="h-12 pl-10" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {INSIGHTS_CATEGORIES.map(category => (
              <Button key={category} variant="ghost" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-24">
        <div className="container">
           <h2 className="text-3xl font-bold text-center mb-12 font-headline">Featured Articles</h2>
           <div className="grid lg:grid-cols-2 gap-8">
            {FEATURED_ARTICLES.map((article, index) => {
                 const image = PlaceHolderImages.find(p => p.id === article.imageId);
                 return (
                    <Card key={article.title} className={`glass-card overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 flex flex-col ${index === 0 ? 'lg:col-span-2 lg:flex-row' : ''}`}>
                         {image && (
                          <div className={`relative ${index === 0 ? 'lg:w-1/2 aspect-[16/9]' : 'aspect-video'}`}>
                            <Image
                              src={image.imageUrl}
                              alt={article.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        )}
                        <div className={`p-6 flex flex-col ${index === 0 ? 'lg:w-1/2' : ''}`}>
                            <div className="mb-2">
                                <Badge>{article.badge}</Badge>
                            </div>
                            <h3 className="font-headline text-xl lg:text-2xl mb-2 flex-grow">{article.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src={`https://i.pravatar.cc/40?u=${article.author}`} />
                                    <AvatarFallback><User className="h-4 w-4"/></AvatarFallback>
                                </Avatar>
                                <span>{article.author}</span>
                                &bull;
                                <span>{article.date}</span>
                                &bull;
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </Card>
                 )
            })}
           </div>
        </div>
      </section>

      {/* Latest Insights Grid */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Latest Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS_ARTICLES.map((article) => {
              const image = PlaceHolderImages.find(p => p.id === article.imageId);
              return (
                <Card key={article.title} className="bg-background overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 flex flex-col">
                  {image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <Badge variant="secondary" className="self-start mb-2">{article.category}</Badge>
                    <h3 className="font-headline text-xl mb-2 flex-grow">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{article.excerpt}</p>
                     <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                        <span>{article.author}</span>
                        &bull;
                        <span>{article.date}</span>
                        &bull;
                        <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">Load More</Button>
          </div>
        </div>
      </section>
      
      {/* Popular Tags */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Popular Tags</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {INSIGHTS_TAGS.map(tag => (
                <Button key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Button>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Let’s Build Something Amazing Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Bring Your Tech Challenges. We’ll Bring Solutions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild className="group">
                <Link href="/contact">Start a Project</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Our Experts</Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
