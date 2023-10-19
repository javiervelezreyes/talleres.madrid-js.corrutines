function execute (Gn) {
	let gn = Gn ()
	function tick ({ value, done }) {
		if (done) return value
		else {
      let p = value
      p.then (function (x) {
			 tick (gn.next (x))
		  })
    }
	}
	tick (gn.next ())
}

function Async (fn) {
  return function (...args) {
    return new Promise (function (ok) {
      setTimeout (function () {
        let value = fn (...args)
        ok (value)
      }, 100)
    })
  }
}

// function Test () {
//   let aAdd = Async (function (x, y) { return x + y })
//   let aSub = Async (function (x, y) { return x - y })
//   let aMul = Async (function (x, y) { return x * y })
//   let aDiv = Async (function (x, y) { return x / y })

//    execute(function () {
//     let x = yield aAdd (3, 2)
//     let y = yield aSub (4, 2)
//     let z = yield aMul (x, y)
    
//     console.log (yield aDiv (z, 2))
//   })
// }

function Wait (ms) {
  return new Promise (function (ok) {
    setTimeout (ok, ms)
  })
}

function BonusA () {
  execute (function * () {
    let idx = 0
    while (true) {
      yield Wait (500)
      console.log (idx++)
    }
  })
}

function BonusB () {
  (async function () {
    let idx = 0
    while (true) {
      await Wait (500)
      console.log (idx++)
    }
  })()
}

function BonusC () {
  let idx = 0
  while (true) {
    Wait (500).then (function () {
      console.log (idx++)
    })
  }
}

//Test ()

//BonusA ()
// BonusB ()
BonusC ()