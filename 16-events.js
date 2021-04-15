const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('login', (name, title) => {
  console.log(`data received, I got ${name} and ${title}`)
})

customEmitter.emit('login', 'greet', 'flow')