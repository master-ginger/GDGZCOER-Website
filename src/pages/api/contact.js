import connectToDatabase from "@/lib/mongodb";
import mongoose from "mongoose";

// Create a Mongoose Schema for storing the form data
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default async function handler(req, res) {
  // Handle POST request
  if (req.method === "POST") {
    try {
      await connectToDatabase(); // Connect to MongoDB

      const { name, email, subject, message } = req.body;

      // Create a new document using the model
      const newContact = new Contact({
        name,
        email,
        subject,
        message,
      });

      // Save to MongoDB
      await newContact.save();

      // Respond with a success message
      return res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to submit form" });
    }
  }

  // Handle other request methods (GET, PUT, etc.)
  res.status(405).json({ error: "Method Not Allowed" });
}
