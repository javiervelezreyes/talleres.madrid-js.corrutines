function * Push (fn, gn) {
  while (true) {
    let value = fn (yield)
    gn && gn.next (value)
  }
}

function Chain (fn, gn) {
  let g = Push (fn, gn)
  g.next ()
  return g
}

function * Range (min, max) {
  let idx = min
  while (idx <= max) {
    yield idx++
  }
}

function Test () {
  function A (x) { return x + 1    }
  function B (x) { return x * 2    }
  function C (x) { console.log (x) }

  let ABC = Chain (A, Chain (B, Chain (C)))
  
  for (let x of Range (1, 5)) {
    ABC.next (x)
  }
}

Test ()