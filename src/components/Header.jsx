import logo from "../assets/img/mian-logo.jpg";
import cart_icon from "../assets/img/cart_icon.png";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.quantity); //getting cart quantity from redux store
  const [menuactive, setMenuactive] = useState(false); //setting dropdown menuactive state for mobile devices
  const dropdownRef = useRef(null); // Add ref for dropdown container

  
  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuactive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 

  return (
    <nav className="flex justify-around items-center border shadow-md sticky top-0 left-0 right-0 bg-slate-50 z-50 uppercase">
      <Link to="/">
        <div className="flex items-center md:m-2 p-1 md:p-2 cursor-pointer">
        <img src={logo} alt="logo" className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" />

          <h1 className="mx-3 text-lg lg:text-3xl font-sans font-extrabold">
            ShoppyGlobe
          </h1>
        </div>
      </Link>
      <ul className="hidden md:flex space-x-10 font-serif font-medium items-center">
        <li className={`cursor-pointer hover:scale-105 hover:text-blue-500`}>
          <NavLink className="p-5" to="/">
            Home
          </NavLink>
        </li>
        <li className={`cursor-pointer hover:scale-105 hover:text-blue-500`}>
          <NavLink className="p-5" to="/products">
            Products
          </NavLink>
        </li>
        <li className={`cursor-pointer hover:scale-105 hover:text-blue-500 `}>
          <NavLink className="p-5" to="/bestsellers">
            BestSellers
          </NavLink>
        </li>

      </ul>
      <div className="m-2 p-2 cursor-pointer relative">
        <NavLink to="/cart">
          <img className="hover:scale-110" src={cart_icon} alt="cart icon" />
          {cartQuantity > 0 && (
            <span className="absolute top-0 right-[15px] bg-green-500 p-1 font-bold text-lg text-white rounded-full w-5 h-5 flex justify-center items-center">
              {cartQuantity}
            </span>
          )}
        </NavLink>
      </div>

      {/* Updated mobile menu container with ref */}
      <div className="block md:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setMenuactive(!menuactive)}
          className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${menuactive ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${menuactive ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${menuactive ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Updated dropdown menu */}
        <div
          className={`absolute top-full right-0 w-48 bg-white rounded-lg shadow-lg py-2 mt-2 transition-all duration-300 transform origin-top-right
            ${menuactive ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
          `}
        >
          <ul className="text-sm divide-y divide-gray-100">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/bestsellers", label: "Best Sellers" },
            ].map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-blue-50 transition-colors duration-200 ${
                      isActive ? 'text-blue-600 font-medium' : 'text-gray-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
