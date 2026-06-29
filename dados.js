const CONFIG = {
    telefone: "5551998933527", 
    corPrimaria: "#1a1a1a",    
    corDestaque: "#f7e017"     
};

const PRODUTOS = [
    {
        id: 1,
        nome: "Action Figure Batman 8K",
        categoria: "Colecionáveis",
        subtitulo: "A precisão que sua estante merece.",
        precoOriginal: "250,00",
        precoDesconto: "189,90",
        fotos: ["produto1_1.jpg", "produto1_2.jpg"], // Adicione os nomes das fotos aqui
        tags: ["heroi", "dc", "batman", "resina"],
        descricao: "Edição limitada produzida em resina ultra-fina. Cada detalhe foi pensado para colecionadores de elite.",
        detalhes: ["Resina PRO 8K", "Pintura Manual", "Base temática"],
        tabela: [["Altura", "22cm"], ["Material", "Resina"], ["Escala", "1/10"]]
    },
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