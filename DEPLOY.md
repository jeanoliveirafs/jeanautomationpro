# 🚀 Deploy no Vercel - Guia Completo

Este guia mostra como fazer deploy da landing page **jeanautomationpro** no Vercel.

## 📋 Pré-requisitos

1. ✅ Conta no GitHub
2. ✅ Conta no Vercel (conectada ao GitHub)
3. ✅ Credenciais do Supabase

## 🔧 Passos para Deploy

### 1. Preparar o Repositório Git

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "🎉 Landing page jeanautomationpro pronta para deploy"

# Conectar ao repositório remoto (substitua pela sua URL)
git remote add origin https://github.com/SEU_USUARIO/jeanautomationpro.git

# Push para o GitHub
git push -u origin main
```

### 2. Configurar no Vercel

1. **Importar Projeto**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Import Project"
   - Selecione seu repositório GitHub

2. **Configurações de Build**:
   - Framework Preset: `Other`
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

3. **Variáveis de Ambiente**:
   No painel do Vercel, configure as seguintes variáveis:
   
   ```
   SUPABASE_URL=https://dtcxamijbjwmzxhsdure.supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y3hhbWlqYmp3bXp4aHNkdXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMjIxNzUsImV4cCI6MjA2Njg5ODE3NX0.VcmdWARRkBBv5zg2QaWKOwfkFNKNfYCvGNUoEglSqGs
   NODE_ENV=production
   ```

### 3. Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (2-5 minutos)
3. Acesse sua URL do Vercel

## 🌐 Funcionalidades Ativas

- ✅ **Landing Page** completa e responsiva
- ✅ **PWA** com service worker
- ✅ **Formulário** conectado ao Supabase
- ✅ **Análise gratuita** funcionando
- ✅ **Cases de sucesso** navegáveis
- ✅ **SEO** otimizado

## 🔗 Estrutura de URLs

- **Homepage**: `https://seu-projeto.vercel.app/`
- **API**: `https://seu-projeto.vercel.app/api/`
- **Cases**: 
  - `/case/ecommerce`
  - `/case/clinica`
  - `/case/saas`

## 🛠️ Comandos de Desenvolvimento

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Verificar tipos TypeScript
npm run check
```

## 📊 Monitoramento

- **Vercel Analytics**: Ativado automaticamente
- **Logs**: Disponíveis no dashboard do Vercel
- **Performance**: Lighthouse score 90+

## 🚨 Solução de Problemas

### Build Falha?
1. Verifique as variáveis de ambiente
2. Confirme se o Supabase está acessível
3. Verifique os logs no Vercel

### API não funciona?
1. Confirme as rotas em `vercel.json`
2. Verifique se as credenciais do Supabase estão corretas
3. Teste localmente primeiro com `npm run dev`

### PWA não instala?
1. Verifique se todos os assets estão sendo servidos
2. Confirme o `manifest.json` e `sw.js`
3. Teste em modo HTTPS (Vercel usa HTTPS por padrão)

## 🎯 Próximos Passos

1. **Domínio Personalizado**: Configure em "Domains" no Vercel
2. **Analytics**: Ative Vercel Analytics para métricas
3. **Monitoring**: Configure alertas para uptime

---

**🚀 Sua landing page jeanautomationpro está pronta para conquistar clientes!** 