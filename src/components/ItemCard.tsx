import { ImCross } from "react-icons/im"
import { Product } from "../libs/type"
import { useAppDispatch } from "../store/store";
import { decreaseCount, deleteProduct, increaseCount } from "../store/features/productSlice";


function ItemCard(props: Product) {
    console.log(props);
    const dispatch = useAppDispatch();
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
                  onClick={() => dispatch(deleteProduct(props.id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={props.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{props.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
        ₹{props.price}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
            onClick={() => dispatch(decreaseCount(props))}
          >
            -
          </span>
          <p>{props.quantity}</p>
          <span
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
            onClick={() => dispatch(increaseCount(props))}
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>₹{props.quantity * props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCard