import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout>
          <HomePage/>
        </Layout>}/>

        <Route path="/wishlist" element={<Layout>
          <WishListPage/>
        </Layout>}/>     
        
        <Route path="/cart" element={<Layout>
          <CartPage/>
        </Layout>}/>
      </Routes>
    </Router>
  );
};

export default App;
