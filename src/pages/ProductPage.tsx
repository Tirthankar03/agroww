import { useParams } from 'react-router-dom'
import { Products } from '../constants/dummy';
import { Product } from '../libs/type';
import { addToCart, addToWishlist, removeFromWishlist } from '../store/features/productSlice';
import { useAppDispatch } from '../store/store';
import { useState } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';



function ProductPage() {
  const {id} = useParams()
  
  const products: Product[] = Products
  

  const product = products.find((e) => {
    return e.id === id
  })


if (product) {
    const [wishlistState, setWishlistState] = useState(product.wishlist || false);
  const dispatch = useAppDispatch();

  const handleToggleWishlist = () => {
      setWishlistState(!wishlistState); 
      if (product) {
      if (!wishlistState) {
            dispatch(addToWishlist(product));
        } else {
            dispatch(removeFromWishlist(product.id));
        }
    }
  };


    
  return (
    <div className='pt-32 pb-23 lg:py-32  flex items-center'>
    <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex flex-1 justify-center items-center lg:mb-0'>
            <div className='relative'>
            <img className='max-w-[200px] lg:max-w-sm' src={product.image} alt="" />

            <button
                className="absolute top-3 left-3 flex items-center justify-center rounded-full bg-green-700 p-2 text-white hover:cursor-pointer  hover:bg-green-600 shadow-lg "
                onClick={handleToggleWishlist}
            >
                <div className="flex h-full w-full items-center justify-center rounded-full text-xl">
                    {wishlistState ? (
                        <FaBookmark className="text-white" />
                    ) : (
                        <FaRegBookmark />
                    )}
                </div>
            </button>
            </div>
            
        </div>
        <div className='flex-1 text-center lg:text-left '>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{product.name}</h1>
            <div className='text-xl text-red-500 font-medium'>₹{product.price}</div>
            <p className='mb-8'>{product.description}</p>
            <div className='flex flex-1 gap-10  '>
            <button            
        onClick={() => dispatch(addToCart({...product, quantity: 1}))}
             className=' bg-green-400 px-8 py-4 text-white hover:cursor-pointer  hover:bg-green-500 shadow-lg'>Add to cart</button>
            </div>
        </div>
        
        </div>
    </div>
</div>

)
    
}


  if (!product) {
    return (
        <div>Loading....</div>
    )
  }



}

export default ProductPage