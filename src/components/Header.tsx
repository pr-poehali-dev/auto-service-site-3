import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Car" size={32} className="text-primary" />
          <span className="text-2xl font-heading font-bold text-secondary">AutoService</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
          <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button className="hidden md:inline-flex">
          <Icon name="Phone" size={18} className="mr-2" />
          +7 (495) 123-45-67
        </Button>
      </div>
    </header>
  );
}
