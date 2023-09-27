function * StoreA () {
  let store = []
  let value
  do {
    value = yield
    value && (store = [...store, value])
  } while (value)
  return store
}

function * StoreB () {
  let store = ''
  let value
  do {
    value = yield
    value && (store = store + value)
  } while (value)
  return store
}

function * StoreC () {
  let store = 0
  let value
  do {
    value = yield
    value && (store = store + value)
  } while (value)
  return store
}

function Create (Gn) {
  let gn = Gn ()
    gn.next ()
    return gn
}

function Test () {  
  let SA = Create (StoreA)
  let SB = Create (StoreB)
  let SC = Create (StoreC)

  for (let x of [1, 2, 3]) {
    SA.next (x)
    SB.next (x)
    SC.next (x)
  }
  console.log (
    SA.next ().value,
    SB.next ().value,
    SC.next ().value
  )
}

Test ()
