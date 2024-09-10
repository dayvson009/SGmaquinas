const includeTemplate = [
  './pages/404'
];

const includeCss = [
  '/styles/pages/404.css',
]

const includeJs = [

]

const titlePage = "404";

module.exports = (Router) => Router()
.get('*', (req, res) => {
  res.render('index', {titlePage,includeTemplate,includeCss,includeJs});
})
