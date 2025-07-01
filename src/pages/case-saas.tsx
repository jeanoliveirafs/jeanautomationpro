import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, DollarSign, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function CaseSaas() {
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
              <Badge className="mb-4">Plataforma SaaS</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                SaaS de <span className="gradient-text">Gestão</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Plataforma personalizada que automatizou processos empresariais e criou uma nova fonte de receita recorrente para o cliente.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">+540% ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold">R$ 890K ARR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="font-semibold">2.500 Usuários</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Dashboard de software SaaS com interface moderna e dados analíticos"
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
                <CardTitle className="text-4xl text-green-600">+540%</CardTitle>
                <CardDescription>ROI</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Retorno sobre investimento</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-blue-600">R$ 890K</CardTitle>
                <CardDescription>ARR Alcançado</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Receita anual recorrente</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-purple-600">2.500</CardTitle>
                <CardDescription>Usuários Ativos</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Mensalmente</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-orange-600">15</CardTitle>
                <CardDescription>Integrações</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Sistemas conectados</p>
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
                A empresa precisava de uma solução para automatizar seus processos internos de gestão, mas as ferramentas disponíveis no mercado não atendiam suas necessidades específicas. Além disso, queriam criar uma nova fonte de receita.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Processos manuais e ineficientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Falta de integração entre sistemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dados dispersos em planilhas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Necessidade de nova fonte de receita</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">A Plataforma SaaS</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Desenvolvemos uma plataforma SaaS completa e personalizada que automatizou todos os processos da empresa e se tornou um produto vendível para outros clientes do mesmo segmento.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automação completa de processos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dashboard com métricas em tempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrações com APIs externas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Modelo de receita recorrente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades da Plataforma</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Analytics Avançado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dashboards interativos com métricas em tempo real, relatórios personalizados e insights acionáveis.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Gestão de Usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistema completo de roles e permissões, onboarding automatizado e gestão de acessos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle>Faturamento Automático</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistema de cobrança recorrente integrado com gateways de pagamento e gestão de planos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Crescimento da Plataforma</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-px h-16 bg-border"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mês 1-3: MVP e Validação</h3>
                <p className="text-muted-foreground">Desenvolvimento do MVP, testes internos e primeiras validações com 50 usuários beta.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-px h-16 bg-border"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mês 4-6: Scale e Crescimento</h3>
                <p className="text-muted-foreground">Lançamento comercial, 500 usuários pagantes, R$ 150K MRR alcançado.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mês 7+: Expansão e Otimização</h3>
                <p className="text-muted-foreground">2.500 usuários ativos, R$ 890K ARR, expansão para novos mercados e funcionalidades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Stack Tecnológico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">React</span>
              </div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">Node</span>
              </div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-sm text-muted-foreground">Node.js, Express, TypeScript</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">DB</span>
              </div>
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-sm text-muted-foreground">PostgreSQL, Redis, MongoDB</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">AWS</span>
              </div>
              <h3 className="font-semibold mb-2">Cloud</h3>
              <p className="text-sm text-muted-foreground">AWS, Docker, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Quer desenvolver sua própria plataforma SaaS?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Criamos soluções SaaS escaláveis que geram receita recorrente e automatizam seus processos.
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