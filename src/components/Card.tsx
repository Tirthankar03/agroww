import { Link } from "react-router-dom";
import { Product } from "../libs/type";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useAppDispatch } from "../store/store";
import { addToCart } from "../store/features/productSlice";

function Card(props: Product) {
    const [heart, setHeart] = useState(true);
    const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col w-full h-full !p-4 bg-green-500 shadow-lg rounded-lg">
        <div className="relative w-full h-full">
          <div className=" aspect-w-3 aspect-h-3 bg-white rounded-lg mb-5">
            <img src={props.image} className="object-contain" alt="" />
          </div>
          <div className="absolute top-1 left-3 font-bold text-2xl pt-4 text-black">
            {props.name}
          </div>
          <button
            onClick={() => setHeart(!heart)}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-green-700 p-2 text-white hover:cursor-pointer  hover:bg-green-600 shadow-lg "
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl">
              {heart ? (
                <FaRegBookmark />
              ) : (
                <FaBookmark className="text-white" />
              )}
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">

              Price: ₹ {props.price}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
            {" "}
              Type: {props.category}{" "}
            </p>
          </div>
        </div>



          <div className="flex flex-1 items-end gap-3 flex-row-reverse">
          <button
            onClick={() => dispatch(addToCart({...props, quantity: 1}))}
            className="linear rounded-[20px] bg-green-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-green-700 active:bg-green-700"
          >
            Add to cart
          </button>

          <Link
            to={`/details/${props.id}`}
            className="linear rounded-[20px] bg-green-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-green-700 active:bg-green-700"
          >
            Details
          </Link>
          </div>


    </div>
  );
}

export default Card;
