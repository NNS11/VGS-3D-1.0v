const CONFIG = {
    telefone: "5551998933527", 
    corPrimaria: "#1a1a1a",    
    corDestaque: "#f7e017"     
};

const PRODUTOS = [
    {
    id: 1,
    nome: "Action Figure Walter White (Heisenberg) Breaking Bad",
    categoria: "Séries",
    subtitulo: "Tenha um boneco da maior série de todos os tempos!!",
    precoOriginal: "",
    precoDesconto: "100,00",
    fotos: ["p1_1.png", "p1_2.png"],
    tags: ["Séries", "Breaking Bad", "Action Figure"],
    descricao: "Boneco do Walter White (Heisenberg), da série Breaking Bad em ótima qualidade e acabamento.",
    detalhes: [
        "Boneco colecionável",
        "Muito resistente",
        "Ótimo acabamento"
    ],
    tabela: [
        ["Altura", "20cm"],
        ["Peso", "250g"],
        ["Colorido", "Sim"]
    ]
},
    {
    id: 2,
    nome: "Chaveiro Bola Giratória Internacional",
    categoria: "Chaveiros",
    subtitulo: "A bola gira de verdade e leva o Inter com você.",
    precoOriginal: "",
    precoDesconto: "15,00",
    fotos: [
        "p2_1.png",
        "p2_2.png"
    ],
    tags: [
        "Chaveiro",
        "Internacional",
        "Bola",
        "Giratório"
    ],
    descricao: "Chaveiro em formato de bola de futebol com o escudo do Internacional. A bola gira livremente, possui excelente acabamento e é ideal para chaves, mochilas e coleções.",
    detalhes: [
        "Bola giratória",
        "Material resistente",
        "Leve e compacto",
        "Excelente acabamento",
        "Ideal para colecionadores"
    ],
    tabela: [
        ["Material", "Plástico"],
        ["Cor", "Vermelho e Branco"],
        ["Time", "Internacional"],
        ["Peso", "40g"]
    ]
}
];

function gerarLinkZap(nomeProduto) {
    const frase = `Olá, estou interessado em adquirir o(a) ${nomeProduto}`;
    return `https://wa.me/${CONFIG.telefone}?text=${encodeURIComponent(frase)}`;
}
