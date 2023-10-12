import footer from './template/footer.js';

const frotaPage = {
  articles : [
      {
      url: "/frota/logistica",
      title: 'Lógistica',
      image: 'frota-1.jpg',
      descriptionLeft: 'Gerencie os serviços de distribuição e entrega da sua operação, otimizando rotas e reduzindo custos.',
      descriptionRight: [
        'O Logística permite realizar uma ampla gama de tarefas na área de distribuição e entrega otimizando a organização de cargas e criação de rotas de entregas reduzindo os custos e aumentando o lucro.',
        'Distribua os pedidos, monitore as entregas e gere relatórios de forma fácil.'
      ]
    },
    {
      url: "/frota/agro",
      title: 'Agro',
      image: 'frota-2.jpg',
      descriptionLeft: 'Controle as operações no campo com precisão e tecnologia.',
      descriptionRight: [
        'O Agro é uma solução simples e eficaz para a agroindústria. Com ela é possível controlar os trabalhos no campo com base em dados de telemetria.',
        'Receba dados claros sobre campos, rotação de culturas e operações para os funcionários e gerentes de sua empresa agrícola.'
      ]
    },
    {
      url: "/frota/onibus",
      title: 'Ônibus',
      image: 'frota-3.jpg',
      descriptionLeft: 'Otimize as rotas e paradas de sua frota de ônibus através de rastreamento GPS e dados completos.',
      descriptionRight: [
        'O sistema permite aos operadores de frotas rodoviárias, urbanas e de fretamento monitorar viagens, motoristas e veículos.',
        'O resultado é um melhor desempenho, mais segurança e redução de custos com combustível, pneus e manutenções.'
      ]
    }
  ]
};

const includeTemplate = [
  './template/header',
  './pages/produtos',
  './template/footer'
];

const includeJs = [
  './public/scripts/script.js',
]

const titlePage = "Produtos - SG Máquinas";

export default Router => Router()
.get('/produtos', (req, res) => {
  res.render('index', {footer,titlePage,includeTemplate,includeJs,frotaPage});
})