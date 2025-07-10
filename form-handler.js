// Handler para formulário de análise gratuita - Redireciona para WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    console.log('📱 Form handler carregado');
    
    // Configurações do WhatsApp
    const WHATSAPP_NUMBER = '5511999999999'; // Substitua pelo número real do Jean
    
    // Função para formatar mensagem do WhatsApp
    function formatWhatsAppMessage(formData) {
        const message = `🔥 *SOLICITAÇÃO DE ANÁLISE GRATUITA*

👤 *Dados Pessoais:*
• Nome: ${formData.get('name') || 'Não informado'}
• Email: ${formData.get('email') || 'Não informado'}
• Telefone: ${formData.get('phone') || 'Não informado'}

🏢 *Empresa:*
• Nome da empresa: ${formData.get('companyName') || 'Não informado'}
• Website: ${formData.get('companyWebsite') || 'Não informado'}

💼 *Serviços de Interesse:*
${getSelectedServices(formData)}

📊 *Informações Adicionais:*
• Desafio principal: ${formData.get('mainChallenge') || 'Não informado'}
• Orçamento estimado: ${formData.get('budgetRange') || 'Não informado'}

---
📅 Solicitado em: ${new Date().toLocaleString('pt-BR')}
🌐 Origem: Landing Page - jeanautomationpro.com`;

        return encodeURIComponent(message);
    }
    
    // Função para obter serviços selecionados
    function getSelectedServices(formData) {
        const services = {
            'ai-chatbot': '🤖 Atendimento com IA',
            'landing-page': '🚀 Landing Pages',
            'saas': '💻 Produtos SaaS',
            'consultoria': '📊 Consultoria Digital'
        };
        
        let selectedServices = [];
        for (let [key, label] of Object.entries(services)) {
            if (formData.get(key)) {
                selectedServices.push(`• ${label}`);
            }
        }
        
        return selectedServices.length > 0 ? selectedServices.join('\n') : '• Não especificado';
    }
    
    // Função para mostrar toast/notificação
    function showToast(message, type = 'success') {
        // Remove toast anterior se existir
        const existingToast = document.querySelector('.custom-toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        const toast = document.createElement('div');
        toast.className = `custom-toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">${type === 'success' ? '✅' : '❌'}</span>
                <span class="toast-message">${message}</span>
            </div>
        `;
        
        // Estilos do toast
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 14px;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(toast);
        
        // Remove após 5 segundos
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Adicionar estilos CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .custom-toast .toast-content {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    `;
    document.head.appendChild(style);
    
    // Interceptar todos os formulários que tentam enviar para API
    document.addEventListener('submit', function(e) {
        const form = e.target;
        
        // Verificar se é um formulário que deveria ir para API
        if (form.tagName === 'FORM') {
            console.log('📝 Formulário submetido, redirecionando para WhatsApp...');
            
            e.preventDefault();
            
            try {
                const formData = new FormData(form);
                
                // Validação básica
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                
                if (!name || !email || !phone) {
                    showToast('Por favor, preencha pelo menos nome, email e telefone', 'error');
                    return;
                }
                
                // Validar email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showToast('Por favor, informe um email válido', 'error');
                    return;
                }
                
                // Formatar mensagem e abrir WhatsApp
                const message = formatWhatsAppMessage(formData);
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
                
                console.log('📱 Abrindo WhatsApp:', whatsappUrl);
                
                // Mostrar confirmação
                showToast('Redirecionando para WhatsApp... 📱');
                
                // Abrir WhatsApp após um pequeno delay
                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                }, 1000);
                
                // Limpar formulário
                form.reset();
                
            } catch (error) {
                console.error('❌ Erro ao processar formulário:', error);
                showToast('Erro ao processar formulário. Tente novamente.', 'error');
            }
        }
    });
    
    // Também interceptar cliques em botões de CTA que abriam modais
    document.addEventListener('click', function(e) {
        const button = e.target.closest('button');
        if (button) {
            const buttonText = button.textContent.toLowerCase();
            
            // Detectar botões de ação principais
            if (buttonText.includes('análise') || 
                buttonText.includes('solicitar') || 
                buttonText.includes('quero') ||
                buttonText.includes('começar')) {
                
                console.log('🔘 Botão CTA clicado, abrindo WhatsApp direto');
                e.preventDefault();
                
                const defaultMessage = encodeURIComponent(`🔥 Olá! Vim da landing page e gostaria de solicitar uma análise gratuita do meu negócio.

Estou interessado em saber mais sobre as soluções de IA e automação da Jean Automation Pro.

Aguardo o contato! 😊`);
                
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`;
                
                showToast('Abrindo WhatsApp para contato direto! 📱');
                
                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                }, 1000);
            }
        }
    });
    
    console.log('✅ Form handler configurado com sucesso!');
}); 