function Aggregate (fn) {
  return function * (...gns) {
    let values
    let end = false
    while (!end) {
      values = []
      for (let gn of gns) {
        let next = gn.next () 
        let { value } = next 
        let { done  } = next 
        !done && (values = [...values, value])
        end = end || done
      }
      !end && (yield fn (...values))
    }
  }
}

function * Range (min, max) {
  let idx = min
  while (idx <= max) {
    yield idx++
  }
}

function Test () {
  function A (x, y) { return x + y  }
  function B (x, y) { return [x, y] }

  let RA = Range (1, 5)
  let RB = Range (1, 5)
  let RC = Range (6, 10)
  let RD = Range (6, 10)

  let AA = Aggregate (A) (RA, RC)
  let AB = Aggregate (B) (RB, RD)

  console.log ([...AA], [...AB])
}

Test ()