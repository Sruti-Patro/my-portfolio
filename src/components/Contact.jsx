import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('/api/messages', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-400 hover:bg-blue-500 transition text-white py-3 rounded-lg font-medium"
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-green-400 text-center">Thanks! I’ll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 text-center">Oops! Something went wrong.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
