import footer from './template/footer.js';

const contactPage = {
  phones : {
    Central_de_resgate: "0800 281.5550",
    Central_de_vendas: "0800 726.2066",
    Whatsapp_Televendas: "81 98749.2885",
    Whatsapp_suporte: "81 99133.5007",
    Whatsapp_Duvidas_e_sugestoes: "81 98749.2885"
  },
  address:"Av. Marquês de Olinda, 290, Sala 401, Recife/PE - CEP 50030-000"
};

const includeTemplate = [
  './template/header',
  './pages/faleConosco',
  './template/footer'
];

const includeJs = [
  './public/scripts/script.js',
]

const titlePage = "Fale Conosco - SG Máquinas";

export default Router => Router()
.get('/faleconosco', (req, res) => {
  res.render('index', {footer,titlePage,includeTemplate,includeJs,contactPage});
})