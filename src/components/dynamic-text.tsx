import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const impactPhrases = [
  "Transforme Seu Negócio com IA e Landing Pages de Alta Conversão",
  "Aumente suas vendas em até 300% com soluções personalizadas de atendimento humanizado com IA",
  "Crie experiências únicas para seus clientes com páginas otimizadas para conversão",
  "Combine IA e design de alta performance para conquistar mais clientes",
  "Atendimento automatizado, porém humano — fidelize com inteligência artificial",
  "Chegue ao topo com páginas que vendem por você 24h por dia",
  "Sua presença digital com tecnologia de ponta e conversão real",
  "Soluções SaaS para atrair, encantar e converter mais clientes"
];

export function DynamicText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === impactPhrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[120px] lg:min-h-[160px] flex items-center justify-center mb-6">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center dynamic-text"
        >
          {impactPhrases[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}