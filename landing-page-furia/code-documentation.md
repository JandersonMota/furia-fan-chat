# 📄 Documentação do Código - FURIA Fan Chat

Este documento fornece uma visão detalhada da implementação técnica do projeto FURIA Fan Chat, explicando a estrutura do código, as principais funções e os padrões de design utilizados.

## 📑 Índice

1. [Estrutura HTML](#estrutura-html)
2. [Estilos CSS](#estilos-css)
3. [Funcionalidades JavaScript](#funcionalidades-javascript)
4. [Simulação de Dados](#simulação-de-dados)
5. [Otimizações de Performance](#otimizações-de-performance)

## 📋 Estrutura HTML

O HTML foi organizado em seções semânticas para melhor acessibilidade e SEO:

### Header
```html
<header>
    <div class="logo">...</div>
    <button class="menu-toggle" aria-label="Abrir menu">...</button>
    <nav class="menu-mobile">...</nav>
</header>
```
A seção de cabeçalho contém o logo da aplicação e uma navegação principal que facilita o acesso às diferentes seções da página.

### Hero Section
```html
<section class="hero">
    <div class="hero-content">...</div>
</section>
```
Esta seção é a primeira visualizada pelo usuário e apresenta uma chamada para ação clara.

### Features Section
```html
<section class="features" id="features">
    <div class="features-title">...</div>
    <div class="features-container">...</div>
</section>
```
Lista os principais recursos da plataforma, utilizando cards para melhor organização visual.

### Live Match Section
```html
<section class="live-match" id="live-match">
    <h2>Partida <span>Ao Vivo</span></h2>
    <div class="match-container">...</div>
</section>
```
Exibe informações sobre a partida atual, placar e estatísticas relevantes.

### Chat Section
```html
<section class="chat-section" id="chat">
    <div class="chat-title">...</div>
    <div class="chat-container">...</div>
</section>
```
Contém a interface do chat, com cabeçalho, área de mensagens e campo de entrada para interação.

### CTA Section & Footer
```html
<section class="cta-section" id="join">...</section>
<footer>...</footer>
```
A seção CTA (Call to Action) incentiva o registro e o footer contém informações complementares e links úteis.

## 🎨 Estilos CSS

Os estilos foram organizados seguindo as boas práticas para manutenção e escalabilidade:

### Variáveis CSS
```css
:root {
    --furia-black: #0d0e13;
    --furia-white: #ffffff;
    --furia-blue: #00b4ff;
    --furia-gray: #2e2e35;
    --furia-dark-blue: #0088cc;
}
```
Utilização de variáveis CSS para manter consistência no design e facilitar alterações.

### Reset e Estilos Base
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```
Reset básico para garantir consistência entre navegadores.

### Layout Responsivo
```css
@media (max-width: 768px) {
    header {
        padding: 1rem;
        flex-direction: column;
    }
    /* Outros ajustes para dispositivos móveis */
}
```
Media queries para garantir que a interface funcione bem em diferentes tamanhos de tela.

### Componentes Estilizados
Os componentes como cards, botões e mensagens do chat foram estilizados de forma modular, seguindo práticas de CSS bem estruturado:

```css
.feature-card {
    background-color: var(--furia-black);
    border-radius: 10px;
    padding: 2rem;
    /* Outros estilos */
}

.message-bubble {
    padding: 0.8rem 1rem;
    border-radius: 10px;
    position: relative;
    /* Outros estilos */
}
```

### Animações e Transições
```css
@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
}

.match-status {
    /* Outros estilos */
    animation: pulse 1.5s infinite;
}
```
Animações suaves foram implementadas para melhorar a experiência do usuário.

## 🧩 Funcionalidades JavaScript

O JavaScript foi organizado em funções específicas para cada funcionalidade:

### Renderização de Mensagens
```javascript
function renderMessages() {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";
    
    messages.forEach(msg => {
        // Criação e adição das mensagens ao DOM
    });
    
    // Rolagem automática para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
```
Esta função é responsável por exibir as mensagens no chat e garantir que o usuário veja sempre as mensagens mais recentes.

### Envio de Mensagens
```javascript
function sendMessage() {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    
    if (message !== "") {
        // Lógica para adicionar a mensagem e simular resposta
    }
}
```
Gerencia o envio de mensagens pelo usuário e simula respostas automáticas.

### Simulação de Partida
```javascript
setInterval(() => {
    if (Math.random() < 0.15) {
        // Lógica para atualizar placar e notificar usuários
    }
}, 20000);
```
Utiliza intervalos para simular eventos da partida, como pontuações e mudanças de estado.

### Event Listeners
```javascript
document.addEventListener("DOMContentLoaded", function() {
    renderMessages();
    // Inicialização de outras funcionalidades
});
```
Garantem que o código seja executado no momento apropriado.

### Funcionalidades do Menu Mobile
```javascript
const closeMenu = () => {
    navMenu.classList.remove("show");
};
```
Esta implementação fecha o menu.

## 📊 Simulação de Dados

Para criar uma experiência realista sem backend, utilizamos técnicas de simulação:

### Dados Estáticos
```javascript
const messages = [
    {
        sender: "Carlos_FURIA",
        time: "14:32",
        content: "Esse começo de partida está muito bom!",
        type: "incoming"
    },
    // Outras mensagens iniciais
];
```
Mensagens pré-definidas para inicializar o chat.

### Dados Dinâmicos
```javascript
setInterval(() => {
    const randomMessages = [
        "Esse time da FURIA está muito forte!",
        // Outras mensagens possíveis
    ];
    
    // Lógica para adicionar mensagens aleatoriamente
}, 5000);
```
Geração aleatória de novos conteúdos baseados em probabilidade para criar uma sensação de ambiente ativo.

### Simulação de Eventos
```javascript
const highlights = [
    "🔥 HIGHLIGHT: Art acaba de conseguir um clutch incrível de 1v3!",
    // Outros destaques possíveis
];

setInterval(() => {
    // Lógica para adicionar highlights aleatoriamente
}, 30000);
```
Eventos pré-definidos são inseridos em intervalos aleatórios para simular acontecimentos reais da partida.

## ⚙️ Otimizações de Performance

### Limitação de Mensagens
```javascript
// Manter apenas as últimas 50 mensagens para não sobrecarregar
if (messages.length > 50) {
    messages.shift();
}
```
Evita o crescimento indefinido do DOM mantendo um número limitado de mensagens.

### Throttling de Atualização
```javascript
// Atualização do placar a cada 20 segundos
setInterval(() => {
    // Lógica com probabilidade controlada
    if (Math.random() < 0.15) {
        // Atualizar placar
    }
}, 20000);
```
Controla a frequência de atualizações para evitar sobrecarga do navegador.

### Reutilização de Elementos
Em vez de recriar todo o DOM a cada atualização, apenas os elementos necessários são modificados:
```javascript
document.querySelector(".team:nth-child(1) .score").textContent = furiaScore;
```

### Gestão Eficiente de Eventos
Eventos são anexados apenas uma vez na inicialização, e não a cada atualização:
```javascript
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar todos os event listeners
});
```

## 🔍 Considerações Finais

Esta documentação oferece uma visão abrangente da implementação técnica do FURIA Fan Chat. A estrutura modular tanto do HTML quanto do CSS e JavaScript permite fácil manutenção e extensão do código.

Para qualquer dúvida adicional ou esclarecimentos sobre a implementação, sinta-se à vontade para entrar em contato.

---

Documentação preparada por Janderson Mota para o desafio técnico da FURIA Tech.
