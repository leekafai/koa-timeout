const crypto = require('crypto')
const get1 = () => crypto.randomBytes(4)
const get2 = () => Math.random()
const repeat = (times = 0, fn) => {
  for (let i = 0; i < times; i++) {
    const x = fn()
    console.log(x)
  }
}
const times = 2e4
console.time('1')
repeat(times, get1)
console.timeEnd('1')
console.time('2')
repeat(times, get2)
console.timeEnd('2')