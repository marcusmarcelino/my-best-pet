import express from 'express'

const routes = express.Router()

routes.post('/authenticate', (request, response) => {
  const { email, password } = request.body

  console.log('request ', { email, password })

  return response.json({ ok: 'Server started!' })
})

export default routes
