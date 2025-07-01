import { insertFreeAnalysisSchema } from '../shared/schema';
import { z } from 'zod';

interface VercelRequest {
  method?: string;
  url?: string;
  body: any;
}

interface VercelResponse {
  setHeader: (key: string, value: string) => void;
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
  end: () => void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS para produção
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url } = req;
  
  // Rota de teste do Supabase
  if (url === '/api/test-supabase' && req.method === 'GET') {
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
      
      return res.json({
        success: response.ok,
        status: response.status,
        data: data
      });
    } catch (error) {
      console.error("🧪 Erro no teste:", error);
      return res.status(500).json({ success: false, error: String(error) });
    }
  }

  // Rota de análise gratuita
  if (url === '/api/free-analysis' && req.method === 'POST') {
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
        services_interest: analysisData.servicesInterest,
        current_marketing_channels: analysisData.currentMarketingChannels || [],
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
        // Remover campos duplicados
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
      
      return res.status(201).json({ 
        success: true, 
        message: "Análise gratuita solicitada com sucesso! Entraremos em contato em até 24 horas." 
      });
    } catch (error) {
      console.error("💥 Erro no endpoint /api/free-analysis:", error);
      
      if (error instanceof z.ZodError) {
        console.error("❌ Erro de validação Zod:", error.errors);
        return res.status(400).json({ 
          success: false, 
          message: "Dados inválidos",
          errors: error.errors 
        });
      } else {
        console.error("❌ Erro interno:", error);
        return res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor. Tente novamente." 
        });
      }
    }
  }

  // Rota não encontrada
  return res.status(404).json({ message: 'API route not found' });
} 