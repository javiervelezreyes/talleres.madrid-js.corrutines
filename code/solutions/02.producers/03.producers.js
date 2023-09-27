function * Letters (text) {
  let tokens = text.split ('')
  let max    = tokens.length
  let idx    = 0
  while (idx < max) {
    yield tokens[idx++]
  }
}

function * Words (text) {
  let tokens = text.split (' ')
  let max    = tokens.length
  let idx    = 0
  while (idx < max) {
    yield tokens[idx++]
  }
}

function Test () {
  let R1 = Letters ('Hola Mundo')
  let R2 = Words   ('Hola Mundo')

  console.log ([...R1])
  console.log ([...R2])
}

Test ()
