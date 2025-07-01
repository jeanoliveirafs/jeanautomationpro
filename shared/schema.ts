import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Nova tabela para análises gratuitas mais completas
export const freeAnalysisRequests = pgTable("free_analysis_requests", {
  id: serial("id").primaryKey(),
  
  // Dados pessoais
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  
  // Dados da empresa
  companyName: text("company_name"),
  companyWebsite: text("company_website"),
  companySize: text("company_size"), // '1-10', '11-50', '51-200', '201-500', '500+'
  industry: text("industry"),
  
  // Situação atual do negócio
  currentMonthlyRevenue: text("current_monthly_revenue"), // '0-5k', '5k-20k', etc
  mainChallenge: text("main_challenge"),
  currentMarketingChannels: text("current_marketing_channels").array(),
  hasWebsite: text("has_website"), // 'yes', 'no', 'building'
  websiteConvertsWell: text("website_converts_well"), // 'yes', 'no', 'unsure'
  
  // Serviços de interesse
  servicesInterest: text("services_interest").array().notNull(),
  priorityService: text("priority_service"), // ai-chatbot, landing-page, saas, consultoria, all
  
  // Objetivos e expectativas
  mainGoal: text("main_goal"),
  expectedTimeline: text("expected_timeline"), // immediate, 1-month, 2-3-months, etc
  budgetRange: text("budget_range"), // 5k-15k, 15k-30k, etc
  
  // Informações adicionais
  howFoundUs: text("how_found_us"),
  previousDigitalExperience: text("previous_digital_experience"),
  specificRequirements: text("specific_requirements"),
  message: text("message"),
  
  // Status do lead
  status: text("status").default("new"), // new, contacted, qualified, proposal-sent, won, lost
  priority: text("priority").default("medium"), // low, medium, high, urgent
  
  // Metadados
  source: text("source").default("landing-page"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  
  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  contactedAt: timestamp("contacted_at"),
  proposalSentAt: timestamp("proposal_sent_at"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  service: z.enum(["ai-chatbot", "landing-page", "saas", "all"], {
    required_error: "Selecione um serviço"
  }),
  message: z.string().optional(),
});

// Schema para análise gratuita mais completa
export const insertFreeAnalysisSchema = createInsertSchema(freeAnalysisRequests).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  contactedAt: true,
  proposalSentAt: true,
}).extend({
  // Campos obrigatórios
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  servicesInterest: z.array(z.enum(["ai-chatbot", "landing-page", "saas", "consultoria"])).min(1, "Selecione pelo menos um serviço"),
  
  // Dados da empresa (opcionais mas recomendados)
  companyName: z.string().optional(),
  companyWebsite: z.string().url("URL inválida").optional().or(z.literal("")),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]).optional(),
  industry: z.string().optional(),
  
  // Situação do negócio
  currentMonthlyRevenue: z.enum(["0-5k", "5k-20k", "20k-50k", "50k-100k", "100k+"]).optional(),
  mainChallenge: z.string().optional(),
  currentMarketingChannels: z.array(z.string()).optional(),
  hasWebsite: z.enum(["yes", "no", "building"]).optional(),
  websiteConvertsWell: z.enum(["yes", "no", "unsure"]).optional(),
  
  // Serviços e objetivos
  priorityService: z.enum(["ai-chatbot", "landing-page", "saas", "consultoria", "all"]).optional(),
  mainGoal: z.string().optional(),
  expectedTimeline: z.enum(["immediate", "1-month", "2-3-months", "3-6-months", "6-months+"]).optional(),
  budgetRange: z.enum(["5k-15k", "15k-30k", "30k-50k", "50k-100k", "100k+"]).optional(),
  
  // Informações adicionais
  howFoundUs: z.enum(["google", "facebook", "instagram", "linkedin", "referral", "other"]).optional(),
  previousDigitalExperience: z.enum(["none", "basic", "intermediate", "advanced"]).optional(),
  specificRequirements: z.string().optional(),
  message: z.string().optional(),
  
  // Metadados (opcionais, preenchidos automaticamente)
  source: z.string().default("landing-page"),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  status: z.string().default("new"),
  priority: z.string().default("medium"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertFreeAnalysisRequest = z.infer<typeof insertFreeAnalysisSchema>;
export type FreeAnalysisRequest = typeof freeAnalysisRequests.$inferSelect;
