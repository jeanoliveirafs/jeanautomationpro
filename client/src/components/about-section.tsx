import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-0 shadow-xl">
              <CardContent className="p-8">
                <motion.h2 
                  className="text-4xl font-bold text-blue-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Prazer, eu sou Jean Oliveira.
                </motion.h2>
                
                <motion.div 
                  className="space-y-4 text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p>
                    <strong className="text-foreground">Jean Oliveira</strong> é um especialista visionário em 
                    <span className="text-blue-600 font-semibold"> Inteligência Artificial</span>, 
                    <span className="text-green-600 font-semibold"> Automação</span>, 
                    <span className="text-purple-600 font-semibold"> Programação</span> e 
                    <span className="text-orange-600 font-semibold"> Desenvolvimento</span>, 
                    apaixonado por explorar e compartilhar o potencial transformador da tecnologia.
                  </p>
                  
                  <p>
                    Fundador da marca <strong className="text-foreground">jeanautomationpro</strong>, 
                    ele tem se destacado por ajudar pessoas e empresas a simplificar processos, 
                    otimizar resultados e inovar no mercado por meio de soluções baseadas em IA 
                    e desenvolvimento tecnológico.
                  </p>
                  
                  <p>
                    Com uma abordagem prática e acessível, Jean acredita que o conhecimento sobre 
                    <strong className="text-blue-600"> Inteligência Artificial</strong> e 
                    <strong className="text-green-600"> programação</strong> deve ser democratizado, 
                    permitindo que qualquer pessoa, independentemente de sua experiência técnica, 
                    possa utilizá-lo para <strong className="text-foreground">transformar ideias em resultados reais</strong>.
                  </p>
                </motion.div>

                {/* Especialidades */}
                <motion.div 
                  className="mt-8 grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">🤖</div>
                    <div className="text-sm font-semibold text-blue-600">Inteligência Artificial</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">⚡</div>
                    <div className="text-sm font-semibold text-green-600">Automação</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">💻</div>
                    <div className="text-sm font-semibold text-purple-600">Programação</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">🚀</div>
                    <div className="text-sm font-semibold text-orange-600">Desenvolvimento</div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Efeitos de fundo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20" />
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-10" />
              
              {/* Imagem Principal */}
              <Card className="relative overflow-hidden border-0 shadow-2xl">
                <img 
                  src="/jeanoliveira.jpg"
                  alt="Jean Oliveira - Especialista em IA e Automação"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </Card>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🤖
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                💻
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 