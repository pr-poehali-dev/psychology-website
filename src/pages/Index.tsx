
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        
        {/* Раздел о преимуществах */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Мы стремимся создать безопасное и поддерживающее пространство для каждого клиента
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-3xl">👨‍⚕️</span>
                  </div>
                  <CardTitle>Опытные специалисты</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Сертифицированные психологи с многолетним опытом работы и постоянным профессиональным развитием</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <CardTitle>Индивидуальный подход</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Разрабатываем персональные стратегии терапии с учетом ваших уникальных потребностей</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <CardTitle>Конфиденциальность</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Гарантируем полную конфиденциальность ваших данных и содержания сессий</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Добавляем раздел отзывов */}
        <TestimonialsSection />
        
        {/* Раздел о методах работы */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Наши методы работы</h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Мы используем научно обоснованные методы психотерапии, доказавшие свою эффективность
              </p>
            </div>
            <Tabs defaultValue="cbt" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="cbt">Когнитивно-поведенческая терапия</TabsTrigger>
                <TabsTrigger value="psychodynamic">Психодинамический подход</TabsTrigger>
                <TabsTrigger value="humanistic">Гуманистическая терапия</TabsTrigger>
              </TabsList>
              <TabsContent value="cbt" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Когнитивно-поведенческая терапия (КПТ)</CardTitle>
                    <CardDescription>
                      Фокусируется на выявлении и изменении негативных мыслительных паттернов и поведения
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      КПТ эффективна при лечении тревожных расстройств, депрессии, фобий и многих других психологических проблем. 
                      Метод помогает развить более здоровые способы мышления и реагирования на трудности.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="psychodynamic" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Психодинамический подход</CardTitle>
                    <CardDescription>
                      Исследует влияние прошлого опыта и бессознательных процессов на текущее поведение
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Помогает распознать и разрешить скрытые конфликты и глубинные причины психологических проблем. 
                      Особенно полезен при работе с хроническими эмоциональными трудностями и проблемами в отношениях.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="humanistic" className="mt-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Гуманистическая терапия</CardTitle>
                    <CardDescription>
                      Сосредоточена на личностном росте, самопознании и самореализации 
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Создает поддерживающую среду, где клиенты могут исследовать свои чувства и развивать 
                      самопринятие. Подход помогает раскрыть внутренний потенциал и достичь большей удовлетворенности жизнью.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Готовы начать свой путь к благополучию?</h2>
            <p className="mb-6 text-lg max-w-2xl mx-auto opacity-90">
              Запишитесь на консультацию уже сегодня, и сделайте первый шаг к позитивным изменениям
            </p>
            <Button size="lg" variant="secondary" className="font-medium">
              Записаться на консультацию
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
