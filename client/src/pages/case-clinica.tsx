import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bot, Clock, Star, TrendingDown } from "lucide-react";
import { Link } from "wouter";

export default function CaseClinica() {
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
              <Badge className="mb-4">Inteligência Artificial</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Clínica <span className="gradient-text">Médica</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Chatbot com IA que revolucionou o atendimento médico, reduzindo custos operacionais e melhorando a experiência do paciente.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">-72% Custo Atendimento</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold">4.9⭐ Satisfação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold">24/7 Disponível</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Interface de chatbot médico com IA para atendimento ao paciente"
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
                <CardTitle className="text-4xl text-green-600">-72%</CardTitle>
                <CardDescription>Redução de Custos</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">No atendimento</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-yellow-600">4.9⭐</CardTitle>
                <CardDescription>Satisfação</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Avaliação dos pacientes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-blue-600">24/7</CardTitle>
                <CardDescription>Disponibilidade</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Sem interrupções</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl text-purple-600">85%</CardTitle>
                <CardDescription>Resolução Automática</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Sem intervenção humana</p>
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
              <h2 className="text-3xl font-bold mb-6">A Situação</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A clínica médica enfrentava altos custos operacionais com atendimento telefônico, longas filas de espera e baixa satisfação dos pacientes. A equipe estava sobrecarregada com consultas repetitivas e agendamentos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Alto custo com atendimento telefônico</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Longas filas de espera para agendamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Equipe sobrecarregada com tarefas repetitivas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Baixa satisfação dos pacientes</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">A Solução IA</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Desenvolvemos um chatbot inteligente capaz de realizar agendamentos, esclarecer dúvidas médicas básicas, enviar lembretes e fornecer informações sobre procedimentos, funcionando 24/7 com alta precisão.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Agendamento automático 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Respostas instantâneas para dúvidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lembretes automáticos de consultas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integração com sistema de gestão</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades do Chatbot</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Bot className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Agendamento Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Agenda consultas automaticamente verificando disponibilidade em tempo real e enviando confirmações.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-green-500 mb-2" />
                <CardTitle>Lembretes Automáticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Envia lembretes de consultas, exames e medicamentos via WhatsApp, SMS e email.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Star className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle>Atendimento Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reconhece pacientes e fornece informações personalizadas baseadas no histórico médico.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Evolução dos Resultados</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-px h-16 bg-border"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mês 1: Implementação e Treinamento</h3>
                <p className="text-muted-foreground">Setup inicial do chatbot, treinamento da IA com dados da clínica e testes beta.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-px h-16 bg-border"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mês 2: Launch e Primeiros Resultados</h3>
                <p className="text-muted-foreground">-45% redução de custos, 90% de satisfação dos pacientes, 60% das consultas automatizadas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mês 3+: Otimização Contínua</h3>
                <p className="text-muted-foreground">-72% redução final de custos, 4.9⭐ satisfação, 85% de resolução automática.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Quer um chatbot inteligente para seu negócio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Desenvolvemos soluções de IA personalizadas que reduzem custos e melhoram a experiência do cliente.
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