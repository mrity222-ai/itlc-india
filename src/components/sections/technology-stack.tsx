import {
  PythonIcon,
  JavaIcon,
  PHPIcon,
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  NodeIcon,
  LaravelIcon,
  MongoDBIcon,
  MySQLIcon,
  ShopifyIcon,
  WordpressIcon,
  AWSIcon,
} from '@/components/tech-icons';

const technologies = [
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'PHP', icon: PHPIcon },
  { name: 'Laravel', icon: LaravelIcon },
  { name: 'Shopify', icon: ShopifyIcon },
  { name: 'WordPress', icon: WordpressIcon },
  { name: 'AWS', icon: AWSIcon },
  { name: 'MySQL', icon: MySQLIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
  { name: 'HTML5', icon: HTMLIcon },
  { name: 'CSS3', icon: CSSIcon },
  { name: 'JavaScript', icon: JSIcon },
];

export function TechnologyStack() {
  const extendedTechnologies = [...technologies, ...technologies];
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll group-hover:pause">
            {extendedTechnologies.map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="flex-shrink-0 mx-8 flex flex-col items-center gap-2 text-center group w-24">
                <tech.icon className="h-16 w-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <p className="font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
