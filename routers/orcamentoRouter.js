const footer = require('./template/footer.js');

const sobrePage = {
};

const includeTemplate = [
  './template/header',
  './pages/orcamento',
  './template/footer'
];

const includeJs = [
  '/scripts/script.js',
]

const titlePage = "Orçamento - SG Máquinas";


module.exports = (Router) => Router()
.get('/orcamento', (req, res) => {
  res.render('index', {footer, sobrePage, includeTemplate, includeJs, titlePage});
})