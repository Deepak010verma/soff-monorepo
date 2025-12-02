import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface LibraryCardProps {
  name: string;
  description: string;
  version: string;
  icon: LucideIcon;
  href: string;
  features: string[];
  colorClass: string;
  gradientClass: string;
  glowClass: string;
}

export function LibraryCard({
  name,
  description,
  version,
  icon: Icon,
  href,
  features,
  gradientClass,
  glowClass,
}: LibraryCardProps) {
  return (
    <Link href={href} className="group">
      <Card className="h-full card-hover-effect transition-all duration-300 hover:border-primary/50 relative overflow-hidden">
        {/* Gradient background overlay on hover */}
        <div
          className={cn(
            'absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300',
            gradientClass
          )}
        />

        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div
              className={cn(
                'p-2.5 rounded-lg transition-all duration-300 group-hover:scale-110',
                gradientClass,
                'group-hover:' + glowClass
              )}
            >
              <Icon size={24} className="text-white" />
            </div>
            <Badge variant="secondary" className="font-mono text-xs">
              v{version}
            </Badge>
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">{name}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
