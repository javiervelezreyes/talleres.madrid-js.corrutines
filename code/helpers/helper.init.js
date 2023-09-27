import LHelper from './helper.loader.js'

function Init () {
  let TYPE  = 'button'
  let EVENT = 'click'
  let PATH  = 'path'

  let buttons = document.querySelectorAll (TYPE)
  for (let button of buttons) {
    button.addEventListener (EVENT, async function () {
      let path    = button.getAttribute (PATH)
      let lHelper = LHelper (path)
      lHelper.execute ()
    })
  }
}

Init ()
    