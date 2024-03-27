import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout>
          <HomePage/>
        </Layout>}/>

        <Route path="/wishlist" element={<Layout>
          <p>Wishlist</p>
        </Layout>}/>     
        
        <Route path="/cart" element={<Layout>
          <p>Cart</p>
        </Layout>}/>
      </Routes>
    </Router>
  );
};

export default App;
