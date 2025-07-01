import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertFreeAnalysisSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Teste de conexão com Supabase
  app.get("/api/test-supabase", async (req, res) => {
    try {
      const supabaseUrl = process.env.SUPABASE_URL || 'https://dtcxamijbjwmzxhsdure.supabase.co';
      const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y3hhbWlqYmp3bXp4aHNkdXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjIxNzUsImV4cCI6MjA2Njg5ODE3NX0.VcmdWARRkBBv5zg2QaWKOwfkFNKNfYCvGNUoEglSqGs';
      
      console.log("🧪 Testando conexão com Supabase...");
      
      const response = await fetch(`${supabaseUrl}/rest/v1/free_analysis_requests?select=id&limit=1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });
      
      console.log("🧪 Status da resposta:", response.status);
      const data = await response.text();
      console.log("🧪 Resposta:", data);
      
      res.json({
        success: response.ok,
        status: response.status,
        data: data
      });
    } catch (error) {
      console.error("🧪 Erro no teste:", error);
      res.status(500).json({ success: false, error: String(error) });
    }
  });

  // Free Analysis Request endpoint (saves to Supabase)
  app.post("/api/free-analysis", async (req, res) => {
    try {
      console.log("📥 Dados recebidos:", JSON.stringify(req.body, null, 2));
      
      const analysisData = insertFreeAnalysisSchema.parse(req.body);
      console.log("✅ Dados validados:", JSON.stringify(analysisData, null, 2));
      
      // Configurações do Supabase
      const supabaseUrl = process.env.SUPABASE_URL || 'https://dtcxamijbjwmzxhsdure.supabase.co';
      const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y3hhbWlqYmp3bXp4aHNkdXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjIxNzUsImV4cCI6MjA2Njg5ODE3NX0.VcmdWARRkBBv5zg2QaWKOwfkFNKNfYCvGNUoEglSqGs';
      
      console.log("🔗 Conectando ao Supabase:", supabaseUrl);
      
      // Preparar dados para inserção no Supabase
      const insertData = {
        ...analysisData,
        // Converter arrays para formato do PostgreSQL
        services_interest: analysisData.servicesInterest,
        current_marketing_channels: analysisData.currentMarketingChannels || [],
        // Mapear campos com nomes diferentes
        company_name: analysisData.companyName,
        company_website: analysisData.companyWebsite,
        company_size: analysisData.companySize,
        current_monthly_revenue: analysisData.currentMonthlyRevenue,
        main_challenge: analysisData.mainChallenge,
        has_website: analysisData.hasWebsite === 'yes' ? true : analysisData.hasWebsite === 'no' ? false : null,
        website_converts_well: analysisData.websiteConvertsWell === 'yes' ? true : analysisData.websiteConvertsWell === 'no' ? false : null,
        priority_service: analysisData.priorityService,
        main_goal: analysisData.mainGoal,
        expected_timeline: analysisData.expectedTimeline,
        budget_range: analysisData.budgetRange,
        how_found_us: analysisData.howFoundUs,
        previous_digital_experience: analysisData.previousDigitalExperience,
        specific_requirements: analysisData.specificRequirements,
        utm_source: analysisData.utmSource,
        utm_medium: analysisData.utmMedium,
        utm_campaign: analysisData.utmCampaign,
        // Remover campos que não existem na tabela ou são auto-gerados
        servicesInterest: undefined,
        companyName: undefined,
        companyWebsite: undefined,
        companySize: undefined,
        currentMonthlyRevenue: undefined,
        mainChallenge: undefined,
        currentMarketingChannels: undefined,
        hasWebsite: undefined,
        websiteConvertsWell: undefined,
        priorityService: undefined,
        mainGoal: undefined,
        expectedTimeline: undefined,
        budgetRange: undefined,
        howFoundUs: undefined,
        previousDigitalExperience: undefined,
        specificRequirements: undefined,
        utmSource: undefined,
        utmMedium: undefined,
        utmCampaign: undefined,
      };
      
      console.log("📤 Dados para Supabase:", JSON.stringify(insertData, null, 2));
      
      // Fazer requisição para o Supabase REST API
      const response = await fetch(`${supabaseUrl}/rest/v1/free_analysis_requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(insertData)
      });
      
      console.log("📡 Status da resposta Supabase:", response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ Erro Supabase:', errorData);
        throw new Error(`Erro ao salvar no Supabase: ${response.status} - ${errorData}`);
      }
      
      console.log("✅ Sucesso! Dados salvos no Supabase");
      
      res.status(201).json({ 
        success: true, 
        message: "Análise gratuita solicitada com sucesso! Entraremos em contato em até 24 horas." 
      });
    } catch (error) {
      console.error("💥 Erro no endpoint /api/free-analysis:", error);
      
      if (error instanceof z.ZodError) {
        console.error("❌ Erro de validação Zod:", error.errors);
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos",
          errors: error.errors 
        });
      } else {
        console.error("❌ Erro interno:", error);
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor. Tente novamente." 
        });
      }
    }
  });

  // Contact form submission endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contato enviado com sucesso! Entraremos em contato em até 24 horas.",
        contact: { id: contact.id, createdAt: contact.createdAt }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos",
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor. Tente novamente." 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar contatos" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
