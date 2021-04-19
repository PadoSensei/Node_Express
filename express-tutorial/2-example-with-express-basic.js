const express = require('express')
const app = express()

const port = 5000

app.get('/', (req, res) => {
  console.log('You got the homepage')
  res.status(200).send('Homepage')
})
app.get('/about', (req, res) => {
  console.log('You got the homepage')
  res.status(200).send('About Page')
})
app.all('*', (req, res) =>{
  res.status(404).send('Not Found')
})
app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.listen