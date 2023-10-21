import footer from './template/footer.js';

const sobrePage = {
};

const includeTemplate = [
  './template/header',
  './pages/orcamento',
  './template/footer'
];

const includeJs = [
  './public/scripts/script.js',
]

const titlePage = "Orçamento - SG Máquinas";

export default Router => Router()
.get('/orcamento', (req, res) => {
  res.render('index', {footer, sobrePage, includeTemplate, includeJs, titlePage});
})