const jsonServer = require('json-server')
const auth = require('json-server-auth')
const middlewares = jsonServer.defaults()
// const cors = require('cors')


const app = jsonServer.create()
app.use(middlewares)
const router = jsonServer.router('db.json')

const rules = auth.rewriter({
   "users": 600,
   "/courses*": "/664/courses$1",
   "/tokens*": "/664/tokens$1"
})

// /!\ Bind the router db to the app
app.db = router.db

// let corsOptions = {
//    origin: 'http://localhost:3000',
//    optionsSuccessStatus: 200
//  }

// You must apply the auth middleware before the router
app.use(rules)
app.use(auth)
app.use(router)
// app.use(cors(corsOptions))
app.listen(3000)