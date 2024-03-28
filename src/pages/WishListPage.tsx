import Card from "../components/Card"
import EmptyCard from "../components/EmptyCard";
import { Product } from "../libs/type"
import { useAppSelector } from "../store/store";


function WishListPage() {

    const wishlists = useAppSelector((state) => state.product.wishlist);

    return (
      <>
          {wishlists.length === 0 ? (
              <EmptyCard title="YOU HAVE NO WISHLISTS :(" subtitle="Check our awesome collection and get your fresh greens now!" />
          ) : (
              <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
                  {wishlists.map((product) => (
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
                  ))}
              </div>
          )}
      </>
  );
}

export default WishListPage