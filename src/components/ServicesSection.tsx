
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: 1,
    title: "Индивидуальная терапия",
    description: "Персональные консультации для работы с личностными проблемами, тревогой, депрессией и другими запросами.",
    type: "Онлайн/Офлайн",
  },
  {
    id: 2,
    title: "Семейная терапия",
    description: "Помощь парам и семьям в решении конфликтов, улучшении коммуникации и укреплении отношений.",
    type: "Онлайн/Офлайн",
  },
  {
    id: 3,
    title: "Групповая терапия",
    description: "Терапевтические группы для совместной работы над схожими проблемами и обмена опытом.",
    type: "Офлайн",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Наши услуги</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Мы предлагаем широкий спектр психологических услуг, адаптированных под ваши индивидуальные потребности
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{service.title}</CardTitle>
                  <Badge variant="outline">{service.type}</Badge>
                </div>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    Подробнее
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
