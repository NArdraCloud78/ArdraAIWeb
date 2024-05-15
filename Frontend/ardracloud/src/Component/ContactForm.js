
import React, { useState } from 'react';
import axios from 'axios';
 import './Contactform.css'



function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/var/contact', formData);
      console.log(response.data);
  
      if (response.status === 200) {

        console.log('Form submitted successfully!');
      } else {
    
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };
  

 return (
  <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name: <span className="required">*</span></label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email: <span className="required">*</span></label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="message">Message: <span className="required">*</span></label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="form-group text-center mb-3">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
);

}

export default ContactForm;
