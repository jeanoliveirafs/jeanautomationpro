import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Check, Clock, Shield, Zap, Mail, MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertFreeAnalysisSchema, type InsertFreeAnalysisRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertFreeAnalysisRequest>({
    resolver: zodResolver(insertFreeAnalysisSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      servicesInterest: [],
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertFreeAnalysisRequest) => {
      console.log("🚀 Enviando dados:", data);
      try {
        const response = await apiRequest("POST", "/api/free-analysis", data);
        console.log("✅ Resposta recebida:", response.status, response.statusText);
        
        const result = await response.json();
        console.log("📄 Dados da resposta:", result);
        return result;
      } catch (error) {
        console.error("❌ Erro na requisição:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "✅ Mensagem enviada com sucesso!",
        description: data.message,
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: (error) => {
      console.error("💥 Erro detalhado:", error);
      console.error("💥 Tipo do erro:", typeof error);
      console.error("💥 Mensagem:", error.message);
      
      toast({
        title: "❌ Erro ao enviar mensagem",
        description: `Erro: ${error.message || "Tente novamente ou entre em contato pelo WhatsApp."}`,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertFreeAnalysisRequest) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" 
          alt="Equipe de profissionais trabalhando com tecnologia e inovação digital"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-blue-900/95" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Pronto Para <span className="gradient-text">Transformar</span> Seu Negócio?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Solicite uma análise gratuita e descubra como podemos aumentar suas vendas em até 300% com nossas soluções personalizadas.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: Check, text: "Análise gratuita do seu negócio" },
                { icon: Clock, text: "Proposta personalizada em 24h" },
                { icon: Shield, text: "Garantia de satisfação 100%" },
                { icon: Zap, text: "Suporte dedicado durante todo projeto" }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-green-600" />
                    <span className="text-lg">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
            
            <Card className="mb-8 glass-card border-blue-200/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-600">Oferta Limitada</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>20% de desconto</strong> para os próximos 10 clientes que iniciarem projeto este mês. Restam apenas <strong>3 vagas</strong>!
                </p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="text-center p-4 glass-card">
                <CardContent className="p-0">
                  <Mail className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="font-semibold text-sm">E-mail</div>
                  <a 
                    href="mailto:contato@jeanautomationpro.com.br"
                    className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    contato@jeanautomationpro.com.br
                  </a>
                  <div className="text-xs text-muted-foreground">Resposta em até 48 hrs</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 glass-card">
                <CardContent className="p-0">
                  <MessageCircle className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="font-semibold text-sm">WhatsApp</div>
                  <a 
                    href="https://wa.me/5551992656309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-green-600 transition-colors inline-flex items-center gap-1"
                  >
                    (51) 99265-6309
                    <span className="text-xs">📱</span>
                  </a>
                  <div className="text-xs text-muted-foreground">Atendimento instantâneo</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 glass-card">
                <CardContent className="p-0">
                  <Instagram className="w-8 h-8 mx-auto mb-2 text-pink-600" />
                  <div className="font-semibold text-sm">Instagram</div>
                  <a 
                    href="https://www.instagram.com/jeanautomationpro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-pink-600 transition-colors inline-flex items-center gap-1"
                  >
                    @jeanautomationpro
                    <span className="text-xs">📷</span>
                  </a>
                  <div className="text-xs text-muted-foreground">Conteúdo e cases</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {isSuccess ? "✅ Mensagem Enviada!" : "Solicitar Análise Gratuita"}
                </CardTitle>
                {!isSuccess && (
                  <p className="text-center text-muted-foreground">
                    Preencha os dados e entraremos em contato em até 24h
                  </p>
                )}
              </CardHeader>
              
              <CardContent>
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Obrigado pelo contato!</h3>
                    <p className="text-muted-foreground mb-6">
                      Recebemos sua mensagem e entraremos em contato em até 24 horas úteis.
                    </p>
                    <Button 
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                    >
                      Enviar Nova Mensagem
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome Completo *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Seu nome completo"
                                {...field}
                                className="rounded-xl bg-background/50 backdrop-blur"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-mail *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="seu@email.com"
                                  {...field}
                                  className="rounded-xl bg-background/50 backdrop-blur"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>WhatsApp *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="(11) 99999-9999"
                                  {...field}
                                  className="rounded-xl bg-background/50 backdrop-blur"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="servicesInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Serviços de Interesse *</FormLabel>
                            <FormControl>
                              <div className="space-y-3">
                                {[
                                  { value: "ai-chatbot", label: "Atendimento Humanizado com IA" },
                                  { value: "landing-page", label: "Landing Page de Alta Conversão" },
                                  { value: "saas", label: "Produto SaaS Personalizado" },
                                  { value: "consultoria", label: "Consultoria Digital" }
                                ].map((service) => (
                                  <div key={service.value} className="flex items-center space-x-2">
                                    <input
                                      type="checkbox"
                                      id={service.value}
                                      checked={field.value.includes(service.value)}
                                      onChange={(e) => {
                                        const currentValues = field.value || [];
                                        if (e.target.checked) {
                                          field.onChange([...currentValues, service.value as any]);
                                        } else {
                                          field.onChange(currentValues.filter((v) => v !== service.value));
                                        }
                                      }}
                                      className="rounded"
                                    />
                                    <label htmlFor={service.value} className="text-sm">
                                      {service.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Descrição do Projeto</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Conte-nos mais sobre seu projeto e objetivos..."
                                className="rounded-xl resize-none bg-background/50 backdrop-blur"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full btn-primary py-6 text-lg font-bold rounded-xl"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? (
                          <>⏳ Enviando...</>
                        ) : (
                          <>🚀 Solicitar Análise Gratuita</>
                        )}
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        Seus dados estão protegidos. Não compartilhamos informações com terceiros.
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}