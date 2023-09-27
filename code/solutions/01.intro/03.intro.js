let { random } = Math

function * Market () {
  while (true) {
    yield (100 * random () - 50) | 0
  }
}

function * Bank () {
  let end    = false
  let values = []
  while (!end) {
    let value = yield values
    value && (values = [...values, value])
    end = !value
  }
}

let market = Market ()
let bank   = Bank ()
let idx    = 0
bank.next ()

while (idx < 10) {
  let { value } = market.next ()
  let next      = bank.next (value)
  console.log (next.value)
  idx++
}
