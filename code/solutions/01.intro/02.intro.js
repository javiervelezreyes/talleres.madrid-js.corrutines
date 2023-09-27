let { random } = Math

function * Market () {
  while (true) {
    yield (100 * random () - 50) | 0
  }
}

function * Bank () {
  let end    = false
  let global = 0
  while (!end) {
    let value = yield
    (value) && (global = global + value)
    end = !value
  }
  return global
}

let market = Market ()
let bank   = Bank ()
let idx    = 0
bank.next ()

while (idx < 10) {
  let { value } = market.next ()
  bank.next (value)
  idx++
}

let { value } = bank.next ()
console.log (value)