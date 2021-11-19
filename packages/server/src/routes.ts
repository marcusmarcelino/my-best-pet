import express, { response } from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ ok: 'Server started!' })
})

export default routes
