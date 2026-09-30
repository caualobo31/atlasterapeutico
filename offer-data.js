window.ATLAS_DATA = {
  modules: [
    {
      id: "01",
      title: "Emoções e respostas emocionais",
      color: "#d06f4f",
      topics: ["Raiva", "Culpa", "Vergonha", "Tristeza", "Frustração", "Ressentimento", "Inveja", "Solidão", "Sobrecarga emocional", "Dificuldade de reconhecer emoções"]
    },
    {
      id: "02",
      title: "Ansiedade, medo e preocupação",
      color: "#d59c38",
      topics: ["Ciclo da ansiedade", "Preocupação excessiva", "Ruminação mental", "Intolerância à incerteza", "Hipervigilância", "Evitação por ansiedade", "Medo de errar", "Medo de fracassar", "Medo de julgamento", "Necessidade de controle"]
    },
    {
      id: "03",
      title: "Autoestima e relação consigo",
      color: "#8a6aae",
      topics: ["Autocrítica", "Comparação constante", "Síndrome do impostor", "Necessidade de aprovação", "Baixa autoestima", "Autoimagem", "Perfeccionismo", "Autovalor", "Autenticidade e adaptação", "Autocompaixão"]
    },
    {
      id: "04",
      title: "Relacionamentos e vínculos",
      color: "#3b8291",
      topics: ["Estilos de apego", "Dependência emocional", "Medo de abandono", "Sensibilidade à rejeição", "Ciúme e insegurança", "Dificuldade de confiar", "Padrões relacionais repetitivos", "Indisponibilidade emocional", "Medo de intimidade", "Reparação depois de conflitos"]
    },
    {
      id: "05",
      title: "Limites e comunicação",
      color: "#47749d",
      topics: ["Limites pessoais", "Dificuldade de dizer não", "Culpa ao colocar limites", "Comunicação assertiva", "Comunicação passiva", "Comunicação agressiva", "Conversas difíceis", "Expressar necessidades", "Pedidos e recusas", "Acordos nas relações"]
    },
    {
      id: "06",
      title: "Hábitos, sobrecarga e mudanças",
      color: "#64855e",
      topics: ["Procrastinação", "Autossabotagem", "Indecisão", "Ciclo dos hábitos", "Sobrecarga", "Culpa ao descansar", "Esgotamento", "Mudanças de rotina", "Transições de vida", "Pequenos passos sustentáveis"]
    }
  ],
  samples: {
    ansiedade: {
      label: "Ansiedade",
      module: "Ansiedade, medo e preocupação",
      accent: "#d59c38",
      understand: {
        title: "Quando a mente tenta prever o que ainda não aconteceu",
        body: "A ansiedade é uma resposta de antecipação. Ela prepara o corpo para lidar com uma ameaça possível — mesmo quando ainda não há certeza de que algo ruim vai acontecer.",
        signs: ["Corpo: tensão, aceleração, inquietação", "Pensamentos: ‘e se…?’, previsão de risco", "Ações: evitar, checar, adiar ou buscar garantias"],
        example: "Antes de enviar uma mensagem importante, a pessoa imagina rejeição, revisa o texto muitas vezes e adia o envio."
      },
      visualize: {
        title: "O ciclo da ansiedade",
        nodes: ["Situação incerta", "Previsão de ameaça", "Ativação no corpo", "Evitar ou checar", "Alívio breve", "Ciclo fortalecido"]
      },
      explore: {
        title: "Aproxime o mapa da experiência",
        questions: ["O que sua mente está tentando prever?", "Que sinais aparecem primeiro no corpo?", "O que você faz para buscar alívio rápido?", "O alívio ajuda só agora ou também depois?", "Que passo pequeno seria possível sem exigir certeza total?"]
      }
    },
    autocritica: {
      label: "Autocrítica",
      module: "Autoestima e relação consigo",
      accent: "#8a6aae",
      understand: {
        title: "Quando corrigir vira atacar a si mesma",
        body: "A autocrítica tenta prevenir erros por meio de cobrança e julgamento. Às vezes ela parece motivação, mas pode consumir energia e tornar qualquer resultado insuficiente.",
        signs: ["Tom interno duro e generalizações", "Desconto de acertos e foco em falhas", "Medo de relaxar e ‘perder o controle’"],
        example: "Depois de uma apresentação adequada, a atenção fica presa à frase que poderia ter sido melhor."
      },
      visualize: {
        title: "Da exigência ao esgotamento",
        nodes: ["Padrão elevado", "Vigilância por falhas", "Ataque interno", "Esforço tenso", "Resultado descontado", "Exigência renovada"]
      },
      explore: {
        title: "Investigue função, custo e alternativa",
        questions: ["O que a crítica acredita estar evitando?", "Que palavras ela costuma usar?", "Qual é o custo desse tom?", "Como você falaria com alguém querido na mesma situação?", "O que seria uma correção firme sem humilhação?"]
      }
    },
    limites: {
      label: "Limites pessoais",
      module: "Limites e comunicação",
      accent: "#47749d",
      understand: {
        title: "O ponto onde cuidado consigo e relação se encontram",
        body: "Limites comunicam o que é possível, aceitável ou necessário em uma relação. Eles não controlam o outro: tornam visível como cada pessoa pode participar do vínculo.",
        signs: ["Dizer ‘sim’ enquanto sente ressentimento", "Esperar que o outro adivinhe a necessidade", "Só comunicar quando a sobrecarga já passou do limite"],
        example: "A pessoa aceita mais uma tarefa para evitar desconforto e depois se afasta sem explicar o que aconteceu."
      },
      visualize: {
        title: "Um limite em quatro movimentos",
        nodes: ["Perceber o sinal", "Nomear a necessidade", "Comunicar com clareza", "Sustentar a resposta", "Revisar o acordo", "Preservar o vínculo possível"]
      },
      explore: {
        title: "Transforme desconforto em informação",
        questions: ["Que sinal mostra que algo passou do ponto?", "O que você precisa proteger ou tornar possível?", "Qual pedido ou recusa seria claro?", "Que reação do outro você teme?", "O que depende de você se o limite não for respeitado?"]
      }
    }
  }
};
