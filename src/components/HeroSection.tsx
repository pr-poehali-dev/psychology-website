
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-muted/50 to-background py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Путь к гармонии и психологическому благополучию
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Мы помогаем людям справиться с эмоциональными трудностями, улучшить отношения и 
              найти баланс в жизни. Наши опытные психологи работают с разными запросами 
              и используют современные методики терапии.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link to="/appointment">Записаться на консультацию</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Узнать больше</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/placeholder.svg" 
              width={550} 
              height={400} 
              alt="Психологическая поддержка" 
              className="rounded-lg object-cover w-full max-w-[550px] aspect-[4/3] border bg-muted/50 shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
