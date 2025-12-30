import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      return setFeedback("Please fill all fields!");
    }

    try {
      const response = await fetch("https://js2-ecommerce-api.vercel.app/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setFeedback("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); 
      } else {
        setFeedback("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
      <p>{feedback}</p>
    </form>
  );
}

