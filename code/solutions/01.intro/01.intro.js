let { random } = Math

function * Market () {
  while (true) {
    yield (100 * random () - 50) | 0
  }
}

let market = Market ()
let values = []
let idx    = 0
while (idx < 10) {
  let { value } = market.next ()
  values = [...values, value]
  idx++
}

console.log (values)