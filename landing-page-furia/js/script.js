// Dados simulados de mensagens para o chat
const messages = [
    {
        sender: "Carlos_FURIA",
        time: "14:32",
        content: "Esse começo de partida está muito bom!",
        type: "incoming"
    },
    {
        sender: "MariaGamer",
        time: "14:33",
        content: "Boa jogada do art! Que awp incrível!",
        type: "incoming"
    },
    {
        sender: "FURIA_Oficial",
        time: "14:35",
        content: "Obrigado pelo apoio, fãs! Continuem torcendo que vamos levar essa!",
        type: "incoming"
    },
    {
        sender: "JoãoCS",
        time: "14:36",
        content: "Esse mapa é bom para a FURIA, temos grandes chances!",
        type: "incoming"
    },
    {
        sender: "Você",
        time: "14:38",
        content: "Vamos FURIA! Estou confiante na vitória!",
        type: "outgoing"
    }
];

// Função para renderizar mensagens no chat
function renderMessages() {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";
    
    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message message-${msg.type}`;
        
        messageDiv.innerHTML = `
            <div class="message-info">
                <div class="message-sender">${msg.sender}</div>
                <div class="message-time">${msg.time}</div>
            </div>
            <div class="message-bubble">
                <div class="message-content">${msg.content}</div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
    });
    
    // Rolar para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para enviar mensagem
function sendMessage() {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    
    if (message !== "") {
        // Adicionar nova mensagem ao array
        const newMessage = {
            sender: "Você",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            content: message,
            type: "outgoing"
        };
        
        messages.push(newMessage);
        renderMessages();
        
        // Simular resposta automática após 1 segundo
        setTimeout(() => {
            const responses = [
                "Concordo totalmente!",
                "Essa partida está incrível!",
                "FURIA vai vencer com certeza!",
                "Que round incrível foi esse!",
                "O art está jogando muito hoje!",
                "Vamos FURIA!"
            ];
            
            const randomResponse = {
                sender: ["Carlos_FURIA", "MariaGamer", "Pedro_CS", "FURIA_Fan1", "CS_Lover"][Math.floor(Math.random() * 5)],
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                content: responses[Math.floor(Math.random() * responses.length)],
                type: "incoming"
            };
            
            messages.push(randomResponse);
            renderMessages();
        }, 1000);
        
        // Limpar o campo de entrada
        input.value = "";
    }
}

