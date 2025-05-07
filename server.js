import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/config/db.js"
import userRoutes from "./src/routes/userRoutes.js"
import { errorHandler } from "./src/middleware/errorMiddleware.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.json())

app.use("/users", userRoutes)

app.get("/", (req, res) => {
  res.send("Node.js MongoDB API - Use /users/:id to get user data")
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

