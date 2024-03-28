import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/store";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const handleMenu = () => setOpen((prev) => !prev); 

  const navigate = useNavigate();
  const location = useLocation();
  const products = useAppSelector((state) => state.product.products);
  const wishlists = useAppSelector((state) => state.product.wishlist);


  return (
    <div className="bg-green-800 sticky top-0 z-[1]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-extrabold cursor-pointer" onClick={() => navigate('/')}>
              AGROWW
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <a
                  className={`text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    location.pathname === '/' ? 'bg-green-700' : ''
                  }`}
                  onClick={() => navigate('/')}
                >
                  Home
                </a>
                <span className=" flex space-x-2 relative">
            <a
                  className={`text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    location.pathname === '/wishlist' ? 'bg-green-700' : ''
                  }`}
                  onClick={() => navigate('/wishlist')}
                >
                  Wishlist
                </a>
                {wishlists.length > 0 && (
            <p className="absolute top-1 right-1 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {wishlists.length}
            </p>
          )}

                </span>

                <span className=" flex space-x-2 relative">
                <a
                  className={`text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    location.pathname === '/cart' ? 'bg-green-700' : ''
                  }`}
                  onClick={() => navigate('/cart')}
                >
                  Cart
                </a>
                {products.length > 0 && (
            <p className="absolute top-1 right-1 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
                </span>
            </div>
          </div>
          {/* Hamburger Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
                  className={`text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    location.pathname === '/' ? 'bg-green-700' : ''
                  }`}
                  onClick={() => navigate('/')}
                >
                  Home
                </a>
                <a
                  className={`text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    location.pathname === '/wishlist' ? 'bg-green-700' : ''
                  }`}
                  onClick={() => navigate('/wishlist')}
                >
                  Wishlist
                </a>

                <a
                  className={`text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    location.pathname === '/cart' ? 'bg-green-700' : ''
                  }`}
                  onClick={() => navigate('/cart')}
                >
                  Cart
                </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
