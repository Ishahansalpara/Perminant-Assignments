import React, { useState, useRef } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const nameRef = useRef();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Form submitted! Focusing back to name field.");
    nameRef.current.focus();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          ref={nameRef}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
