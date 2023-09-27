function * Fact (n) {
  let idx = 1
  let out = 1
  while (idx <= n) {
    yield out = out * idx
    idx++
  }
}

function * Fib (n) {
  let idx = 0
  let a   = 0
  let b   = 1
  while (idx < n) {
    [ a, b ] = [ b, a + b ]
    yield a
    idx++
  }
}

function Test () {
  let R1 = Fact (5)
  let R2 = Fib  (10)

  console.log ([...R1])
  console.log ([...R2])
}

Test ()
