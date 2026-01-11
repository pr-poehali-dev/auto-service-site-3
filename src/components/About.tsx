import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold text-secondary mb-6">О компании</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              AutoService — современный автосервис с 15-летним опытом работы. Мы специализируемся на профессиональном 
              обслуживании и ремонте автомобилей всех марок и моделей.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Наша команда состоит из высококвалифицированных мастеров с многолетним опытом. Мы используем только 
              качественные запчасти и современное диагностическое оборудование.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Гарантия на все виды работ 6 месяцев</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Оригинальные запчасти от проверенных поставщиков</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Прозрачное ценообразование без скрытых платежей</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">Комфортная зона ожидания с Wi-Fi и кофе</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary/10 rounded-2xl p-8 backdrop-blur-sm">
              <Icon name="Car" size={200} className="text-primary/20 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
