import React, { useState, type ChangeEvent, type FormEvent } from 'react';

// Define the structure of our form state for TypeScript
interface FormDataState {
  name: string;
  email: string;
  message: string;
}

export  function BecomesellerPage() {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Type-safe change handler for both inputs and textareas
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Type-safe form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Your Google Form Action URL
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5G650oPThEb9q0Rj8tL6ujwvGU6GSzLBDuQ_hjYWXj-h-2Q/formResponse";

    // 2. Map your React state keys to the Google Form Entry IDs
    const formBody = new URLSearchParams();
    formBody.append("entry.1624703242", formData.name);   // Replace with your actual entry ID
    formBody.append("entry.315030985", formData.email);  // Replace with your actual entry ID
    formBody.append("entry.459704137", formData.message); // Replace with your actual entry ID

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg max-w-md mx-auto my-10 border border-green-200">
        <h3 className="text-green-800 font-bold text-xl">Thank You!</h3>
        <p className="text-green-600 mt-2">Your response has been customized and sent successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10 p-6 bg-slate-900 text-white rounded-2xl shadow-xl space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-indigo-400">Get in Touch</h2>
      <p className="text-sm text-slate-400">Customized frontend feeding straight into Google Forms.</p>

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4} /* Fixed TypeScript compiler issue here */
          className="w-full px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        />
      </div>

      <button 
        type="submit" 
        className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 font-semibold rounded-lg transition duration-200 shadow-lg shadow-indigo-600/30"
      >
        Submit Details
      </button>
    </form>
  );
}