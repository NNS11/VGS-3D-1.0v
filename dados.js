const CONFIG = {
    telefone: "5551998933527", 
    corPrimaria: "#1a1a1a",    
    corDestaque: "#f7e017"     
};

const PRODUTOS = [
    {
    id: 1,
    nome: "Action figure Walter White (Heisenberg) Breaking Bad",
    categoria: "Séries",
    subtitulo: "Tenha um boneco da maior série de todos os tempos!!",
    precoOriginal: "",
    precoDesconto: "100,00",
    fotos: [
        "p1_1.png",
        "p1_2.png"
    ],
    tags: [
        "Séries",
        "Breaking Bad",
        "Action figure"
    ],
    descricao: "Boneco do Walter White (Heisenberg), da série Breaking Bad em ótimo qualidade e acabamento.",
    detalhes: [
        "Boneco colecionável",
        "Muito resistente",
        "Ótimo acabamento"
    ],
    tabela: [
        [
            "Altura",
            "20cm"
        ],
        [
            "Peso",
            "250g"
        ],
        [
            "Colorido",
            "Sim"
        ]
    ]
}
    {
        id: 2,
        nome: "Suporte Headset VGS",
        categoria: "Setup",
        subtitulo: "Estética e utilidade.",
        precoOriginal: "89,90",
        precoDesconto: "55,00",
        fotos: ["produto2_1.jpg"],
        tags: ["setup", "gamer", "suporte"],
        descricao: "Otimize seu setup com um design robusto e minimalista.",
        detalhes: ["Material PLA+", "Pés antiderrapantes", "Design Exclusivo"],
        tabela: [["Largura", "12cm"], ["Cores", "Grafite/Preto"]]
    }
];

function gerarLinkZap(nomeProduto) {
    const frase = `Olá, estou interessado em adquirir o(a) ${nomeProduto}`;
    return `https://wa.me/${CONFIG.telefone}?text=${encodeURIComponent(frase)}`;
}
