const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'support@ardracloud.com',
    pass: 'mdrq mfhf gokm mswk' 
  }
});

const contactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    
    const supportMailOptions = {
      from: 'support@ardracloud.com',
      to: 'support@ardracloud.com', 
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    
    transporter.sendMail(supportMailOptions, (error, info) => {
      if (error) {
        console.error('Error occurred while sending email to support:', error);
        
      } else {
        console.log('Email sent to support:', info.response);
        
      }
    });

    
    const thankYouMailOptions = {
      from: 'support@ardracloud.com',
      to: req.body.email, 
      subject: 'Thank You for Contacting Us',
      text: `Dear ${name},\n\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nThe Support Team`
    };

    // Send thank-you email to the client
    transporter.sendMail(thankYouMailOptions, (error, info) => {
      if (error) {
        console.error('Error occurred while sending thank-you email to the client:', error);
        
        res.status(500).json({ success: false, message: 'An error occurred while sending the thank-you email.' });
      } else {
        console.log('Thank-you email sent to the client:', info.response);
        res.status(200).json({ success: true, message: 'Your message has been sent successfully. Thank you for contacting us.' });
      }
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ success: false, message: 'An error occurred while processing the contact form.' });
  }
};

module.exports = { contactForm };
