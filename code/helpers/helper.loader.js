const SCRIPT = 'script'
const TYPE   = 'type'
const MODULE = 'module'
const SOURCE = 'src'


let page = document
let head = page.head
let body = page.body

function LHelper (path) {

  let loaded = false

  async function load () {
    if (!loaded) {
      let script = page.createElement (SCRIPT)
      script.setAttribute (TYPE, MODULE)
      script.setAttribute (SOURCE, path)
      head.appendChild (script)
    }
  }

  async function execute () {
    let response = await fetch (path) 
    let text     = await  response.text ()
    let script   = page.createElement (SCRIPT)
    script.setAttribute (TYPE, MODULE)
    script.textContent = text
    head.appendChild (script)
  }


  return { 
    load,
    execute
  }
} 

export default LHelper