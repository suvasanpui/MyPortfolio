import { useRef, useState } from "react";
import {
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const form = useRef();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, message } = formData;

    if (!name || !email || !contact || !message) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      setError("Contact number must contain exactly 10 digits.");
      return;
    }

    setError("");
    
    const SERVICE_ID="service_rlslnen";
    const TEMPLATE_ID="template_llm1xls";
    const PUBLIC_KEY="f_eMG99h9ow1jI-3L";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormData({ name: '', email: '', contact: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
  };

  return (
    <div className="bg-[#1B1B1E] text-white py-20 min-h-screen flex items-center justify-center" id="contact">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Contact Me
          </span>
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-10 items-stretch gap-8 md:gap-0">
          {/* Contact Info Card */}
          <div className="flex-1 bg-blue-900/20 rounded-2xl shadow-lg p-8 mb-8 md:mb-0 flex flex-col justify-center min-w-[280px]">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 text-3xl font-bold mb-6">
              Let&apos;s Talk
            </h3>
            <div className="space-y-5">
              <div className="flex items-center">
                <FaEnvelope className="text-red-500 mr-3 text-lg" />
                <a href="mailto:youremail@example.com" className="hover:underline break-all">suvasanpui74@gmail.com</a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-green-400 mr-3 text-lg" />
                <span>+91 7479108631</span>
              </div>
              <div className="flex items-center">
                <SiLinkedin className="text-sky-500 mr-3 text-lg" />
                <a href="https://linkedin.com/in/suva-sanpui" className="hover:underline" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-gray-300 mr-3 text-lg" />
                <a href="https://github.com/suvasanpui" className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="flex items-center">
                <FaLocationDot className="text-red-500 mr-3 text-lg" />
                <span>Kolkata, Diamond Harbour, WB, India, 743375</span>
              </div>
            </div>
          </div>
          {/* Contact Form Card */}
          <div className="flex-1 bg-blue-900/20 rounded-2xl shadow-lg p-8 flex flex-col justify-center min-w-[280px]">
            <form className="space-y-6" ref={form} onSubmit={handleSubmit} autoComplete="off">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-200">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-[#1B1B1E] placeholder-gray-400 transition-shadow shadow-sm focus:shadow-lg"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-200">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-[#1B1B1E] placeholder-gray-400 transition-shadow shadow-sm focus:shadow-lg"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block mb-2 font-semibold text-gray-200">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-[#1B1B1E] placeholder-gray-400 transition-shadow shadow-sm focus:shadow-lg"
                  placeholder="Enter Your Contact Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-200">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 text-[#1B1B1E] placeholder-gray-400 transition-shadow shadow-sm focus:shadow-lg"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              {error && <p className="text-red-500 font-semibold">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-blue-500 text-[#1B1B1E] font-bold py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
