"use client"
import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5";
import { useState } from "react";

export default function Form() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormResponse("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormResponse(result.error || "Something went wrong!");
      }
    } catch (error) {
      setFormResponse("An error occurred while submitting the form.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-wrap bg-gray-100 min-h-screen p-10">
      {/* Form Section */}
      <div className="flex-1 bg-yellow-400 rounded-lg shadow-lg p-8 m-4">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Connect with Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-[50%] p-4 border-b-2 border-gray-600 focus:outline-none focus:border-green-500 rounded-lg text-lg"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-[50%] p-4 border-b-2 border-gray-600 focus:outline-none focus:border-green-500 rounded-lg text-lg"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-[50%] p-4 border-b-2 border-gray-600 focus:outline-none focus:border-green-500 rounded-lg text-lg"
            />
          </div>
          <div className="mb-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-[50%] p-4 border-b-2 border-gray-600 focus:outline-none focus:border-green-500 rounded-lg text-lg"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none transition-colors text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        {formResponse && (
          <div className="mt-4 text-center text-lg text-green-600">{formResponse}</div>
        )}
      </div>
    </div>
  );
}

