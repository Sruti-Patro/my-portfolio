import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Profile image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
          <img 
            src="/profile.png" // Replace with your actual image path
            alt="Sruti Patro"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About text */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            I’m Sruti Patro, a passionate MERN Stack Developer focused on building clean, responsive UIs and powerful APIs.
          </p>
          <p className="text-gray-400">
            From backend logic to frontend polish, I love turning ideas into full-fledged apps. Always learning, always shipping.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
