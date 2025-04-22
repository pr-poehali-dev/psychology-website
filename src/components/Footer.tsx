
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container px-4 py-10 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">ПсихологияПлюс</h3>
            <p className="text-sm text-muted-foreground">
              Профессиональная психологическая поддержка для каждого. Мы помогаем обрести гармонию и баланс в жизни.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/individual" className="text-muted-foreground hover:text-primary transition-colors">
                  Индивидуальная терапия
                </Link>
              </li>
              <li>
                <Link to="/services/family" className="text-muted-foreground hover:text-primary transition-colors">
                  Семейная терапия
                </Link>
              </li>
              <li>
                <Link to="/services/group" className="text-muted-foreground hover:text-primary transition-colors">
                  Групповая терапия
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/specialists" className="text-muted-foreground hover:text-primary transition-colors">
                  Наши специалисты
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Полезные статьи
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Частые вопросы
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <p>Москва, ул. Психологическая, 123</p>
              <p className="mt-2">
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p className="mt-1">
                <a href="mailto:info@psychologyplus.ru" className="hover:text-primary transition-colors">
                  info@psychologyplus.ru
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-border/80 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 ПсихологияПлюс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
