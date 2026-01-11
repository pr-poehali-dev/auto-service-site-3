import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Car" size={28} className="text-primary" />
              <span className="text-xl font-heading font-bold">AutoService</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Профессиональный ремонт и обслуживание автомобилей с 2010 года
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Калькулятор</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@autoservice.ru</li>
              <li>г. Москва, ул. Автомобильная, 10</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; 2025 AutoService. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
