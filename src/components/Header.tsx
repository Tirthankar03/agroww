import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" bg-green-700 py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white  font-bold tracking-tight">
          <Link to="/">AGROWW</Link>
        </span>
        <div className='flex gap-5 '>
        <span className=" flex space-x-2">
          <Link to="/wishlist" className="flex bg-green-300 items-center text-black-600 px-3 font-bold hover:bg-gray-100">
            wishlist
          </Link>
        </span>
        <span className=" flex space-x-2">
          <Link to="/cart" className="flex bg-green-300 items-center text-black-600 px-3 font-bold hover:bg-gray-100">
            cart
          </Link>
        </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
