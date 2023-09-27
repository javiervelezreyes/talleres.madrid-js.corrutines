let task = (x, y) => 100 * x/ y | 0
let log  = (x)    => console.log (`Done ${x}%...`)

function Holter (Gn, n) {
  let gn  = Gn ()
  let end = false
  let idx = 1
  while (!end) {
    let { done } = gn.next ()
    end = end || done 
    log (task (idx, n))
    idx++
  }
}

function Test () {
  Holter (function * () {
    console.log ('Task A')
    yield
    console.log ('Task B')
    yield
    console.log ('Task C')
  }, 3)
}

Test ()