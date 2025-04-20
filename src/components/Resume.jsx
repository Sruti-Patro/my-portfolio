import React from 'react';

const Resume = () => {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-8">Get in Touch</h2>
      <a
        href="/Sruti_Patro.pdf" // Replace with your actual file path
        download="Sruti_Patro.pdf"
        className="bg-blue-400 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
