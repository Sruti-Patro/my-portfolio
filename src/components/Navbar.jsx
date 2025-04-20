import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, to: "home", label: "Home" },
    { id: 2, to: "about", label: "About" },
    { id: 3, to: "projects", label: "Projects" },
    { id: 4, to: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sruti Patro</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-base">
          {links.map(({ id, to, label }) => (
            <li key={id}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-blue-400"
                className="hover:text-blue-400 cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile Nav */}
        {navOpen && (
          <ul className="absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center space-y-6 py-6 md:hidden">
            {links.map(({ id, to, label }) => (
              <li key={id}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setNavOpen(false)}
                  className="hover:text-blue-400 cursor-pointer text-lg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
