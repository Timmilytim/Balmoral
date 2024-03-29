import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    emailjs.sendForm("service_3ec065v","template_5x99yyt", e.target, "-4clZnxGXip35uGsP")
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      location:'',
      message: '',
    });
  };

  return (
  <div className="feedbackall">
    <div className="container feedback">
      <h2 className='feed'>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">Location</label>
          <select required className="form-control" name="location" id="location" value={formData.location} onChange={handleChange}>
              <option value="">Select a location</option>
              <option value="Villa Valha Lagos (Ikoyi, Lagos State)">Villa Valha Lagos (Ikoyi, Lagos State)</option>
              <option value="Balmoral Convention Center(Federal Palace Hotel, Victoria Island, Lagos State)">Balmoral Convention Center(Federal Palace Hotel, Victoria Island, Lagos State)</option>
              <option value="Balmoral Convention Center (Sheraton Hotel Ikeja, Lagos State)">Balmoral Convention Center (Sheraton Hotel Ikeja, Lagos State)</option>
              <option value="The Balmoral Hall (Oregun Ikeja, Lagos State)">The Balmoral Hall (Oregun Ikeja, Lagos State)</option>
              <option value="The Balmoral Hall (Federal Palace Hotel, Victoria Island, Lagos State)">The Balmoral Hall (Federal Palace Hotel, Victoria Island, Lagos State)</option>
          </select>
        </div>


        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label> <br/>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-outline-success">Send Message</button>
      </form>
    </div>
  </div>  
  );
};

export default ContactForm;
