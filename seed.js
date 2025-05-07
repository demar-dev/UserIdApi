import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err)
    process.exit(1)
  })

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
})

const User = mongoose.model("User", userSchema)

const users = [
  {
    name: "John Doe",
    email: "johndoe@email.com",
    age: 30,
  },
  {
    name: "Jane Smith",
    email: "janesmith@email.com",
    age: 25,
  },
  {
    name: "Bob Johnson",
    email: "bob@email.com",
    age: 19,
  },
  {
    name: "Alice Williams",
    email: "alice@email.com",
    age: 22,
  },
]

async function seedDatabase() {
  try {
    await User.deleteMany({})
    console.log("Cleared existing users")

    const createdUsers = await User.insertMany(users)
    console.log(`Added ${createdUsers.length} users`)

    createdUsers.forEach((user) => {
      console.log(`User: ${user.name}, ID: ${user._id}, Age: ${user.age}`)
    })

    mongoose.disconnect()
    console.log("Database seeding completed")
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  }
}

seedDatabase()

