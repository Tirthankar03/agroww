import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
import ProductPage from "./pages/ProductPage";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout title="A store for the greens!" subtitle='get all the agricultural items at a single stop....'>
          <HomePage/>
        </Layout>}/>

        <Route path="/wishlist" element={<Layout title="WISHLIST" subtitle="get all your favorite items here">
          <WishListPage/>
        </Layout>}/>     
        
        <Route path="/cart" element={<Layout title="CART" subtitle="see all your saved goods">
          <CartPage/>
        </Layout>}/>

        <Route path="product/:id" element={<Layout title="PRODUCT" subtitle="details of the product">
          <ProductPage/>
        </Layout>}/>
      </Routes>
    </Router>
  );
};

export default App;
