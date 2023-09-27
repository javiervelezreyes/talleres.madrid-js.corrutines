function Dispatcher (dn) {
  return function * (...gns) {
    let selector = dn (...gns)
    while (true) {
      let value = yield
      let gn    = selector (value)
      gn.next (value)
    }   
  }
}

function * Range (min, max) {
  let idx = min
  while (idx <= max) {
    yield idx++
  }
}

function Simple (Gn) {
  let gn = Gn ()
  gn.next ()
  return gn
}

function Complex (Gn) {
  return function (...args) {
    let gn = Gn (...args)
    gn.next ()
    return gn
  }
}

function Test () {
  let X = (gx, gy) => x => x % 2 ? gx : gy
  let Y = (gx, gy) => x => x > 5 ? gx : gy

  function * A () { while (true) console.log ('[A] - ', yield) }
  function * B () { while (true) console.log ('[B] - ', yield) }
  function * C () { while (true) console.log ('[C] - ', yield) }
  function * D () { while (true) console.log ('[D] - ', yield) }

  let R  = Range (1, 10)
  let LA = Simple (A)
  let LB = Simple (B)
  let LC = Simple (C)
  let LD = Simple (D)

  let DA = Complex (Dispatcher (X)) (LA, LB)
  let DB = Complex (Dispatcher (Y)) (LC, LD)

  for (let x of Range (1, 5))  DA.next (x)
  for (let x of Range (1, 10)) DB.next (x)
}

Test ()