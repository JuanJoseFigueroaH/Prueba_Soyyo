import { app } from './app'

const start = async () => {
  const PORT = process.env.PORT || 3001;
  process.env.NODE_ENV = 'dev'
  if (!PORT) {
    throw new Error('Port must be defined')
  }
  try {
    app.listen(PORT, () => {
      console.log(`Swagger route: http://localhost:${PORT}/swagger`)
      console.log(`listen on port: ${PORT} backend`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
