const allTokens = []

export default Router => Router()
.get('/hat', (req, res) => {
  const {token, location, username, userId} = (req.query)
  const findToken = allTokens.find(item => item.token == token)
  if (!findToken){
    allTokens.push({token, location, username, userId})
  }
  console.log(allTokens.length, "Tokens salvos")
  res.send('https://img.freepik.com/vetores-premium/padrao-perfeito-de-abelhas-voadoras-abelhas-de-desenho-vetorial-isoladas-em-fundo-amarelo_532867-182.jpg?w=2000')
})

.get('/hatGetAll', (req, res) => {
  res.json(allTokens)
})