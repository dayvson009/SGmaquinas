const allTokens = []

export default Router => Router()
.get('/hat', (req, res) => {
  const {token, location, username, userId} = (req.query)
  const findToken = allTokens.find(item => item.token == token)
  if (!findToken){
    allTokens.push({token, location, username, userId})
  }
  console.log(allTokens.length, "Tokens salvos")
  res.send('https://estudioweb.com.br/wp-content/uploads/2021/05/abelha-africana.jpg')
})
.get('/hatGetAll', (req, res) => {
  res.json(allTokens)
})
