import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Contact Section - Professional Maritime Authority
 *
 * Design Notes:
 * - Operational contact information
 * - Unified color scheme
 * - Professional form styling
 * - 24/7 availability messaging
 */
const contactIcons = [MapPin, Phone, Mail, Clock];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.contact.info.map((info, index) => {
            const Icon = contactIcons[index];
            return (
              <Card
                key={info.title}
                className="p-6 border-l-4 border-l-accent border border-border bg-white hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg border-l-4 border-accent border border-border p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-foreground">{t.contact.formHeading}</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.fields.fullName}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.fields.fullNamePlaceholder}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.fields.email}
                </label>
                <input
                  type="email"
                  placeholder={t.contact.fields.emailPlaceholder}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.contact.fields.company}
              </label>
              <input
                type="text"
                placeholder={t.contact.fields.companyPlaceholder}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.contact.fields.service}
              </label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-all">
                <option>{t.contact.fields.selectService}</option>
                {t.contact.serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.contact.fields.message}
              </label>
              <textarea
                rows={5}
                placeholder={t.contact.fields.messagePlaceholder}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none transition-all"
              ></textarea>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              {t.contact.fields.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
