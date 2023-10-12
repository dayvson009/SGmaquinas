const includeTemplate = [
  './pages/404'
];

const includeCss = [
  './public/styles/pages/404.css',
]

const includeJs = [

]

const titlePage = "404";

export default Router => Router()
.get('*', (req, res) => {
  res.render('index', {titlePage,includeTemplate,includeCss,includeJs});
})