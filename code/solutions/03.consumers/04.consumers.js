function * Evens (fn, gn) {
  while (true) {
    let value = yield
     (value % 2) && fn (value)
    !(value % 2) && gn (value)
  }
}

function * Level (fn, gn, hn) {
  while (true) {
    let value = yield
     !!(value > 0)  && fn (value)
     !!(value > 5)  && gn (value)
     !!(value > 10) && hn (value)
  }
}

function Test () {
  function A (x) { console.log ('[A] - ', x) }
  function B (x) { console.log ('[B] - ', x) }
  function C (x) { console.log ('[C] - ', x) }

  let E1 = Evens (A, B)
  let E2 = Evens (A, B)

  let L1 = Level (A, B, C)
  let L2 = Level (A, B, C)

  for (let x of [1, 2, 3, 7, 12, 23]) {
    E1.next (x)
    E2.next (x)
    L1.next (x)
    L2.next (x)
  }
}

Test ()
