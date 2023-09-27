function* Pull (fn, gn) {
  while (true) {
    let {value} = gn.next ()
    yield fn (value)
  }
}

function Chain (fn, gn) {
  let g = Pull (fn, gn)
  return g
}

function * Range (min, max) {
  let idx = min
  while (idx <= max) {
    yield idx++
  }
}

function Test () {
  function A (x) { return x * 2    }
  function B (x) { return x + 1    }

  let ABC = Chain (A, Chain (B, Range (1, 5)))

  for (let idx = 0; idx < 5; idx++) {
    console.log (ABC.next ().value)
  }
}

Test ()