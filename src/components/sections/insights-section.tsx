import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { INSIGHTS_ARTICLES } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function InsightsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Insights / Knowledge Hub
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Great advertising marries the message, medium, and target. It’s a mathematical formula that can be modeled, properly planned, and supercharged with brilliant creative work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS_ARTICLES.slice(0,3).map((article) => {
            const image = PlaceHolderImages.find(p => p.id === article.imageId);
            return (
              <Card key={article.title} className="group relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 bg-gradient-to-br from-background to-sky-950/20">
                <CardHeader>
                  {image && (
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={image.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <h3 className="font-headline text-xl mb-2 flex-grow">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{article.excerpt}</p>
                  <Button asChild variant="link" className="p-0 self-start group/link">
                    <Link href={'/insights'}>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/insights">
                    View All Insights
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
