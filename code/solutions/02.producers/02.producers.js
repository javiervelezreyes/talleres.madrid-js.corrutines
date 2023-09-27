function * Natural () {
  let idx = 0
  while (true) {
    yield idx++
  }
}

function * Even () {
  let idx = 0
  while (true) {
    yield idx
    idx = idx + 2
  }
}

function * Odd () {
  let idx = 1
  while (true) {
    yield idx
    idx = idx + 2
  }
}

function Test () {
  let R1 = Natural ()
  let R2 = Even ()
  let R3 = Odd ()

  for (let idx = 0; idx < 10; idx++) {
    let v1 = R1.next ().value
    let v2 = R2.next ().value
    let v3 = R3.next ().value
    console.log ([v1, v2, v3])
  }
}

Test ()
