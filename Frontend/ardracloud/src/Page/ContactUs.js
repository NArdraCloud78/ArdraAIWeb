import React from 'react';
import ContactForm from '../Component/ContactForm';
import './Contact.css'

function ContactUs() {
  return (
    <div className='container'>
      <div className='row  justify-content-center'>
        <div className='col-md-6 shadow-sm  mb-3 p-4'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
