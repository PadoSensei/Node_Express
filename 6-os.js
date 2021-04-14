// OS Module
const os = require('os')

// info about user
const user = os.userInfo()
console.log(user)

// sytem uptime in seconds

console.log(`System uptime is ${os.uptime() / 60 / 60 / 24} days. `)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOs)