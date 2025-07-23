import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_02bya23",
        "template_ne9j6hs",
        form.current,
        "IReNZdTPKf7ZBkr9y"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center py-24 px-4 md:px-8 lg:px-12 gap-10"
    >
      {/* Left: Contact Info Card */}
      <div className="w-full md:w-1/2 max-w-md bg-[#18181b] p-8 rounded-2xl shadow-lg border border-gray-800 mb-10 md:mb-0">
        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
        <div className="flex items-start mb-6">
          <FaEnvelope className="text-blue-500 text-2xl mr-4 mt-1" />
          <div>
            <div className="font-bold text-white">Email</div>
            <div className="text-gray-300">gaushulazamazam786@gmail.com</div>
          </div>
        </div>
        <div className="flex items-start mb-6">
          <FaPhone className="text-blue-500 text-2xl mr-4 mt-1" />
          <div>
            <div className="font-bold text-white">Phone</div>
            <div className="text-gray-300">7347849223</div>
          </div>
        </div>
        <div className="flex items-start">
          <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4 mt-1" />
          <div>
            <div className="font-bold text-white">Location</div>
            <div className="text-gray-300">Snagrur, Punjab</div>
          </div>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>
        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
