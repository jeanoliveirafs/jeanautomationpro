import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, TrendingUp, Users, Calendar, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function CaseEcommerce() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Portfólio
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Landing Page de Vendas</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Landing Page de <span className="gradient-text">Alta Conversão</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Landing page estratégica que revolucionou as vendas online com técnicas avançadas de conversão e copywriting persuasivo.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">+387% Conversão</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold">R$ 2.4M Receita</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span className="font-semibold">45 dias</span>
                </div>
              </div>
            </div>
                          <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Gráficos de conversão e analytics de landing page de alta performance"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-green-600">+387%</CardTitle>
                <CardDescription>Taxa de Conversão</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">De 2.1% para 8.2%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-blue-600">R$ 2.4M</CardTitle>
                <CardDescription>Receita Adicional</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Em 30 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-purple-600">30</CardTitle>
                <CardDescription>Dias para Resultado</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Resultados rápidos</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-orange-600">8.2%</CardTitle>
                <CardDescription>Taxa de Conversão Final</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">De 2.1% para 8.2%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">O Problema</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A empresa tinha um produto excelente, mas suas páginas de vendas não convertiam. Com apenas 2.1% de conversão, perdiam milhares de clientes potenciais diariamente. Era necessário uma abordagem estratégica focada em persuasão e experiência do usuário.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Taxa de conversão muito baixa (2.1%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Copy sem persuasão e urgência</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Falta de prova social e depoimentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Funil de vendas confuso</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">A Landing Page Estratégica</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Criamos uma landing page de alta conversão usando princípios de neuromarketing, copywriting persuasivo e design orientado por dados. Cada elemento foi estrategicamente posicionado para maximizar as vendas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Headline irresistível com benefício claro</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Copy persuasiva com gatilhos mentais</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prova social e depoimentos reais</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Funil otimizado com CTA estratégicos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Estratégias de Conversão Aplicadas</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-px h-16 bg-border"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">1. Copywriting Persuasivo</h3>
                <p className="text-muted-foreground">Headlines poderosas, gatilhos mentais de escassez e urgência, benefícios claros focados no cliente.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-px h-16 bg-border"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Prova Social Estratégica</h3>
                <p className="text-muted-foreground">Depoimentos reais de clientes, cases de sucesso, números de vendas e avaliações autênticas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-px h-16 bg-border"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Design Orientado por Dados</h3>
                <p className="text-muted-foreground">Layout otimizado para mobile, CTAs destacados, cores psicológicas e fluxo visual direcionado.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">4. Otimização Contínua</h3>
                <p className="text-muted-foreground">A/B testing em headlines, botões e ofertas. Monitoramento e ajustes baseados em dados reais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Quer uma landing page que realmente converte?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Criamos landing pages de alta conversão que transformam visitantes em clientes pagantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contato">
              <Button size="lg">
                Solicitar Análise Gratuita
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                Ver Mais Cases
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 