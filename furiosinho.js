document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.inputMenssagem input');
    const sendButton = document.querySelector('.inputMenssagem button');
    const chatBox = document.querySelector('.chat');

    function addMessage(message, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.textContent = message;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // rola pra última mensagem
    }

    function furiosinhoResponder(mensagemUsuario) {
        let resposta = "";
    
        const msg = mensagemUsuario.toLowerCase();
    
        // Cumprimentos (não alterar)
        if (msg.includes("oi") || msg.includes("olá") || msg.includes("salve") || msg.includes("eae") || msg.includes("opa") || msg.includes("e ai")) {
            resposta = "E aí, fã da FURIA! 🐆🔥";
    
        // Elenco
        } else if (msg.includes("cs") || msg.includes("line-up") || msg.includes("elenco") || msg.includes("equipe") || msg.includes("jogadores")) {
            resposta = "Nosso elenco atual é pura bala! é Fallen, KSCERATO, yuurih, chelo e skullz";
    
        // Loja / Produtos
        } else if (msg.includes("loja") || msg.includes("camisa") || msg.includes("roupa") || msg.includes("manto") || msg.includes("produtos")) {
            resposta = "Se liga nos mantos da FURIA na nossa loja oficial! 😎👕";
    
        // Torcida
        } else if (msg.includes("evento") || msg.includes("torcida") || msg.includes("fã") || msg.includes("furiosos")) {
            resposta = "A nossa torcida é uma das mais apaixonadas do mundo! Já foi pra algum evento com a FURIA? 🖤🔥";
    
        // Fundação / História
        } else if (msg.includes("fundador") || msg.includes("fundação") || msg.includes("criação") || msg.includes("história") || msg.includes("fundou")) {
            resposta = "A FURIA foi fundada em 2017 pelos brabos Jaime 'raizen' Pádua, Chris Guedes e André Akkari! 🧠🔥";
    
        // Conquistas
        } else if (msg.includes("conquista") || msg.includes("campeonato") || msg.includes("títulos") || msg.includes("vitórias")) {
            resposta = "A FURIA já conquistou vários campeonatos importantes e representa o Brasil com orgulho nos palcos internacionais! 🏆🇧🇷";
    
        // Outras modalidades
        } else if (msg.includes("valorant") || msg.includes("lol") || msg.includes("league of legends") || msg.includes("rocket league")) {
            resposta = "Além do CS, a FURIA também compete no Valorant, LoL, Rocket League e outros! Somos multi-talentos! 🎮🔥";
    
        // Projetos sociais
        } else if (msg.includes("social") || msg.includes("projeto") || msg.includes("impacto")) {
            resposta = "A FURIA também investe em projetos sociais, apoiando educação, esporte e inclusão! 🖤🐆";
    
        // FURIA no exterior
        } else if (msg.includes("eua") || msg.includes("estados unidos") || msg.includes("internacional")) {
            resposta = "Sabia que temos sede em Miami? A FURIA tá dominando o mundo! 🌎🔥";

        } else if (msg.includes("próximo jogo") || msg.includes("quando a furia joga") || msg.includes("jogo da furia") || msg.includes("proximo jogo")) {
         resposta = `Nosso próximo jogo é contra a ${proximo.adversario}, no dia ${proximo.data} às ${proximo.horario} pelo ${proximo.campeonato} 🔥🐆`;

        // Default (não reconhecido)
        } else {
            resposta = "Não entendi muito bem 😅, mas tô aqui pra te ajudar! Pergunta mais sobre a FURIA!";
        }
    
        setTimeout(() => {
            addMessage(resposta, 'furiosinho');
        }, 800);
    }
    

    sendButton.addEventListener('click', () => {
        const mensagem = input.value.trim();
        if (mensagem !== "") {
            addMessage(mensagem, 'usuario');
            furiosinhoResponder(mensagem);
            input.value = "";
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });
});





const proximosJogos = [
    {
        adversario: "MIBR",
        data: "09/05/2025",
        horario: "13:01",
        campeonato: "ESL Pro League Season 21"
    },
    {
        adversario: "Cloud9",
        data: "22/05/2025",
        horario: "12:30",
        campeonato: "BLAST Open Spring Lisbon"
    }
];

const proximo = proximosJogos[0];


