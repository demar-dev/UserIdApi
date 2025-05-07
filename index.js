// const express = require("express")
// const mongoose = require("mongoose")
// require("dotenv").config()

// const app = express()
// const PORT = process.env.PORT || 3000

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => {
//     console.error("MongoDB connection error:", err)
//     process.exit(1)
//   })

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// })

// const User = mongoose.model("User", userSchema)

// app.get("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ error: "Invalid user ID format" })
//     }

//     const user = await User.findOne({
//       _id: id,
//       age: { $gt: 21 },
//     })

//     if (!user) {
//       return res.status(404).json({ error: "User not found or age requirement not met" })
//     }

//     res.json(user)
//   } catch (error) {
//     console.error("Error fetching user:", error)
//     res.status(500).json({ error: "Server error" })
//   }
// })

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

