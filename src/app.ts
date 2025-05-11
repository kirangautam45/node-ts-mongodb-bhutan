import express, { Express } from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes'

// 💡 Initialize Express app
const app: Express = express()

// 🛡️ Middleware
app.use(cors())
app.use(express.json())

// 🧭 Routes
app.use('/api/users', userRoutes)

// 🏠 Root route
app.get('/', (req, res) => {
  res.send(`
    🚀 API is running...

    🌐 Status: Online
    📅 Uptime: ${Math.floor(process.uptime())} seconds
    📘 Endpoints:
      - GET /api/users ➡️ Fetch all users
      - POST /api/users ➡️ Create a new user

    🛠 Built with Express + TypeScript + MongoDB
  `)
})

export default app
