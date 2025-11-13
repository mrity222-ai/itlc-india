import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CAREERS } from '@/lib/constants';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-headline">Join Our Team</h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
          We are looking for passionate professionals who want to innovate with AI and technology.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {CAREERS.map((job) => (
          <Card key={job.title} className="glass-card flex flex-col group transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <CardTitle className="font-headline text-lg sm:text-xl">{job.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{job.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0 text-primary group-hover:text-accent">
                <Link href={`/contact?service=${encodeURIComponent(job.title)}`}>
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
