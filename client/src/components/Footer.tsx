import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const serviceLinkHrefs = ['/services', '/services', '/services', '/environment'];
  const companyLinkHrefs = ['/about', '/expertise', '/contact'];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/assets/images/emies-logo.png"
                alt="EMIES SARLU"
                className="h-8 w-8 object-contain"
              />
              <div>
                <div className="font-bold text-sm">EMIES SARLU</div>
                <div className="text-xs opacity-75">{t.footer.tagline}</div>
              </div>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">{t.footer.servicesHeading}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {t.footer.serviceLinks.map((label, index) => (
                <li key={label}>
                  <Link href={serviceLinkHrefs[index]} className="hover:opacity-100 transition-opacity">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">{t.footer.companyHeading}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {t.footer.companyLinks.map((label, index) => (
                <li key={label}>
                  <Link href={companyLinkHrefs[index]} className="hover:opacity-100 transition-opacity">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">{t.footer.contactHeading}</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{t.footer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@emies-sarlu.com" className="hover:opacity-100 transition-opacity">
                  info@emies-sarlu.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{t.footer.emergency}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>
            &copy; {currentYear} EMIES SARLU. {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">{t.footer.privacy}</a>
            <a href="#" className="hover:opacity-100 transition-opacity">{t.footer.terms}</a>
            <a href="#" className="hover:opacity-100 transition-opacity">{t.footer.compliance}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
