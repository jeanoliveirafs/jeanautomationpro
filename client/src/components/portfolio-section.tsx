import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const portfolioItems = [
  {
    title: "Landing Page de Vendas",
    description: "Landing page de alta conversão aumentou vendas em 387% e gerou R$ 2.4M em receita.",
    metric: "+387%",
    metricLabel: "Conversão",
    stat1: "R$ 2.4M",
    stat1Label: "Receita gerada",
    stat2: "30 dias",
    stat2Label: "Tempo de resultado",
    gradient: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800",
    textColor: "text-blue-600 dark:text-blue-400",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    imageAlt: "Gráficos de conversão e analytics de landing page de alta performance",
    href: "/case/ecommerce"
  },
  {
    title: "Clínica Médica",
    description: "Chatbot IA reduziu custos de atendimento e melhorou satisfação do paciente.",
    metric: "-72%",
    metricLabel: "Custo Atendimento",
    stat1: "4.9⭐",
    stat1Label: "Satisfação",
    stat2: "24/7",
    stat2Label: "Disponibilidade",
    gradient: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800",
    textColor: "text-green-600 dark:text-green-400",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    imageAlt: "Interface de chatbot médico com IA para atendimento ao paciente",
    href: "/case/clinica"
  },
  {
    title: "SaaS de Gestão",
    description: "Plataforma personalizada automatizou processos e gerou nova fonte de receita.",
    metric: "+540%",
    metricLabel: "ROI",
    stat1: "R$ 890K",
    stat1Label: "ARR alcançado",
    stat2: "2.500",
    stat2Label: "Usuários ativos",
    gradient: "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800",
    textColor: "text-purple-600 dark:text-purple-400",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    imageAlt: "Dashboard de software SaaS com interface moderna e dados analíticos",
    href: "/case/saas"
  }
];

const stats = [
  { value: "500+", label: "Projetos Entregues" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "2.5x", label: "ROI Médio" },
  { value: "30", label: "Dias Médio Entrega" }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Cases de <span className="gradient-text">Sucesso Comprovado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de clientes que transformaram seus negócios com nossas soluções. Veja os números que falam por si só.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.title}
              className="card-hover overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Portfolio Image with Metric Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.imageAlt}
                  className="w-full h-full object-cover portfolio-image"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">
                      {item.metric}
                    </div>
                    <div className="text-sm opacity-90">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.stat1}</div>
                    <div className="text-xs text-muted-foreground">{item.stat1Label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.stat2}</div>
                    <div className="text-xs text-muted-foreground">{item.stat2Label}</div>
                  </div>
                </div>
                
                <Link href={item.href}>
                  <Button variant="outline" className="w-full">
                    Ver Case Completo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
