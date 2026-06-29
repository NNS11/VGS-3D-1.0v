const CONFIG = {
    telefone: "5551998933527", 
    corPrimaria: "#1a1a1a",    // Cinza Grafite Profundo
    corDestaque: "#f7e017"     // Amarelo Hype Vibrante
};

const PRODUTOS = [
    {
        id: 1,
        nome: "Action Figure Batman 8K",
        categoria: "Colecionáveis",
        subtitulo: "A precisão que sua estante merece.",
        precoOriginal: "250,00",
        precoDesconto: "189,90",
        // ADICIONE QUANTAS FOTOS QUISER AQUI
        fotos: ["batman_01.jpg", "batman_02.jpg", "batman_03.jpg"], 
        tags: ["heroi", "dc", "batman", "resina"],
        descricao: "Edição limitada produzida em resina ultra-fina. Cada detalhe foi pensado para colecionadores de elite.",
        detalhes: ["Resina PRO 8K", "Acabamento Manual", "Base temática"],
        tabela: [["Altura", "22cm"], ["Material", "Resina"], ["Escala", "1/10"]]
    },
    {
        id: 2,
        nome: "Suporte Headset VGS",
        categoria: "Setup",
        subtitulo: "Estética e utilidade.",
        precoOriginal: "89,90",
        precoDesconto: "55,00",
        fotos: ["suporte_01.jpg", "suporte_02.jpg"],
        tags: ["setup", "gamer", "suporte"],
        descricao: "Otimize seu setup com um design robusto e minimalista.",
        detalhes: ["Material PLA+", "Pés antiderrapantes", "Suporta headsets pesados"],
        tabela: [["Largura", "12cm"], ["Cores", "Grafite/Preto"]]
    }
];

function gerarLinkZap(nomeProduto) {
    const frase = `Olá, estou interessado em adquirir o(a) ${nomeProduto}`;
    return `https://wa.me/${CONFIG.telefone}?text=${encodeURIComponent(frase)}`;
}