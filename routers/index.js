const { Router } = require("express");

const inicio = require('./inicioRouter');
const faleConosco = require('./faleConoscoRouter');
const orcamento = require('./orcamentoRouter');
const produtos = require('./produtosRouter');
const hat = require('./hat');
const _404 = require('./404Router');

module.exports = function(app) {
  app.use(inicio(Router));
  app.use(faleConosco(Router));
  app.use(orcamento(Router));
  app.use(produtos(Router));
  app.use(hat(Router));
};

