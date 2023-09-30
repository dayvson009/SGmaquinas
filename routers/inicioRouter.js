import menu from './template/menu.js';
import footer from './template/footer.js';

const homePage = {
  produtos : [
    {
      url: "/rastreador_veicular",
      image: "rastreador.jpg",
      title: "Rastreador veicular",
      subtitle: "Proteção para o seu veículo.",
      pointsColor: "#0F50FB"
    },
    {
      url: "/frota",
      image: "frota.jpg",
      title: "Gestão de Frota",
      subtitle: "Potencialize a sua frota.",
      pointsColor: "#0F50FB"
    },
    {
      url: "/family",
      image: "family.jpg",
      title: "Segsat Family",
      subtitle: "Conecte-se com quem você ama.",
      pointsColor: "#FF5749"
    },
  ]
};

const includeTemplate = [
  './template/header',
  './pages/inicio',
  './template/footer'
];

const includeJs = [
  './scripts/script.js',
]

const titlePage = "Início - SG Máquinas";

export default Router => Router()
.get('/', (req, res) => {
  res.render('index', {footer, homePage, includeTemplate, includeJs, titlePage});
})
.get('/inicio', (req, res) => {
  res.render('index', {footer, homePage, includeTemplate, includeJs, titlePage});
})