import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-luxury-sm group-hover:shadow-luxury transition-all duration-300">
              <Icon name="Car" size={22} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-bold text-secondary tracking-tight">AutoService</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Premium Care</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-1">
            <Link 
              to="/" 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-secondary text-white shadow-luxury-sm' 
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              Главная
            </Link>
            <Link 
              to="/services" 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/services') 
                  ? 'bg-secondary text-white shadow-luxury-sm' 
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              Услуги
            </Link>
            <Link 
              to="/calculator" 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/calculator') 
                  ? 'bg-secondary text-white shadow-luxury-sm' 
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              Калькулятор
            </Link>
            <Link 
              to="/about" 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/about') 
                  ? 'bg-secondary text-white shadow-luxury-sm' 
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              О нас
            </Link>
            <Link 
              to="/reviews" 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/reviews') 
                  ? 'bg-secondary text-white shadow-luxury-sm' 
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              Отзывы
            </Link>
            <Link 
              to="/contact" 
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/contact') 
                  ? 'bg-secondary text-white shadow-luxury-sm' 
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              Контакты
            </Link>
          </nav>
          
          <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-accent hover:shadow-luxury transition-all duration-300">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </div>
    </header>
  );
}
