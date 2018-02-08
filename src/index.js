import express from 'express'
import path from 'path'

const debug = require('debug')('backend')
debug.enabled = true

const app = express()
app.use((req, res, next) => {
	debug(req.method, req.path)
	next()
})
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
app.get('/api', (req, res) => res.json({Hello: 'World!'}))
app.listen(5000, () => debug('Listening on port', 5000))
