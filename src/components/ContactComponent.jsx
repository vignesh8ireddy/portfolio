import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const ContactComponent = () => {
  return (
    <div className="text-gray-400 p-6 mt-8 lg:pt-24 mx-auto max-w-6xl font-title" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-6xl">
        <h2 className="text-4xl text-gray-800  text-center mb-12">CONTACT ME</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl pb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-gray-400 mr-2'></FaEnvelope>
                <a href="mailto:vigneshreddyireddy@gmail.com" className='hover:underline'>
                vigneshreddyireddy@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-gray-400 mr-2'></FaPhone>
                <a href="tel:+1-626-662-2321" className='hover:underline'><span>+1-626-662-2321</span></a>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-gray-400 mr-2'></FaMapMarkedAlt>
                <a href="https://www.google.com/maps?q=8829+Roosevelt+Way+NE,+Seattle,+WA+98115."  className='hover:underline'>
                <span>8829 Roosevelt Way NE, Seattle, WA 98115.</span></a>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Full Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-200 border focus:outline-none
                    focus:border-gray-400'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-200 border focus:outline-none
                    focus:border-gray-400'
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-200 border focus:outline-none
                    focus:border-gray-400'

                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                <button className='bg-gray-200 text-gray-800 hidden md:inline
            transform transition-transform duration-300 hover:scale-105 hover:bg-gray-300 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent;