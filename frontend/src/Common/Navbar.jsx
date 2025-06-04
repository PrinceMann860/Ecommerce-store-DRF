import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Logo from "../assets/logo 12.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="m-0 p-0 max-w-screen">
      <nav className="flex justify-between bg-black h-[100px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[100px] h-auto" />
          <h1 className="text-3xl text-white">
            Quick<span className="text-yellow-400">Buy</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex text-white gap-6 text-2xl">
            {/* Nav Links */}
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/Product" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Products</li>
            </NavLink>
            <NavLink to="/category" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Category</li>
            </NavLink>
            <NavLink to="/About" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink to="/chatbot" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Help</li>
            </NavLink>
          </ul>
        </div>

        {/* Cart, Login, and Mobile Menu */}
        <div className="flex gap-2 items-center mr-5 text-white relative">
          {/* Cart Icon */}
          <NavLink to="/cart">
            <MdOutlineShoppingCart size={30} className="hidden lg:block" />
          </NavLink>

          <FaBars size={30} className="lg:hidden mx-[5px]" onClick={toggleMenu} />
          {/* Login Button */}
          {isAuthenticated ? (
            <div className="relative">
              <button onClick={toggleDropdown}>
                <img src={user.picture} alt={user.name} className="rounded-full w-10 border-white border-2" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 mr-[-19px] bg-white rounded-md shadow-lg py-2 z-20">
                  <p className="px-4 text-end text-amber-400">Welcome!</p>
                  <p className="px-4 text-end text-xs text-gray-800">{user.name}</p>
                  <p className="px-4 pb-3 text-end text-xs text-gray-800 border-b-2">{user.email}</p>
                  <NavLink to="/Profile" ><p className="w-full text-right px-4 py-2 text-gray-800 ">Profile</p></NavLink>
                  <NavLink to="/my-orders" ><p className="w-full text-right px-4 py-2 text-gray-800 ">Orders</p></NavLink>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="w-full text-right px-4 py-2 text-gray-800 hover:bg-red-200"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => loginWithRedirect()} className="hidden lg:flex bg-yellow-400 text-black px-5 py-1 font-semibold rounded-md">
              Log in
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white text-2xl p-4">
          <ul className="flex flex-col gap-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/Product" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>Products</li>
            </NavLink>
            <NavLink to="/category" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>Category</li>
            </NavLink>
            <NavLink to="/About" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")} onClick={toggleMenu}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink to="/chatbot" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>
              <li>Help</li>
            </NavLink>
            {isAuthenticated ? null : (
              <button onClick={() => loginWithRedirect()} className="text-start">
                Log in
              </button>
            )}
            <NavLink to="/cart">
              <li className="flex">
                <MdOutlineShoppingCart size={30} />
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}
