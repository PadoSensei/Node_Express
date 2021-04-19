const express = require('express')
const app = express();
const path = require('path')

const port = 5000;

// best practice points at /public folder
app.use(express.static('./navbar-app'))

// app.get('/', (req, res)=>{
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res)=>{
  res.status(404).send('Not Found')
})

app.listen(port, () => {
  console.log(`server is listening on ${port}...`)
})