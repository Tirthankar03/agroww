import Card from "../components/Card"
import { useAppSelector } from "../store/store";


function WishListPage() {

    const wishlists = useAppSelector((state) => state.product.wishlist);

  return (
    <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
    {wishlists?.map((product) => (
      <Card
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      description={product.description}
      category={product.category}
      price={product.price}
      wishlist={true}
    />
    )) }
    

    </div>
  )
}

export default WishListPage