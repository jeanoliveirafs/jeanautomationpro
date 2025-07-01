import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DynamicText } from "@/components/dynamic-text";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Background with Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
          alt="Tecnologia futurista e inteligência artificial com circuitos digitais"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-purple-950/90 to-green-950/90" />
      </div>
      
      {/* Animated Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/30 rounded-full blur-xl"
        animate={{ 
          x: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400/30 rounded-full blur-xl"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <DynamicText />
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed mt-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Especialistas em soluções digitais que combinam tecnologia de ponta com estratégia para maximizar seus resultados.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                size="lg"
                className="btn-primary text-lg px-8 py-6 rounded-2xl shadow-2xl"
                onClick={() => scrollToSection("#contato")}
              >
                🚀 Solicitar Análise Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl border-2 glass-card hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("#portfolio")}
              >
                📊 Ver Cases de Sucesso
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">300%</div>
                <div className="text-sm text-muted-foreground">ROI Médio</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
