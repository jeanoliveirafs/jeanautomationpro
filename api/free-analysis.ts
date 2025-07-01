import { z } from 'zod';

// Schema inline para evitar problemas de import
const insertFreeAnalysisSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  servicesInterest: z.array(z.string()).min(1, "Selecione pelo menos um serviço"),
  companyName: z.string().optional(),
  companyWebsite: z.string().optional(),
  companySize: z.string().optional(),
  currentMonthlyRevenue: z.string().optional(),
  mainChallenge: z.string().optional(),
  currentMarketingChannels: z.array(z.string()).optional(),
  hasWebsite: z.string().optional(),
  websiteConvertsWell: z.string().optional(),
  priorityService: z.string().optional(),
  mainGoal: z.string().optional(),
  expectedTimeline: z.string().optional(),
  budgetRange: z.string().optional(),
  howFoundUs: z.string().optional(),
  previousDigitalExperience: z.string().optional(),
  specificRequirements: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export default async function handler(req: any, res: any) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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