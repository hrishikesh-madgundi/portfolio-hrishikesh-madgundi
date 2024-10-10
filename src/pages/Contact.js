import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center">Let's Connect!</h1>
        <p className="mt-4 text-lg text-black text-center">Reach out to me through any of the platforms below. I promise I'm friendly!</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* LinkedIn Card */}
          <div className="bg-blue-50 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <FaLinkedin className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">LinkedIn</h2>
            <p className="mt-2 text-gray-700">Let’s get professional! Connect with me on LinkedIn for some serious tech talk.</p>
            <a href="https://www.linkedin.com/in/hrishikesh-madgundi-b31b0a1ba/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
              Visit LinkedIn
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <FaGithub className="text-gray-800 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">GitHub</h2>
            <p className="mt-2 text-gray-700">Peek into my code lab! Maybe you’ll find some cool projects (or bugs... shh!).</p>
            <a href="https://github.com/hrishikesh-madgundi" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-gray-800 hover:text-gray-900">
              Visit GitHub
            </a>
          </div>

          {/* Gmail Card */}
          <div className="bg-red-50 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <MdEmail className="text-red-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Email</h2>
            <p className="mt-2 text-gray-700">Prefer the classic way? Drop me an email, and I’ll get back to you soon!</p>
            <a href="mailto:hrishibmadgundi@gmail.com" className="inline-block mt-4 text-red-600 hover:text-red-800">
              Send an Email
            </a>
          </div>

          {/* Twitter Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <FaSquareXTwitter className="text-gray-800 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">X</h2>
            <p className="mt-2 text-gray-700">Follow me for random thoughts, tech tweets, and maybe a meme or two!</p>
            <a href="https://twitter.com/hmadgundi" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-gray-800 hover:text-gray-900">
              Visit X
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-pink-50 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <FaInstagram className="text-pink-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Instagram</h2>
            <p className="mt-2 text-gray-700">See what’s up in my non-tech world. Spoiler: mostly food and sunsets!</p>
            <a href="https://instagram.com/hbm__illustration" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-pink-500 hover:text-pink-700">
              Visit Instagram
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-green-50 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <FaWhatsapp className="text-green-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">WhatsApp</h2>
            <p className="mt-2 text-gray-700">Shoot me a message on WhatsApp! No spams, promise.</p>
            <a href="https://wa.me/8788079480" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-green-500 hover:text-green-700">
              Message Me
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
