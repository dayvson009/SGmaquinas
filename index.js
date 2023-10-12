import express from 'express';

const app = express();
const port = process.env.PORT || 21046;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

import routers from './routers/index.js';

routers(app)

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});