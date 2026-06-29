const CONFIG = {
    telefone: "5551998933527", // Seu WhatsApp
    corPrimaria: "#333333",    // Cinza Escuro
    corDestaque: "#FFDF00"     // Amarelo
};

const PRODUTOS = [
    {
        id: 1,
        nome: "Action Figure Batman 8K",
        categoria: "Colecionáveis",
        subtitulo: "Qualidade de rotina premium.",
        precoOriginal: "250,00",
        precoDesconto: "189,90",
        foto: "produto1.jpg", 
        tags: ["heroi", "dc", "batman"],
        descricao: "Impressão em resina de altíssima definição com acabamento industrial premium.",
        detalhes: ["Resina PRO 8K", "Pintura Manual", "Base temática"],
        tabela: [["Altura", "22cm"], ["Material", "Resina"], ["Escala", "1/10"]]
    },
    {
        id: 2,
        nome: "Suporte Headset Gamer",
        categoria: "Setup",
        subtitulo: "Design e Resistência.",
        precoOriginal: "89,90",
        precoDesconto: "55,00",
        foto: "produto2.jpg",
        tags: ["setup", "gamer", "suporte"],
        descricao: "Suporte robusto para organizar seu setup com a estética VGS 3D.",
        detalhes: ["Material PLA+", "Anti-derrapante", "Design Low-Poly"],
        tabela: [["Largura", "12cm"], ["Cores", "Grafite/Preto"]]
    },
    {
        id: 3,
        nome: "Vaso Geométrico VGS",
        categoria: "Decoração",
        subtitulo: "Estética Minimalista.",
        precoOriginal: "120,00",
        precoDesconto: "79,00",
        foto: "produto3.jpg",
        tags: ["casa", "decor", "vaso"],
        descricao: "Vaso decorativo com padrões geométricos complexos.",
        detalhes: ["Eco-friendly", "Acabamento Fosco"],
        tabela: [["Altura", "15cm"], ["Tipo", "Interno"]]
    }
];

// FUNÇÃO PARA GERAR O LINK COM A FRASE SOLICITADA
function gerarLinkZap(nomeProduto) {
    const frase = `Olá, estou interessado em adquirir o(a) ${nomeProduto}`;
    const textoEncoded = encodeURIComponent(frase);
    return `https://wa.me/${CONFIG.telefone}?text=${textoEncoded}`;
}
