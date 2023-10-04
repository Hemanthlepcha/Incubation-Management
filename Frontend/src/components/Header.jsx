import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logg.png";
import cross from "../assets/cross.svg";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
      setMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial view on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderDesktopMenu = () => {
    return (
      <ul className="flex space-x-4">
  <li>
    <Link
      exact
      to="/"
      activeClassName="text-blue-500"
      className="text-gray-700 hover:text-blue-300 font-bold text-xl px-5 py-3"
      // Adjust the font size (text-xl) and padding (px-5 py-3) as needed
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/service"
      activeClassName="text-blue-500"
      className="text-gray-700 hover:text-blue-300 font-bold text-xl px-5 py-3"
      // Adjust the font size (text-xl) and padding (px-5 py-3) as needed
    >
      Our Services
    </Link>
  </li>

  <li>
    <Link
      to="/program"
      activeClassName="text-blue-500"
      className="text-gray-700 hover:text-blue-300 font-bold text-xl px-5 py-3"
      // Adjust the font size (text-xl) and padding (px-5 py-3) as needed
    >
      Our Programs
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      activeClassName="text-blue-500"
      className="text-gray-700 hover:text-blue-300 font-bold text-xl px-5 py-3"
      // Adjust the font size (text-xl) and padding (px-5 py-3) as needed
    >
      About Us
    </Link>
  </li>
</ul>

    );
  };

  const renderMobileMenu = () => {
    return (
      <nav
        className={`fixed right-0 top-0 h-screen w-64 bg-blue-200 z-50 md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMobileMenu} className="p-5">
            <img src={cross} alt="Close" className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              exact
              to="/"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-gray-900"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-gray-900"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/program"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-gray-900"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/startup"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-gray-900"
            >
              Startups
            </Link>
          </li>
          {/* <li>
            <Link
              to="/testimonial"
              activeClassName="text-blue-500"
              className="text-gray-700 hover:text-gray-900"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <button
              style={{ backgroundColor: "#FFDE59", color: "black" }}
              className="hover:bg-blue-600 py-2 px-4 rounded"
              onClick={toggleMobileMenu}
            >
              <Link to="/signin">Sign In</Link>
            </button>
          </li>
          <li>
            <button
              style={{ backgroundColor: "white", color: "black" }}
              className="hover:bg-green-600 py-2 px-4 rounded"
            >
              <Link to="/signup">Sign Up</Link>
            </button>
          </li> */}
        </ul>
      </nav>
    );
  };

  return (
    <header className=" bg-white flex items-center justify-between p-4 sticky mb-4 top-0 z-10 shadow-md  ">
      <div className="Logo">
        <img
          src={logo}
          alt="Registration"
          className="mx-auto  ml-10"
          style={{ width: "250px", height: "120px" }}
        />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-600 focus:outline-none focus:text-gray-900"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      {isMobileView ? renderMobileMenu() : renderDesktopMenu()}
    </header>
  );
}

export default Header;
