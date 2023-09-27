function * ShuffleA (gx, gy) {
  yield* gx
  yield* gy
}

function * ShuffleB (gx, gy) {
  let end
  while (!end) {
    let vx = gx.next ()
    let vy = gy.next ()
    vx.value && (yield vx.value)
    vy.value && (yield vy.value)
    end = vx.done || vy.done
  }
}

function * Range (min, max) {
  let idx = min
  while (idx <= max) {
    yield idx++
  }
}

function Test () {
  let RA = Range (1, 5)
  let RB = Range (1, 5)
  let RC = Range (6, 10)
  let RD = Range (6, 10)

  let SA = ShuffleA (RA, RC)
  let SB = ShuffleB (RB, RD)

  console.log ([...SA], [...SB])
}

Test ()