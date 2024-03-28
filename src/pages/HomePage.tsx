import Card from "../components/Card"
import { Products } from "../constants/dummy"
import { Product } from "../libs/type"


function HomePage() {

  const products: Product[] = Products
  return (
    <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
    {products?.map((product) => (
      <Card
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      description={product.description}
      category={product.category}
      price={product.price}
      wishlist={product.wishlist}
    />
    )) }
    

    </div>
  )
}

export default HomePage