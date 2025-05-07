import dotenv from "dotenv"
import User from "../models/userModel.js"
import connectDB from "../config/db.js"

dotenv.config()

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

const importData = async () => {
  try {
    await connectDB()

    await User.deleteMany({})
    console.log("Data cleared...")

    const createdUsers = await User.insertMany(users)
    console.log(`${createdUsers.length} users imported!`)

    createdUsers.forEach((user) => {
      console.log(`User: ${user.name}, ID: ${user._id}, Age: ${user.age}`)
    })

    process.exit()
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await connectDB()

    await User.deleteMany({})
    console.log("Data destroyed!")

    process.exit()
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}

