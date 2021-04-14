const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the show!!')
  }
  if (req.url === '/about') {
    res.end('You found our history!!')
  }
  res.end(`
    <h1>Nope</h1>
    <p>This isn't anything!</p>
    <a href="/"> Go Back </a>
  `)
  
})

server.listen(5000)