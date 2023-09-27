function execute (Gn) {
	let gn = Gn ()
	function tick ({ value, done }) {
		if (done) return value
		else {
      let fn  = value
      let out = fn ()
      !!(out > 0) && tick (gn.next  (out))
       !(out > 0) && tick (gn.throw (Error ('Negative value: '+ out)))
    }
	}
	tick (gn.next ())
}

function Defer (fn) {
  return function (...args) {
    return function () {
      return fn (...args)
    }
  }
}

function Test () {
  let add = Defer (function (x, y) { return x + y })
  let sub = Defer (function (x, y) { return x - y })
  let mul = Defer (function (x, y) { return x * y })
  let div = Defer (function (x, y) { return x / y })

  execute (function * () {
    try {
      let x = yield add (3, 2)
      let y = yield sub (2, 4)
      let z = yield mul (x, y)
      
      console.log (yield div (z, 2))
    }
    catch (e) {
      console.error ('Ups!!!', e)
    }
  })
}

Test ()