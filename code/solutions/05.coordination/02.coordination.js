function * Round (...gns) {
  let idx = 0
  let max = gns.length
  while (true) {
    let value = yield
    gns[idx].next (value)
    idx = (idx + 1) % max
  }
}

function * Flood (...gns) {
  while (true) {
    let value = yield
    for (let gn of gns) {
      gn.next (value)
    }
  }
}

function * Chain (...gns) {
  while (true) {
    let value = yield
    for (let gn of gns) {
      value = gn.next (value).value
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
  function * A () { while (true) console.log ('[A] - ', yield) }
  function * B () { while (true) console.log ('[B] - ', yield) }
  function * C () { while (true) console.log ('[C] - ', yield) }
  function * D () { while (true) console.log ('[D] - ', yield) }

  let RA = Simple (A)
  let RB = Simple (B)
  let R  = Complex (Round) (RA, RB)
  for (let x of Range (1, 5)) R.next (x)

  let RC = Simple (C)
  let RD = Simple (D)
  let F  = Complex (Flood) (RC, RD)
  for (let x of Range (1, 5)) F.next (x)
}

Test ()