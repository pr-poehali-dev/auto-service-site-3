import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 1,
    title: 'Замена масла',
    description: 'Полная замена моторного масла и масляного фильтра. Используем только сертифицированные масла ведущих производителей.',
    price: '2 500 ₽',
    priceValue: 2500,
    duration: '30 мин',
    icon: 'Droplets',
    category: 'maintenance'
  },
  {
    id: 2,
    title: 'Диагностика двигателя',
    description: 'Компьютерная диагностика всех систем автомобиля. Выявление скрытых неисправностей на современном оборудовании.',
    price: '1 500 ₽',
    priceValue: 1500,
    duration: '45 мин',
    icon: 'Settings',
    category: 'diagnostics'
  },
  {
    id: 3,
    title: 'Замена тормозных колодок',
    description: 'Замена передних и задних тормозных колодок. Проверка состояния тормозных дисков и суппортов.',
    price: '3 800 ₽',
    priceValue: 3800,
    duration: '1 час',
    icon: 'CircleStop',
    category: 'repair'
  },
  {
    id: 4,
    title: 'Шиномонтаж',
    description: 'Сезонная замена шин, балансировка колес. Хранение сезонных комплектов колес в отапливаемом помещении.',
    price: '2 000 ₽',
    priceValue: 2000,
    duration: '40 мин',
    icon: 'Circle',
    category: 'maintenance'
  },
  {
    id: 5,
    title: 'Ремонт подвески',
    description: 'Диагностика и ремонт ходовой части. Замена амортизаторов, рычагов, сайлентблоков и других элементов.',
    price: 'от 5 000 ₽',
    priceValue: 5000,
    duration: '2-4 часа',
    icon: 'Wrench',
    category: 'repair'
  },
  {
    id: 6,
    title: 'Кузовной ремонт',
    description: 'Устранение повреждений кузова любой сложности. Покраска в камере с профессиональным оборудованием.',
    price: 'от 8 000 ₽',
    priceValue: 8000,
    duration: 'от 1 дня',
    icon: 'Paintbrush',
    category: 'bodywork'
  },
  {
    id: 7,
    title: 'Замена аккумулятора',
    description: 'Подбор и установка нового аккумулятора. Диагностика электрической системы автомобиля.',
    price: '1 200 ₽',
    priceValue: 1200,
    duration: '20 мин',
    icon: 'Battery',
    category: 'maintenance'
  },
  {
    id: 8,
    title: 'Замена свечей зажигания',
    description: 'Замена свечей зажигания на оригинальные или аналоги премиум-класса. Улучшение динамики двигателя.',
    price: '1 800 ₽',
    priceValue: 1800,
    duration: '40 мин',
    icon: 'Zap',
    category: 'maintenance'
  },
  {
    id: 9,
    title: 'Ремонт системы охлаждения',
    description: 'Замена радиатора, термостата, патрубков. Промывка системы охлаждения двигателя.',
    price: 'от 3 500 ₽',
    priceValue: 3500,
    duration: '1-2 часа',
    icon: 'Snowflake',
    category: 'repair'
  },
  {
    id: 10,
    title: 'Заправка кондиционера',
    description: 'Диагностика и заправка системы кондиционирования фреоном. Проверка на утечки.',
    price: '2 800 ₽',
    priceValue: 2800,
    duration: '1 час',
    icon: 'Wind',
    category: 'maintenance'
  },
  {
    id: 11,
    title: 'Полировка кузова',
    description: 'Профессиональная полировка с использованием премиальных материалов. Защитное покрытие керамикой.',
    price: 'от 12 000 ₽',
    priceValue: 12000,
    duration: '4-6 часов',
    icon: 'Sparkles',
    category: 'bodywork'
  },
  {
    id: 12,
    title: 'Развал-схождение',
    description: '3D регулировка углов установки колес на компьютерном стенде. Увеличение срока службы шин.',
    price: '2 200 ₽',
    priceValue: 2200,
    duration: '45 мин',
    icon: 'Compass',
    category: 'maintenance'
  }
];

export { services };

export default function Services() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-secondary mb-6">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Полный спектр премиальных услуг по ремонту и обслуживанию автомобилей
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary/20 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-luxury-sm">
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-heading mb-4 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{service.price}</div>
                    <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {service.duration}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="group-hover:bg-secondary group-hover:text-white transition-all">
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}