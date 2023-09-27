function * Observer (fn) {
  while (true) {
    let value = yield
    fn (value)
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
  function A (x) { console.log ('[Observer A] - ', x) }
  function B (x) { console.log ('[Observer B] - ', x) }

  let O  = Create (Observer)
  let OA = O (A)
  let OB = O (B)

  for (let x of [1, 2, 3]) {
    OA.next (x)
    OB.next (x)
  }
}

Test ()
