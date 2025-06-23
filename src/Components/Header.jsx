import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-bold"
      : "text-gray-700 hover:text-blue-500";

  return (
    <>
      {/* Search Bar Slide-Down */}
      <div
        className={`fixed top-0 left-0 w-full z-40 bg-white shadow transition-transform duration-300 ease-in-out ${
          showSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
          />
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 left-0 w-full z-50 bg-white shadow transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <img src="/logoimage.png" alt="logo" className="w-32 md:w-48" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-700">
            <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/market" onClick={closeMenu} className={navLinkClass}>
              Market
            </NavLink>
            <NavLink to="/events" onClick={closeMenu} className={navLinkClass}>
              Events
            </NavLink>
            <NavLink to="/landing" onClick={closeMenu} className={navLinkClass}>
              Landing
            </NavLink>
            <NavLink to="/blog" onClick={closeMenu} className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/donate" onClick={closeMenu} className={navLinkClass}>
              Donate
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
              Contact
            </NavLink>
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <FaSearch />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 text-xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-40">
            <div className="flex flex-col items-start px-6 py-4 space-y-4 text-gray-700">
              <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/market" onClick={closeMenu} className={navLinkClass}>
                Market
              </NavLink>
              <NavLink to="/events" onClick={closeMenu} className={navLinkClass}>
                Events
              </NavLink>
              <NavLink to="/landing" onClick={closeMenu} className={navLinkClass}>
                Landing
              </NavLink>
              <NavLink to="/blog" onClick={closeMenu} className={navLinkClass}>
                Blog
              </NavLink>
              <NavLink to="/donate" onClick={closeMenu} className={navLinkClass}>
                Donate
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
                Contact
              </NavLink>
              <button
                onClick={() => {
                  setShowSearch((prev) => !prev);
                  closeMenu();
                }}
                className="text-gray-600 hover:text-black focus:outline-none  cursor-pointer"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
