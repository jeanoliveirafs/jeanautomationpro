# 📱 Configuração do WhatsApp

## ⚠️ IMPORTANTE: Configure o número do WhatsApp

O formulário do site agora redireciona para o WhatsApp ao invés de tentar enviar para uma API.

### 🔧 Como configurar:

1. **Abra o arquivo `form-handler.js`**

2. **Na linha 5, substitua o número placeholder pelo número real:**
   ```javascript
   // Linha 5 - ALTERAR ESTE NÚMERO
   const WHATSAPP_NUMBER = '5511999999999'; // ← Substituir pelo número real
   ```

3. **Formato do número:**
   - Código do país + DDD + número
   - Exemplo para Brasil: `5511987654321`
   - **SEM** espaços, traços ou parênteses
   - **COM** código do país (55 para Brasil)

### 📋 Exemplo de configuração:

```javascript
// ✅ CORRETO
const WHATSAPP_NUMBER = '5511987654321';

// ❌ INCORRETO
const WHATSAPP_NUMBER = '+55 (11) 98765-4321';
const WHATSAPP_NUMBER = '11 98765-4321';
```

### 🚀 Como funciona após configurar:

1. **Formulários** → Capturam dados e formatam mensagem para WhatsApp
2. **Botões CTA** → Abrem WhatsApp direto com mensagem padrão
3. **Validação** → Verifica nome, email e telefone antes de enviar
4. **Notificações** → Mostra toast de confirmação

### 🔄 Após alterar o número:

1. Salve o arquivo `form-handler.js`
2. Faça commit das alterações
3. Faça push para o GitHub
4. O Vercel fará deploy automático

### 📞 Formato das mensagens:

O script formatará automaticamente as mensagens com:
- Dados pessoais do formulário
- Serviços de interesse
- Informações da empresa
- Data/hora da solicitação
- Origem (landing page)

**Exemplo de mensagem gerada:**
```
🔥 SOLICITAÇÃO DE ANÁLISE GRATUITA

👤 Dados Pessoais:
• Nome: João Silva
• Email: joao@empresa.com
• Telefone: (11) 99999-9999

🏢 Empresa:
• Nome da empresa: Minha Empresa Ltda
• Website: www.minhaempresa.com

💼 Serviços de Interesse:
• 🤖 Atendimento com IA
• 🚀 Landing Pages

📊 Informações Adicionais:
• Desafio principal: Aumentar conversões
• Orçamento estimado: R$ 5.000 - R$ 10.000

---
📅 Solicitado em: 20/12/2024 14:30:25
🌐 Origem: Landing Page - jeanautomationpro.com
``` 