// Renderizar mensagens iniciais
document.addEventListener("DOMContentLoaded", function() {
    renderMessages();
    
    // Adicionar simulação de novas mensagens de outros usuários
    setInterval(() => {
        const randomMessages = [
            "Esse time da FURIA está muito forte!",
            "Precisamos melhorar a defesa no bombsite B.",
            "O kscerato está jogando muito bem hoje!",
            "Alguém viu aquele clutch do yuurih?",
            "Estou nervoso com esse round!",
            "Vamos FURIA, é só mais alguns rounds!",
            "Esse mapa é difícil, mas acredito na vitória!",
            "Que jogada incrível foi essa!",
            "Alguém tem informações sobre o próximo torneio?",
            "Esse evento está muito bem organizado!"
        ];
        
        const senders = ["Carlos_FURIA", "MariaGamer", "Pedro_CS", "FURIA_Fan1", "CS_Lover", "GameExpert", "BRFan", "CSGOPro", "TorcidaFuria"];
        
        // 20% de chance de adicionar mensagem
        if (Math.random() < 0.2) {
            const newMessage = {
                sender: senders[Math.floor(Math.random() * senders.length)],
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                content: randomMessages[Math.floor(Math.random() * randomMessages.length)],
                type: "incoming"
            };
            
            messages.push(newMessage);
            
            // Manter apenas as últimas 50 mensagens para não sobrecarregar
            if (messages.length > 50) {
                messages.shift();
            }
            
            renderMessages();
        }
    }, 5000);
    
    // Simular atualizações do placar
    let furiaScore = 13;
    let opponentScore = 10;
    
    setInterval(() => {
        if (Math.random() < 0.15) {
            // 60% de chance da FURIA marcar
            if (Math.random() < 0.6 && furiaScore < 16) {
                furiaScore++;
                // Notificação de ponto
                const scoreNotification = {
                    sender: "SISTEMA",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    content: "🎉 FURIA marcou mais um ponto! Placar atual: FURIA " + furiaScore + " - " + opponentScore + " NAVI",
                    type: "incoming"
                };
                messages.push(scoreNotification);
                document.querySelector(".team:nth-child(1) .score").textContent = furiaScore;
            } 
            // 40% de chance do oponente marcar
            else if (opponentScore < 16) {
                opponentScore++;
                // Notificação de ponto
                const scoreNotification = {
                    sender: "SISTEMA",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    content: "NAVI marcou um ponto. Placar atual: FURIA " + furiaScore + " - " + opponentScore + " NAVI",
                    type: "incoming"
                };
                messages.push(scoreNotification);
                document.querySelector(".team:nth-child(3) .score").textContent = opponentScore;
            }
            
            // Verificar se o jogo acabou
            if (furiaScore >= 16) {
                const winNotification = {
                    sender: "SISTEMA",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    content: "🏆 FURIA VENCEU O MAPA! Próximo mapa começa em 15 minutos!",
                    type: "incoming"
                };
                messages.push(winNotification);
                // Reiniciar o jogo após 10 segundos
                setTimeout(() => {
                    furiaScore = 0;
                    opponentScore = 0;
                    document.querySelector(".team:nth-child(1) .score").textContent = furiaScore;
                    document.querySelector(".team:nth-child(3) .score").textContent = opponentScore;
                    
                    const newGameNotification = {
                        sender: "SISTEMA",
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        content: "🎮 NOVO MAPA INICIADO! FURIA vs NAVI em Nuke!",
                        type: "incoming"
                    };
                    messages.push(newGameNotification);
                    
                    // Atualizar o mapa ativo
                    const mapElements = document.querySelectorAll(".map");
                    mapElements.forEach(map => map.classList.remove("active-map"));
                    mapElements[2].classList.add("active-map");
                    
                    renderMessages();
                }, 10000);
            } else if (opponentScore >= 16) {
                const loseNotification = {
                    sender: "SISTEMA",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    content: "NAVI venceu o mapa. Próximo mapa começa em 15 minutos!",
                    type: "incoming"
                };
                messages.push(loseNotification);
                // Reiniciar o jogo após 10 segundos
                setTimeout(() => {
                    furiaScore = 0;
                    opponentScore = 0;
                    document.querySelector(".team:nth-child(1) .score").textContent = furiaScore;
                    document.querySelector(".team:nth-child(3) .score").textContent = opponentScore;
                    
                    const newGameNotification = {
                        sender: "SISTEMA",
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        content: "🎮 NOVO MAPA INICIADO! FURIA vs NAVI em Nuke!",
                        type: "incoming"
                    };
                    messages.push(newGameNotification);
                    
                    // Atualizar o mapa ativo
                    const mapElements = document.querySelectorAll(".map");
                    mapElements.forEach(map => map.classList.remove("active-map"));
                    mapElements[2].classList.add("active-map");
                    
                    renderMessages();
                }, 10000);
            }
            
            renderMessages();
        }
    }, 20000);
    
    // Simulação de highlights da partida
    const highlights = [
        "🔥 HIGHLIGHT: Art acaba de conseguir um clutch incrível de 1v3!",
        "🔥 HIGHLIGHT: Kscerato faz um ace perfeito no bombsite A!",
        "🔥 HIGHLIGHT: Yuurih defende o bombsite B sozinho contra 4 jogadores!",
        "🔥 HIGHLIGHT: FURIA executa uma estratégia perfeita e elimina todo o time adversário!",
        "🔥 HIGHLIGHT: Jogada incrível de drop com 3 kills do KSCERATO!"
    ];
    
    setInterval(() => {
        if (Math.random() < 0.1) {
            const highlightIndex = Math.floor(Math.random() * highlights.length);
            const highlightMessage = {
                sender: "SISTEMA",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                content: highlights[highlightIndex],
                type: "incoming"
            };
            messages.push(highlightMessage);
            renderMessages();
        }
    }, 30000);
    
    // Simulação de estatísticas do jogo
    const stats = [
        "📊 ESTATÍSTICAS: Art lidera o placar com 24 kills e apenas 12 mortes!",
        "📊 ESTATÍSTICAS: FURIA tem 65% de sucesso em rounds com pistolas!",
        "📊 ESTATÍSTICAS: Kscerato tem uma taxa de headshot de 68% neste mapa!",
        "📊 ESTATÍSTICAS: FURIA já ganhou 7 de 8 rounds no lado CT!",
        "📊 ESTATÍSTICAS: Yuurih tem o melhor ADR da partida com 95.5!"
    ];
    
    setInterval(() => {
        if (Math.random() < 0.1) {
            const statIndex = Math.floor(Math.random() * stats.length);
            const statMessage = {
                sender: "SISTEMA",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                content: stats[statIndex],
                type: "incoming"
            };
            messages.push(statMessage);
            renderMessages();
        }
    }, 45000);
});

// Atualizar contador de fãs online
setInterval(() => {
    const currentFans = parseInt(document.querySelector(".chat-status div:last-child").textContent);
    const newFans = currentFans + Math.floor(Math.random() * 7) - 3; // Variação de -3 a +3
    document.querySelector(".chat-status div:last-child").textContent = `${Math.max(100, newFans)} fãs online`;
}, 10000);