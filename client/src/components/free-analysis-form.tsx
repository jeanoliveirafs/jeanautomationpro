import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Check, ArrowRight, Building, Target, DollarSign, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { insertFreeAnalysisSchema, type InsertFreeAnalysisRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function FreeAnalysisForm() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const form = useForm<InsertFreeAnalysisRequest>({
    resolver: zodResolver(insertFreeAnalysisSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      companyWebsite: "",
      servicesInterest: [],
      source: "landing-page",
      status: "new",
      priority: "medium",
    },
  });

  const analysisMutation = useMutation({
    mutationFn: async (data: InsertFreeAnalysisRequest) => {
      // Capturar dados UTM da URL se disponíveis
      const urlParams = new URLSearchParams(window.location.search);
      const enrichedData = {
        ...data,
        utmSource: urlParams.get('utm_source') || undefined,
        utmMedium: urlParams.get('utm_medium') || undefined,
        utmCampaign: urlParams.get('utm_campaign') || undefined,
      };

      const response = await apiRequest("POST", "/api/free-analysis", enrichedData);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "✅ Análise gratuita solicitada com sucesso!",
        description: "Entraremos em contato em até 24 horas com sua análise personalizada.",
      });
      
      setTimeout(() => setIsSuccess(false), 10000);
    },
    onError: (error) => {
      console.error("Free analysis form error:", error);
      toast({
        title: "❌ Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertFreeAnalysisRequest) => {
    analysisMutation.mutate(data);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const servicesOptions = [
    { value: "ai-chatbot", label: "Atendimento com IA", icon: "🤖" },
    { value: "landing-page", label: "Landing Pages", icon: "🚀" },
    { value: "saas", label: "Produtos SaaS", icon: "💻" },
    { value: "consultoria", label: "Consultoria Digital", icon: "📊" },
  ];

  if (isSuccess) {
    return (
      <Card className="glass-card shadow-2xl border-0">
        <CardContent className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-green-600" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4">Análise Solicitada com Sucesso!</h3>
          <p className="text-muted-foreground mb-6">
            Recebemos sua solicitação e nossa equipe já está preparando uma análise personalizada do seu negócio.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-sm">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>Análise em até 24 horas</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm">
              <Target className="w-5 h-5 text-green-600" />
              <span>Proposta personalizada incluída</span>
            </div>
          </div>
          <Button onClick={() => setIsSuccess(false)} variant="outline">
            Solicitar Nova Análise
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card shadow-2xl border-0">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Solicitar Análise Gratuita
        </CardTitle>
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Etapa 1: Dados Pessoais */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4">📋 Seus Dados</h3>
                
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
                        <FormLabel>Email *</FormLabel>
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

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da Empresa</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Sua empresa"
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
                    name="companyWebsite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Site da Empresa</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://seusite.com"
                            {...field}
                            className="rounded-xl bg-background/50 backdrop-blur"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button type="button" onClick={nextStep} className="w-full">
                  Próximo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {/* Etapa 2: Empresa e Situação Atual */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4">🏢 Sobre sua Empresa</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tamanho da Empresa</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl bg-background/50 backdrop-blur">
                              <SelectValue placeholder="Selecione o tamanho" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 funcionários</SelectItem>
                            <SelectItem value="11-50">11-50 funcionários</SelectItem>
                            <SelectItem value="51-200">51-200 funcionários</SelectItem>
                            <SelectItem value="201-500">201-500 funcionários</SelectItem>
                            <SelectItem value="500+">500+ funcionários</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentMonthlyRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Faturamento Mensal</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl bg-background/50 backdrop-blur">
                              <SelectValue placeholder="Selecione a faixa" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-5k">Até R$ 5mil</SelectItem>
                            <SelectItem value="5k-20k">R$ 5mil - R$ 20mil</SelectItem>
                            <SelectItem value="20k-50k">R$ 20mil - R$ 50mil</SelectItem>
                            <SelectItem value="50k-100k">R$ 50mil - R$ 100mil</SelectItem>
                            <SelectItem value="100k+">Acima de R$ 100mil</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Segmento/Nicho</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ex: E-commerce, Consultoria, SaaS, Educação..."
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
                  name="mainChallenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Principal Desafio Atual</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Qual é o maior desafio que está enfrentando para crescer?"
                          {...field}
                          className="rounded-xl bg-background/50 backdrop-blur min-h-[80px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex space-x-4">
                  <Button type="button" onClick={prevStep} variant="outline" className="flex-1">
                    Voltar
                  </Button>
                  <Button type="button" onClick={nextStep} className="flex-1">
                    Próximo <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Etapa 3: Serviços e Objetivos */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4">🎯 Seus Objetivos</h3>
                
                <FormField
                  control={form.control}
                  name="servicesInterest"
                  render={() => (
                    <FormItem>
                      <FormLabel>Serviços de Interesse *</FormLabel>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {servicesOptions.map((service) => (
                          <FormField
                            key={service.value}
                            control={form.control}
                            name="servicesInterest"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={service.value}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(service.value as any)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, service.value])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== service.value
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {service.icon} {service.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="expectedTimeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prazo Desejado</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl bg-background/50 backdrop-blur">
                              <SelectValue placeholder="Quando quer começar?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="immediate">Imediatamente</SelectItem>
                            <SelectItem value="1-month">Em até 1 mês</SelectItem>
                            <SelectItem value="2-3-months">2-3 meses</SelectItem>
                            <SelectItem value="3-6-months">3-6 meses</SelectItem>
                            <SelectItem value="6-months+">Mais de 6 meses</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budgetRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Orçamento Disponível</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl bg-background/50 backdrop-blur">
                              <SelectValue placeholder="Faixa de investimento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="5k-15k">R$ 5mil - R$ 15mil</SelectItem>
                            <SelectItem value="15k-30k">R$ 15mil - R$ 30mil</SelectItem>
                            <SelectItem value="30k-50k">R$ 30mil - R$ 50mil</SelectItem>
                            <SelectItem value="50k-100k">R$ 50mil - R$ 100mil</SelectItem>
                            <SelectItem value="100k+">Acima de R$ 100mil</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="mainGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Principal Objetivo</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="O que espera alcançar com nossos serviços?"
                          {...field}
                          className="rounded-xl bg-background/50 backdrop-blur min-h-[80px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex space-x-4">
                  <Button type="button" onClick={prevStep} variant="outline" className="flex-1">
                    Voltar
                  </Button>
                  <Button type="button" onClick={nextStep} className="flex-1">
                    Próximo <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Etapa 4: Informações Finais */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4">🔍 Últimas Informações</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="hasWebsite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Possui Website?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl bg-background/50 backdrop-blur">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Sim</SelectItem>
                            <SelectItem value="no">Não</SelectItem>
                            <SelectItem value="building">Estou criando</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="howFoundUs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Como nos encontrou?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl bg-background/50 backdrop-blur">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="google">Google</SelectItem>
                            <SelectItem value="facebook">Facebook</SelectItem>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="referral">Indicação</SelectItem>
                            <SelectItem value="other">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specificRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requisitos Específicos</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Algum requisito específico ou informação adicional que gostaria de compartilhar?"
                          {...field}
                          className="rounded-xl bg-background/50 backdrop-blur min-h-[80px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex space-x-4">
                  <Button type="button" onClick={prevStep} variant="outline" className="flex-1">
                    Voltar
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 btn-primary"
                    disabled={analysisMutation.isPending}
                  >
                    {analysisMutation.isPending ? "Enviando..." : "🚀 Solicitar Análise Gratuita"}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
} 