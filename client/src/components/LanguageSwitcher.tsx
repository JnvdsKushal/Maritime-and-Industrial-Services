import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

/**
 * Compact FR | EN toggle styled to match the existing Header —
 * same border/primary/accent tokens as the rest of the nav, no new
 * visual language introduced.
 */
export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-muted/50 p-0.5 text-xs font-semibold',
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        className={cn(
          'px-2.5 py-1 rounded-full transition-colors duration-200',
          language === 'fr'
            ? 'bg-primary text-white'
            : 'text-muted-foreground hover:text-primary'
        )}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={cn(
          'px-2.5 py-1 rounded-full transition-colors duration-200',
          language === 'en'
            ? 'bg-primary text-white'
            : 'text-muted-foreground hover:text-primary'
        )}
      >
        EN
      </button>
    </div>
  );
}
