const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

const rules = auth.rewriter({
   "users": 600,
   "/courses*": "/664/courses$1",
   "/tokens*": "/664/tokens$1"
})

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(rules)
app.use(auth)
app.use(router)
app.listen(3000)