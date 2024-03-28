import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { resetCart } from "../store/features/productSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Link } from "react-router-dom";
import EmptyCard from "../components/EmptyCard";

function CartPage() {
  // const products: Product[] = Products
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  const [totalAmt, setTotalAmt] = useState(0);
  
  useEffect(() => {
    let price = 0;
    products.map((product) => {
      if (product.quantity) {        
        price += product.price * product.quantity;
        return price;
      }
    });
    setTotalAmt(price);
  }, [products]);

  return (
    <div className="container">
      {/* <h1 className="text-5xl text-primeColor font-titleFont font-bold">
        CART
      </h1> */}
{products.length == 0 ? (
  <EmptyCard title="YOUR CART IS EMPTY :)" subtitle="Your Shopping cart lives to serve. Give it a purpose - fill it with
  fresh greens! "/>
        
): (
  <div className="pb-20 mt-5">
  <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
    <h2 className="col-span-2">Product</h2>
    <h2>Price</h2>
    <h2>Quantity</h2>
    <h2>Sub Total</h2>
  </div>
  <div className="mt-5">
    {products.map((product) => (
      <div key={product.id}>
        <ItemCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          category={product.category}
          price={product.price}
          quantity={product.quantity}
        />
      </div>
    ))}
  </div>

  <div className="flex flex-row justify-between gap-2 ">
    <div>
      <button className="mt-4 py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300" onClick={() => dispatch(resetCart())}>
        Reset 
      </button>
    </div>
    <div className="max-w-7xl gap-4 flex justify-end mt-4">
      <div className="md:w-96  flex flex-col gap-4">
        <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
        <span className="font-bold tracking-wide text-lg font-titleFont hidden md:inline">
        Total
          </span>

          <span className="font-bold tracking-wide text-lg font-titleFont">
          ${totalAmt}
          </span>
        </p>
      </div>
    </div>
  </div>
</div>
)}

    </div>
  );
}

export default CartPage;
