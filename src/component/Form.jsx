import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_vdrof3i', // Get this from EmailJS
        'template_ewfqh3c', // Get this from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ijeomaonuajurx@gmail.com', // Your email address
        },
        'fvRHaGt4rgpUfGaWf' // Get this from EmailJS
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Email error:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full px-6 py-3 ${
            status === 'sending' 
              ? 'bg-gray-400' 
              : 'bg-black hover:bg-black/40'
          } text-white rounded-lg transition`}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        
        {/* Status Messages */}
        {status === 'success' && (
          <p className="text-green-600 text-center mt-2">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center mt-2">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;