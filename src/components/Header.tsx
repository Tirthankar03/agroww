import { Link } from "react-router-dom";
import { useAppSelector } from "../store/store";
function Header() {
  const products = useAppSelector((state) => state.product.products);
  const wishlists = useAppSelector((state) => state.product.wishlist);
  return (
    <div className="sticky top-0 z-[1] mx-auto  flex w-full bg-green-700 flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white  font-bold tracking-tight">
          <Link to="/">AGROWW</Link>
        </span>
        <div className='flex gap-5 '>
        <span className=" flex space-x-2 relative">
          <Link to="/wishlist" className="flex bg-green-300 items-center text-black-600 px-3 font-bold hover:bg-gray-100">
            wishlist
          </Link>
          {wishlists.length > 0 && (
            <p className="absolute top-1 right-1 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {wishlists.length}
            </p>
          )}
        </span>
        <span className=" flex space-x-2 relative">
          <Link to="/cart" className="flex bg-green-300 items-center text-black-600 px-6 font-bold hover:bg-gray-100 ">
            cart
          </Link>
          {products.length > 0 && (
            <p className="absolute top-1 right-1 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
        </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
