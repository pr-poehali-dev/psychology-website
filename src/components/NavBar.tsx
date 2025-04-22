
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">ПсихологияПлюс</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </Link>
            <Link to="/specialists" className="text-sm font-medium hover:text-primary transition-colors">
              Специалисты
            </Link>
            <Link to="/articles" className="text-sm font-medium hover:text-primary transition-colors">
              Статьи
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/contact">Связаться</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/appointment">Записаться</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
