import { Router } from "express";

import inicio from './inicioRouter.js';
import faleConosco from './faleConoscoRouter.js';
import orcamento from './orcamentoRouter.js';
import produtos from './produtosRouter.js';
import hat from './hat.js';
import _404 from './404Router.js';

export default app => {
  app.use(inicio(Router))
  app.use(faleConosco(Router))
  app.use(orcamento(Router))
  app.use(produtos(Router))
  app.use(hat(Router))
}

