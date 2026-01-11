import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-black opacity-80"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-luxury-sm group-hover:scale-110 transition-transform duration-300">
                <Icon name="Car" size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold tracking-tight">AutoService</span>
                <span className="text-xs text-white/60 tracking-wider uppercase">Premium Care</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-md mb-6 font-light">
              Эталон качества и профессионализма в автомобильном сервисе с 2010 года. 
              Доверьте свой автомобиль настоящим экспертам.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Icon name="Youtube" size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                Услуги
              </Link></li>
              <li><Link to="/calculator" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                Калькулятор
              </Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                О нас
              </Link></li>
              <li><Link to="/reviews" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                Отзывы
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <Icon name="Phone" size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
                  <div className="text-sm mt-1">Ежедневно 9:00 - 21:00</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Icon name="Mail" size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:info@autoservice.ru" className="hover:text-white transition-colors">info@autoservice.ru</a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>г. Москва,<br />ул. Автомобильная, 10</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">&copy; 2025 AutoService Premium Care. Все права защищены.</p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
