import { Bot, TrendingUp, Code, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "Atendimento Humanizado com IA",
    description: "Chatbots inteligentes que conversam naturalmente com seus clientes, resolvendo 80% das dúvidas automaticamente e direcionando casos complexos para sua equipe.",
    features: [
      "Integração com WhatsApp, Instagram e site",
      "Aprendizado contínuo e personalização",
      "Dashboard com métricas em tempo real"
    ],
    benefit: "💡 Reduz custos de atendimento em até 70%",
    price: "R$ 2.500",
    buttonText: "Quero Automatizar Atendimento",
    gradient: "from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20",
    iconBg: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    imageAlt: "Robô de inteligência artificial e chatbot automatizado para atendimento ao cliente"
  },
  {
    icon: TrendingUp,
    title: "Landing Pages de Alta Conversão",
    description: "Páginas estratégicamente desenvolvidas com foco em conversão, utilizando psicologia de vendas e design persuasivo para transformar visitantes em clientes.",
    features: [
      "Design baseado em testes A/B",
      "Otimização para SEO e velocidade",
      "Integração com ferramentas de análise"
    ],
    benefit: "📈 Taxa de conversão média de 8-15%",
    price: "R$ 3.500",
    buttonText: "Criar Minha Landing Page",
    gradient: "from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20",
    iconBg: "from-green-500 to-green-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    imageAlt: "Dashboard de analytics mostrando gráficos de conversão e performance de landing pages"
  },
  {
    icon: Code,
    title: "Produtos SaaS Personalizados",
    description: "Desenvolvimento de software como serviço sob medida para automatizar processos específicos do seu negócio, criando soluções escaláveis e rentáveis.",
    features: [
      "Arquitetura escalável na nuvem",
      "API robusta para integrações",
      "Dashboard analytics avançado"
    ],
    benefit: "🚀 ROI médio de 400% no primeiro ano",
    price: "R$ 15.000",
    buttonText: "Desenvolver Meu SaaS",
    gradient: "from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20",
    iconBg: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    imageAlt: "Desenvolvedor programando código para software SaaS personalizado"
  }
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Soluções Que <span className="gradient-text">Revolucionam</span> Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos serviços especializados que combinam tecnologia de ponta com estratégia de negócios para maximizar seus resultados.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card border-0 h-full card-hover overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.imageAlt}
                      className="w-full h-full object-cover service-image"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-sm text-muted-foreground">
                      {service.benefit}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-muted-foreground">A partir de</div>
                      <div className="text-2xl font-bold">{service.price}</div>
                    </div>
                    
                    <Button 
                      className="w-full btn-primary font-semibold"
                      onClick={scrollToContact}
                    >
                      {service.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
