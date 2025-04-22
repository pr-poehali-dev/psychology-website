
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  date: string;
}

const TestimonialCard = ({ name, text, rating, date }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                }`}
              />
            ))}
        </div>
        <p className="mb-4 text-muted-foreground">{text}</p>
        <div className="mt-auto">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
