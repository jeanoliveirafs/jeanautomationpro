import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Maria Clara Santos",
    role: "CEO, EcoTech Solutions",
    initials: "MC",
    content: "A landing page criada aumentou nossas conversões em 320%. O resultado superou todas as expectativas. Profissionalismo e qualidade excepcionais!",
    project: "Landing Page E-commerce",
    rating: 5,
    gradient: "from-blue-400 to-blue-600",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&q=80",
    avatarAlt: "Maria Clara Santos, CEO da EcoTech Solutions"
  },
  {
    name: "Roberto Almeida",
    role: "Diretor, MedCare Clínicas",
    initials: "RA",
    content: "O chatbot de IA revolucionou nosso atendimento. Reduzimos custos em 70% e melhoramos a satisfação dos pacientes. Simplesmente fantástico!",
    project: "Chatbot IA para Clínica",
    rating: 5,
    gradient: "from-green-400 to-green-600",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80",
    avatarAlt: "Roberto Almeida, Diretor da MedCare Clínicas"
  },
  {
    name: "Ana Silva",
    role: "Fundadora, StartupFlow",
    initials: "AS",
    content: "O SaaS desenvolvido transformou nossa operação. Aumentamos o faturamento em 540% no primeiro ano. Investimento que se pagou rapidamente!",
    project: "Plataforma SaaS de Gestão",
    rating: 5,
    gradient: "from-purple-400 to-purple-600",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=80",
    avatarAlt: "Ana Silva, Fundadora da StartupFlow"
  }
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de empresários que transformaram seus negócios com nossas soluções.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="animate-slide-up hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="w-16 h-16 mr-4 testimonial-avatar">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={testimonial.avatarAlt}
                      className="object-cover"
                      loading="lazy"
                    />
                    <AvatarFallback className={`bg-gradient-to-br ${testimonial.gradient} text-white font-bold text-xl`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Projeto: {testimonial.project}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
