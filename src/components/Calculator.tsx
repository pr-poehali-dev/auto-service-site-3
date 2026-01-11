import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { services } from './Services';

interface CalculatorProps {
  selectedServices: number[];
  toggleService: (serviceId: number) => void;
  totalPrice: number;
  onBooking: () => void;
}

export default function Calculator({ selectedServices, toggleService, totalPrice, onBooking }: CalculatorProps) {
  return (
    <section id="calculator" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Калькулятор стоимости</h2>
            <p className="text-lg text-muted-foreground">Выберите нужные услуги и узнайте стоимость</p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => toggleService(service.id)}
                  >
                    <Checkbox 
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => toggleService(service.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-semibold text-secondary mb-1">{service.title}</div>
                          <div className="text-sm text-muted-foreground">{service.duration}</div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-bold text-primary">{service.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Выбрано услуг: {selectedServices.length}</div>
                    <div className="text-3xl font-heading font-bold text-secondary">
                      Итого: <span className="text-primary">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    disabled={selectedServices.length === 0}
                    onClick={onBooking}
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на услуги
                  </Button>
                </div>
                {selectedServices.length > 0 && (
                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-foreground">
                        <strong>Обратите внимание:</strong> Окончательная стоимость может отличаться в зависимости 
                        от состояния автомобиля и необходимости дополнительных работ. Точную смету вы получите после диагностики.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
