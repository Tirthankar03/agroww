import ItemCard from "../components/ItemCard";
import { Product } from "../libs/type";
import { useAppSelector } from "../store/store";

function CartPage() {
    // const products: Product[] = Products

    const products = useAppSelector(state=>state.product.products);
  return (
    <div className='container'>
      <h1 className="text-5xl text-primeColor font-titleFont font-bold">
        CART
      </h1>
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
                <ItemCard       key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      description={product.description}
      category={product.category}
      price={product.price} />
              </div>
            ))}
          </div>


          
<div className="flex flex-row justify-between">
    <div>
    <button
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>
    </div>
    <div className="max-w-7xl gap-4 flex justify-end mt-4">
    <div className="w-96 flex flex-col gap-4">
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    123
                  </span>
                </p>
    </div>
    </div>

</div>

          </div>
    </div>
  );
}

export default CartPage;
