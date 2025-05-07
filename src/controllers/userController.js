import mongoose from "mongoose"
import User from "../models/userModel.js"

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid user ID format" })
    }

    const user = await User.findOne({
      _id: id,
      age: { $gt: 21 },
    })

    if (!user) {
      return res.status(404).json({ error: "User not found or age requirement not met" })
    }

    res.json(user)
  } catch (error) {
    console.error("Error fetching user:", error)
    res.status(500).json({ error: "Server error" })
  }
}

