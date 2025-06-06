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
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 text-3xl font-bold">
              Let's Talk
            </h3>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                suvasanpui74@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhoneAlt className="inline-block text-green-400 mr-2"></FaPhoneAlt>
              <span>+91 7479108631</span>
            </div>
            <div className="mb-4">
              <SiLinkedin className="inline-block text-green-400 mr-2" />
              <span>
                <a href="https://linkedin.com/in/suva-sanpui">Linkedin</a>
              </span>
            </div>
            <div className="mb-4">
              <FaGithub className="inline-block text-green-400 mr-2" />
              <span>
                <a href="https://github.com/suvasanpui">GitHub</a>
              </span>
            </div>
            <div className="mb-4">
              <FaLocationDot className="inline-block text-green-400 mr-2"></FaLocationDot>
              <span> Kolkata, Diamond Harbour, WB, India , 743375</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" ref={form} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block mb-2">
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Contact Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white 
                transform transition-transform duration-300 hover:scale-105 px-12 py-2 rounded-lg"
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
