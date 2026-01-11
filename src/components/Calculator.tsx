import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { services } from './Services';
import { useState } from 'react';

interface CalculatorProps {
  selectedServices: number[];
  toggleService: (serviceId: number) => void;
  totalPrice: number;
  onBooking: () => void;
}

type ServiceCategory = 'all' | 'maintenance' | 'repair' | 'diagnostics' | 'bodywork';

export default function Calculator({ selectedServices, toggleService, totalPrice, onBooking }: CalculatorProps) {
  const [filterCategory, setFilterCategory] = useState<ServiceCategory>('all');
  const [urgentService, setUrgentService] = useState(false);
  const [carType, setCarType] = useState<string>('sedan');
  
  const filteredServices = filterCategory === 'all' 
    ? services 
    : services.filter(s => s.category === filterCategory);
  
  const urgencyMultiplier = urgentService ? 1.3 : 1;
  const carTypeMultiplier = carType === 'suv' ? 1.2 : carType === 'truck' ? 1.4 : 1;
  const finalPrice = Math.round(totalPrice * urgencyMultiplier * carTypeMultiplier);
  const discount = selectedServices.length >= 3 ? 0.1 : 0;
  const finalPriceWithDiscount = Math.round(finalPrice * (1 - discount));
  
  return (
    <section id="calculator" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Калькулятор стоимости</h2>
            <p className="text-lg text-muted-foreground">Выберите нужные услуги и узнайте стоимость</p>
          </div>
          
          <Card className="mb-6 animate-fade-in">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">Категория услуг</label>
                  <Select value={filterCategory} onValueChange={(value) => setFilterCategory(value as ServiceCategory)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все услуги</SelectItem>
                      <SelectItem value="maintenance">Техобслуживание</SelectItem>
                      <SelectItem value="repair">Ремонт</SelectItem>
                      <SelectItem value="diagnostics">Диагностика</SelectItem>
                      <SelectItem value="bodywork">Кузовной ремонт</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">Тип автомобиля</label>
                  <Select value={carType} onValueChange={setCarType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Легковой (базовая цена)</SelectItem>
                      <SelectItem value="suv">Кроссовер/SUV (+20%)</SelectItem>
                      <SelectItem value="truck">Внедорожник/Грузовой (+40%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">Срочность</label>
                  <div 
                    onClick={() => setUrgentService(!urgentService)}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                  >
                    <Checkbox 
                      checked={urgentService}
                      onCheckedChange={setUrgentService}
                    />
                    <span className="text-sm">Срочный ремонт (+30%)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden animate-slide-up">
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                {filteredServices.map((service) => (
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
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Базовая стоимость услуг:</span>
                    <span className="font-medium">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  {carType !== 'sedan' && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Тип автомобиля:</span>
                      <span className="font-medium text-accent">+{Math.round((carTypeMultiplier - 1) * 100)}%</span>
                    </div>
                  )}
                  {urgentService && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Срочность:</span>
                      <span className="font-medium text-accent">+30%</span>
                    </div>
                  )}
                  {selectedServices.length >= 3 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Скидка за 3+ услуги:</span>
                      <span className="font-medium text-green-600">-10%</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Выбрано услуг: {selectedServices.length}</div>
                    <div className="text-3xl font-heading font-bold text-secondary">
                      Итого: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{finalPriceWithDiscount.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    disabled={selectedServices.length === 0}
                    onClick={onBooking}
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-luxury transition-all"
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться
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