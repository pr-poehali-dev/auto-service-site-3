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
    icon: 'Droplets'
  },
  {
    id: 2,
    title: 'Диагностика двигателя',
    description: 'Компьютерная диагностика всех систем автомобиля. Выявление скрытых неисправностей на современном оборудовании.',
    price: '1 500 ₽',
    priceValue: 1500,
    duration: '45 мин',
    icon: 'Settings'
  },
  {
    id: 3,
    title: 'Замена тормозных колодок',
    description: 'Замена передних и задних тормозных колодок. Проверка состояния тормозных дисков и суппортов.',
    price: '3 800 ₽',
    priceValue: 3800,
    duration: '1 час',
    icon: 'CircleStop'
  },
  {
    id: 4,
    title: 'Шиномонтаж',
    description: 'Сезонная замена шин, балансировка колес. Хранение сезонных комплектов колес в отапливаемом помещении.',
    price: '2 000 ₽',
    priceValue: 2000,
    duration: '40 мин',
    icon: 'Circle'
  },
  {
    id: 5,
    title: 'Ремонт подвески',
    description: 'Диагностика и ремонт ходовой части. Замена амортизаторов, рычагов, сайлентблоков и других элементов.',
    price: 'от 5 000 ₽',
    priceValue: 5000,
    duration: '2-4 часа',
    icon: 'Wrench'
  },
  {
    id: 6,
    title: 'Кузовной ремонт',
    description: 'Устранение повреждений кузова любой сложности. Покраска в камере с профессиональным оборудованием.',
    price: 'от 8 000 ₽',
    priceValue: 8000,
    duration: 'от 1 дня',
    icon: 'Paintbrush'
  }
];

export { services };

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автомобилей
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">{service.duration}</div>
                  </div>
                  <Button variant="outline" size="sm">
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
