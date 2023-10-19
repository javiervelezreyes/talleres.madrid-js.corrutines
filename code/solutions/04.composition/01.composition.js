function * Map (gn, fn) {
  while (true) {
    let { value } = gn.next ()
    yield fn (value)
  }
}

function * Filter (gn, pn) {
  while (true) {
    let ok, value
    do {
      value = gn.next ().value
      ok    = pn (value) 
    } while (!ok)
    yield value
  }
}

function * Take (gn, n) {
  while (true) {
    let values = []
    let idx   = 0
    while (idx < n) {
      let {value} = gn.next ()
      values = [...values, value]
      idx++
    }
    yield values
  }
}

function * Range (min, max) {
  let idx = min
  while (idx <= max) {
    yield idx++
  }
}

function Test () {
  function A (x) { return x * x    }
  function B (x) { return -x       }
  function C (x) { return  (x % 2) }
  function D (x) { return !(x % 2) }

  let SA = Range (1, 10) 
  let SB = Range (1, 10)
  let SC = Range (1, 10)
  let SD = Range (1, 10)
  let SE = Range (1, 20)
  let SF = Range (1, 20)

  let MA = Map    (SA, A)
  let MB = Map    (SB, B)
  let FC = Filter (SC, C)
  let FD = Filter (SD, D)
  let TE = Take   (SE, 2)
  let TF = Take   (SF, 3)

  for (let idx = 0; idx < 5; idx++) {
    console.log (
      MA.next ().value, 
      MB.next ().value
    )
  }

  for (let idx = 0; idx < 5; idx++) {
    console.log (
      FC.next ().value, 
      FD.next ().value
    )
  }

  for (let idx = 0; idx < 5; idx++) {
    console.log (
      TE.next ().value, 
      TF.next ().value
    )
  }
}

Test ()