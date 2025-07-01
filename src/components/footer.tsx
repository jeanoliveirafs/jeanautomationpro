import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/jeanautomationpro.png" 
                alt="Jean Automation Pro" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl gradient-text">jeanautomationpro</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Especialista em IA e Automação, ajudando empresas a crescerem com tecnologia de ponta.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="mailto:contato@jeanautomationpro.com.br"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5551992656309"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/jeanautomationpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { name: "Chatbots com IA", href: "#servicos" },
                { name: "Landing Pages", href: "#servicos" },
                { name: "Plataformas SaaS", href: "#servicos" },
                { name: "Consultoria", href: "#portfolio" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { name: "Trabalhos", href: "#portfolio" },
                { name: "Depoimentos", href: "#depoimentos" },
                { name: "Contato", href: "#contato" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 jeanautomationpro. Todos os direitos reservados. Desenvolvido com ❤️ e tecnologia de ponta.</p>
        </div>
      </div>
    </footer>
  );
}
