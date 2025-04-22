
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        {/* Заголовок страницы */}
        <section className="bg-primary/10 py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">О нашем центре</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              Мы помогаем людям обрести гармонию и психологическое благополучие с 2010 года
            </p>
          </div>
        </section>

        {/* История центра */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Наша история</h2>
                <p className="text-muted-foreground mb-4">
                  Центр «ПсихологияПлюс» был основан командой опытных психологов, объединенных общей миссией — сделать психологическую помощь доступной и эффективной.
                </p>
                <p className="text-muted-foreground mb-4">
                  За 13 лет работы наша команда выросла с трех специалистов до крупного центра с более чем 20 профессионалами различных направлений психологии и психотерапии.
                </p>
                <p className="text-muted-foreground">
                  Мы гордимся тем, что помогли тысячам людей преодолеть жизненные трудности, раскрыть свой потенциал и построить гармоничные отношения с собой и окружающими.
                </p>
              </div>
              <div className="rounded-lg bg-muted/30 p-8 text-center">
                <div className="mb-4 mx-auto rounded-full bg-primary/10 w-24 h-24 flex items-center justify-center">
                  <span className="text-5xl">💫</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Наша миссия</h3>
                <p className="text-muted-foreground">
                  Создавать пространство, где каждый человек может получить профессиональную поддержку, обрести внутреннюю силу и реализовать себя в полной мере
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Уважение</h3>
                  <p className="text-muted-foreground text-center">
                    Мы глубоко уважаем индивидуальность каждого человека, его выбор и жизненный путь
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="text-3xl">🔎</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Профессионализм</h3>
                  <p className="text-muted-foreground text-center">
                    Мы постоянно совершенствуем свои знания и навыки, применяя научно обоснованные методы
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Конфиденциальность</h3>
                  <p className="text-muted-foreground text-center">
                    Мы создаем безопасное пространство, где ваши личные границы надежно защищены
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Наша команда</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Познакомьтесь с нашими ведущими специалистами — опытными профессионалами в различных областях психологии
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full bg-muted/50 flex items-center justify-center">
                  <span className="text-5xl">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Елена Соколова</h3>
                <p className="text-primary font-medium mb-2">Клинический психолог</p>
                <p className="text-muted-foreground text-sm">15+ лет опыта работы с тревожными расстройствами и депрессией</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full bg-muted/50 flex items-center justify-center">
                  <span className="text-5xl">👨‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Михаил Громов</h3>
                <p className="text-primary font-medium mb-2">Семейный психотерапевт</p>
                <p className="text-muted-foreground text-sm">Эксперт по разрешению семейных конфликтов и детско-родительским отношениям</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 rounded-full bg-muted/50 flex items-center justify-center">
                  <span className="text-5xl">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Анна Петрова</h3>
                <p className="text-primary font-medium mb-2">Психолог-консультант</p>
                <p className="text-muted-foreground text-sm">Специалист по личностному росту и профессиональному развитию</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
