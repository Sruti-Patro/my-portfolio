import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white px-4"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Hi, I'm Sruti Patro
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        MERN Stack Developer | Building clean UIs & APIs
      </p>

      <div className="flex space-x-8 text-3xl text-blue-400">
        <a
          href="https://github.com/Sruti-Patro"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/sruti-patro"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:patrocorgi29@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Hero;
