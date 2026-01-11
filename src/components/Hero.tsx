import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <>
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted opacity-60"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-luxury-sm mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-secondary tracking-wide">С 2010 года — эталон качества</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-secondary mb-8 leading-[1.1] animate-slide-up">
              Премиальный уход<br />за вашим автомобилем
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Безупречный сервис для тех, кто ценит качество и внимание к деталям
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-luxury transition-all duration-300">
                  <Icon name="Calendar" size={22} className="mr-2" />
                  Записаться на сервис
                </Button>
              </Link>
              <Link to="/calculator">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  <Icon name="Calculator" size={22} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group cursor-default animate-slide-up">
              <div className="text-6xl font-heading font-bold mb-3 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-white/70 text-lg tracking-wide">лет безупречного опыта</div>
            </div>
            <div className="text-center group cursor-default animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-6xl font-heading font-bold mb-3 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10000+</div>
              <div className="text-white/70 text-lg tracking-wide">довольных клиентов</div>
            </div>
            <div className="text-center group cursor-default animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl font-heading font-bold mb-3 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-white/70 text-lg tracking-wide">положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
