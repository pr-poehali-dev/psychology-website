
import TestimonialCard from "./TestimonialCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Узнайте, что говорят люди, которые уже прошли путь психологической поддержки с нами
          </p>
        </div>

        <Tabs defaultValue="individual" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="individual">Индивидуальная терапия</TabsTrigger>
            <TabsTrigger value="family">Семейная терапия</TabsTrigger>
            <TabsTrigger value="group">Групповые занятия</TabsTrigger>
          </TabsList>
          
          <TabsContent value="individual" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Марина К."
                text="Благодаря индивидуальным сессиям с психологом я смогла разобраться с тревожностью, которая преследовала меня годами. Теперь я чувствую себя намного спокойнее и увереннее."
                rating={5}
                date="Май 2023"
              />
              <TestimonialCard
                name="Дмитрий Л."
                text="После нескольких месяцев терапии я научился лучше понимать свои эмоции и управлять ими. Это положительно повлияло на все сферы моей жизни."
                rating={4}
                date="Март 2023"
              />
              <TestimonialCard
                name="Алёна Т."
                text="Мой психолог помог мне увидеть ситуацию с другой стороны и выработать здоровые механизмы совладания со стрессом. Очень профессиональный подход!"
                rating={5}
                date="Июнь 2023"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="family" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Семья Ивановых"
                text="Семейная терапия помогла нам наладить общение и разрешить застарелые конфликты. Теперь у нас дома намного спокойнее и приятнее."
                rating={5}
                date="Апрель 2023"
              />
              <TestimonialCard
                name="Елена и Сергей"
                text="Мы были на грани развода, но благодаря сессиям с семейным психологом смогли восстановить отношения и вернуть в них любовь и уважение."
                rating={5}
                date="Февраль 2023"
              />
              <TestimonialCard
                name="Ольга М."
                text="С помощью семейного психолога мы с дочерью-подростком смогли найти общий язык. Это было непросто, но результат стоил всех усилий."
                rating={4}
                date="Июль 2023"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="group" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Александр В."
                text="Групповые занятия дали мне возможность увидеть, что я не одинок в своих проблемах. Поддержка группы и профессионализм ведущего были бесценны."
                rating={5}
                date="Май 2023"
              />
              <TestimonialCard
                name="Ирина С."
                text="Тренинг по управлению стрессом изменил мое отношение к повседневным трудностям. Я научилась эффективным техникам релаксации."
                rating={4}
                date="Март 2023"
              />
              <TestimonialCard
                name="Николай П."
                text="Участие в группе по личностному росту помогло мне лучше понять себя и свои цели. Благодарен за профессиональное ведение группы."
                rating={5}
                date="Июнь 2023"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestimonialsSection;
