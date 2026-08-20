import { Card } from '@/components/ui/card';
import { Leaf, Droplets, Wind, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Environmental Commitment Section - Professional Maritime Authority
 *
 * Design Notes:
 * - Unified color scheme: Primary and Accent only
 * - Operational language: prevention, monitoring, response
 * - Trust metrics with concrete commitments
 * - Environmental responsibility integrated into operations
 */
export const environmentIcons = [Leaf, Droplets, Wind, Zap];

export default function Environmental() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.environment.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.environment.description}
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.environment.initiatives.map((initiative, index) => {
            const Icon = environmentIcons[index];
            return (
              <Card
                key={initiative.title}
                className="p-6 border-l-4 border-l-accent border border-border bg-gradient-to-br from-green-50/50 to-white hover:shadow-md transition-all duration-300"
              >
                <div className="text-primary mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {initiative.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Environmental Impact - Operational Commitments */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 md:p-12 border-l-4 border-accent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.environment.stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-5xl font-bold mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>
                  {stat.value}
                </div>
                <p className="text-foreground font-semibold mb-2">{stat.label}</p>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
