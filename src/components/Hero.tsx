import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1">Работаем с 2010 года</Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-secondary mb-6 leading-tight">
              Профессиональный уход за вашим автомобилем
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Качественный ремонт и обслуживание автомобилей всех марок. Гарантия на все работы 6 месяцев.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на сервис
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-heading font-bold mb-2">15+</div>
              <div className="text-white/80">лет опыта</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-heading font-bold mb-2">10000+</div>
              <div className="text-white/80">довольных клиентов</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-heading font-bold mb-2">98%</div>
              <div className="text-white/80">положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
