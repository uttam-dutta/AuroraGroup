'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import Button from "../Button";
import Image from 'next/image';
const ContactUs = () => {
    
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Message sent successfully');
        // Clear the form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88">Contact Us</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            We'd love to hear from you! Feel free to get in touch with us for any inquiries, collaborations, or feedback.
          </p>
        </div>
        
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image 
              className="inline-block rounded-md"
              src='/Contact-Us.jpeg'
              key='/building-supplies-1.jpg'
              alt="image"
              width={300}
              height={300}
            />
          </div>
      </section>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 mb-8 xl:mb-0">
          <p className="bold-20 text-white">Send us a Message</p>
          <form className="regular-16 text-gray-20" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Your Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Your Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500"></textarea>
            </div>
            <Button type="submit" title="Send Message" variant="bg-blue-500 text-white"/>
          </form>
        </div>
        
        <div className="relative z-20 flex flex-col items-start flex-1 xl:flex-row">
          <div className="relative z-20 flex flex-1 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 xl:ml-8">
            <p className="bold-20 text-white">Contact Information</p>
            <ul className="regular-16 text-gray-20 space-y-4">
              <li>Address: Osho Villa Apartment flat no. 101, D.V.C Road, Road no.1, Gardanibagh,P.O.-G.P.O, P.S - Gardanibagh, District- Patna (Bihar)- 800001</li>
              <li>Phone: +91 72729 74388</li>
              <li>Email: auroragroup321@gmail.com</li>
            </ul>
          </div>  
        </div>
    

      </section>
    </>
  );
};

export default ContactUs;
