let I = Symbol.iterator

function Range (min, max) {
  return {
    *[I] () {
      let idx = min
      while (idx <= max) {
        yield idx++
      }
    }
  }
}

function List (...xs) {
  return {
    *[I] () {
      let idx = 0
      let max = xs.length
      while (idx < max) {
        yield xs[idx++]
      }
    }
  }
}

function Test () {
  let R1 = Range (0, 5)
  let R2 = Range (5, 9)

  let L1 = List (1, 2, 3)
  let L2 = List (4, 5, 6)

  console.log ([...R1], [...R2])
  console.log ([...L1], [...L2])
}

Test ()
