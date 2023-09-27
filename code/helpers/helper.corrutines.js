export function Simple (gn) {
  let g = gn ()
  g.next ()
  return g
}

export function Complex (gn) {
  return function (...args) {
    let g = gn (...args)
    g.next ()
    return g
  }
}
