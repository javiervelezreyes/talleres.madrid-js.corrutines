function * Logger (log) {
  while (true) {
    let value = yield
    log (value)
  }
}

function Create (Gn) {
  return function (...args) {
    let gn = Gn (...args)
    gn.next ()
    return gn
  }
}

function Test () {
  function A (x) { console.log ('[A] - ', x) }
  function B (x) { console.log ('[B] - ', x) }

  let Log  = Create (Logger)
  let LA = Log (A)
  let LB = Log (B)

  for (let x of [1, 2, 3]) {
    LA.next (x)
    LB.next (x)
  }
}

Test ()
