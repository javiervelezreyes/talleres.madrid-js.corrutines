const GET  = 'get'
const POST = 'post'
const BASE = 'https://jsonplaceholder.typicode.com/posts/'
const _    = ''

let headers = {}
headers['content-type'] = 'application/json; charset=utf-8'
headers['header-X']     = 'Value X'
headers['header-Y']     = 'Value Y'
headers['header-Z']     = 'Value Z'

function execute (Gn) {
	let gn = Gn ()
	async function tick ({ value, done }) {
		if (done) return value
		else {
      let [method, url, data] = value
      let body = data && JSON.stringify ({ body: data })
      let response
      if (method == GET)  response = await fetch (BASE + url, { method })
      if (method == POST) response = await fetch (BASE + url, { method, body , headers })
      let json = await response.json ()
      let text = json.body
      tick (gn.next (text))
    }
	}
	tick (gn.next ())
}

function Test () {
  function get  (x) { return [GET, x]      }
  function post (x) { return [POST, _ , x] }

  execute (function * () {
    let x = yield get (1)
    let y = yield get (3)
    let z = yield post ('Hola Mundo')

    console.log (x)
    console.log (y)
    console.log (z)
  })
}

Test ()