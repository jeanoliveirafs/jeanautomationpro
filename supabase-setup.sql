-- SQL para configurar tabelas no Supabase SQL Editor
-- Execute este código no SQL Editor do seu projeto Supabase

-- Tabela para usuários (caso precise de autenticação)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela principal para análises gratuitas
CREATE TABLE IF NOT EXISTS free_analysis_requests (
  id SERIAL PRIMARY KEY,
  
  -- Dados pessoais
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  
  -- Dados da empresa
  company_name TEXT,
  company_website TEXT,
  company_size TEXT CHECK (company_size IN ('1-10', '11-50', '51-200', '201-500', '500+')),
  industry TEXT,
  
  -- Situação atual do negócio
  current_monthly_revenue TEXT CHECK (current_monthly_revenue IN ('0-5k', '5k-20k', '20k-50k', '50k-100k', '100k+')),
  main_challenge TEXT,
  current_marketing_channels TEXT[],
  has_website BOOLEAN DEFAULT false,
  website_converts_well BOOLEAN,
  
  -- Serviços de interesse
  services_interest TEXT[] NOT NULL,
  priority_service TEXT CHECK (priority_service IN ('ai-chatbot', 'landing-page', 'saas', 'consultoria', 'all')),
  
  -- Objetivos e expectativas
  main_goal TEXT,
  expected_timeline TEXT CHECK (expected_timeline IN ('immediate', '1-month', '2-3-months', '3-6-months', '6+ months')),
  budget_range TEXT CHECK (budget_range IN ('5k-15k', '15k-30k', '30k-50k', '50k-100k', '100k+')),
  
  -- Informações adicionais
  how_found_us TEXT,
  previous_digital_experience TEXT,
  specific_requirements TEXT,
  message TEXT,
  
  -- Status do lead
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal-sent', 'won', 'lost')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  
  -- Metadados
  source TEXT DEFAULT 'landing-page',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_address INET,
  user_agent TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  contacted_at TIMESTAMP WITH TIME ZONE,
  proposal_sent_at TIMESTAMP WITH TIME ZONE
);

-- Tabela para acompanhamento de follow-ups
CREATE TABLE IF NOT EXISTS lead_followups (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES free_analysis_requests(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('email', 'phone', 'whatsapp', 'meeting', 'proposal')),
  status TEXT NOT NULL CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no-response')),
  notes TEXT,
  scheduled_for TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para notas e observações dos leads
CREATE TABLE IF NOT EXISTS lead_notes (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES free_analysis_requests(id) ON DELETE CASCADE,
  note TEXT NOT NULL,
  created_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_free_analysis_email ON free_analysis_requests(email);
CREATE INDEX IF NOT EXISTS idx_free_analysis_status ON free_analysis_requests(status);
CREATE INDEX IF NOT EXISTS idx_free_analysis_created_at ON free_analysis_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_free_analysis_priority ON free_analysis_requests(priority);
CREATE INDEX IF NOT EXISTS idx_lead_followups_lead_id ON lead_followups(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_notes_lead_id ON lead_notes(lead_id);

-- Function para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
CREATE TRIGGER update_free_analysis_updated_at
  BEFORE UPDATE ON free_analysis_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) - opcional, para segurança
ALTER TABLE free_analysis_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_followups ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;

-- Políticas básicas (ajuste conforme necessário)
CREATE POLICY "Allow all operations for authenticated users" ON free_analysis_requests
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users" ON lead_followups
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users" ON lead_notes
  FOR ALL USING (auth.role() = 'authenticated');

-- Para permitir inserção pública (formulário do site)
CREATE POLICY "Allow public insert" ON free_analysis_requests
  FOR INSERT WITH CHECK (true);

-- Comentários para documentação
COMMENT ON TABLE free_analysis_requests IS 'Tabela principal para armazenar solicitações de análise gratuita';
COMMENT ON COLUMN free_analysis_requests.services_interest IS 'Array de serviços de interesse: ai-chatbot, landing-page, saas, consultoria';
COMMENT ON COLUMN free_analysis_requests.current_marketing_channels IS 'Array de canais de marketing atuais: google-ads, facebook-ads, seo, email, etc'; 