// import { createClient } from '@supabase/supabase-js'

// Configuração do Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || 'https://dtcxamijbjwmzxhsdure.supabase.co'
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y3hhbWlqYmp3bXp4aHNkdXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjIxNzUsImV4cCI6MjA2Njg5ODE3NX0.VcmdWARRkBBv5zg2QaWKOwfkFNKNfYCvGNUoEglSqGs'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL e Anon Key são obrigatórias. Configure as variáveis de ambiente.')
}

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para as tabelas do Supabase
export interface Database {
  public: {
    Tables: {
      free_analysis_requests: {
        Row: {
          id: number
          name: string
          email: string
          phone: string
          company_name: string | null
          company_website: string | null
          company_size: string | null
          industry: string | null
          current_monthly_revenue: string | null
          main_challenge: string | null
          current_marketing_channels: string[] | null
          has_website: boolean | null
          website_converts_well: boolean | null
          services_interest: string[]
          priority_service: string | null
          main_goal: string | null
          expected_timeline: string | null
          budget_range: string | null
          how_found_us: string | null
          previous_digital_experience: string | null
          specific_requirements: string | null
          message: string | null
          status: string
          priority: string
          source: string
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
          updated_at: string
          contacted_at: string | null
          proposal_sent_at: string | null
        }
        Insert: {
          name: string
          email: string
          phone: string
          company_name?: string | null
          company_website?: string | null
          company_size?: string | null
          industry?: string | null
          current_monthly_revenue?: string | null
          main_challenge?: string | null
          current_marketing_channels?: string[] | null
          has_website?: boolean | null
          website_converts_well?: boolean | null
          services_interest: string[]
          priority_service?: string | null
          main_goal?: string | null
          expected_timeline?: string | null
          budget_range?: string | null
          how_found_us?: string | null
          previous_digital_experience?: string | null
          specific_requirements?: string | null
          message?: string | null
          status?: string
          priority?: string
          source?: string
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          ip_address?: string | null
          user_agent?: string | null
        }
        Update: {
          name?: string
          email?: string
          phone?: string
          company_name?: string | null
          company_website?: string | null
          company_size?: string | null
          industry?: string | null
          current_monthly_revenue?: string | null
          main_challenge?: string | null
          current_marketing_channels?: string[] | null
          has_website?: boolean | null
          website_converts_well?: boolean | null
          services_interest?: string[]
          priority_service?: string | null
          main_goal?: string | null
          expected_timeline?: string | null
          budget_range?: string | null
          how_found_us?: string | null
          previous_digital_experience?: string | null
          specific_requirements?: string | null
          message?: string | null
          status?: string
          priority?: string
          source?: string
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          ip_address?: string | null
          user_agent?: string | null
          contacted_at?: string | null
          proposal_sent_at?: string | null
        }
      }
      lead_followups: {
        Row: {
          id: number
          lead_id: number
          type: string
          status: string
          notes: string | null
          scheduled_for: string | null
          completed_at: string | null
          created_by: string | null
          created_at: string
        }
        Insert: {
          lead_id: number
          type: string
          status: string
          notes?: string | null
          scheduled_for?: string | null
          completed_at?: string | null
          created_by?: string | null
        }
        Update: {
          lead_id?: number
          type?: string
          status?: string
          notes?: string | null
          scheduled_for?: string | null
          completed_at?: string | null
          created_by?: string | null
        }
      }
      lead_notes: {
        Row: {
          id: number
          lead_id: number
          note: string
          created_by: string | null
          created_at: string
        }
        Insert: {
          lead_id: number
          note: string
          created_by?: string | null
        }
        Update: {
          lead_id?: number
          note?: string
          created_by?: string | null
        }
      }
    }
  }
}

export type FreeAnalysisRequest = Database['public']['Tables']['free_analysis_requests']['Row']
export type InsertFreeAnalysisRequest = Database['public']['Tables']['free_analysis_requests']['Insert']
export type UpdateFreeAnalysisRequest = Database['public']['Tables']['free_analysis_requests']['Update'] 