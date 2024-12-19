import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";

function App() {
  return (
    // uSING Browswe router

    <BrowserRouter>
      <Routes>
        {/* Using Nested Routes */}
        <Route element={<AppLayout />}>
          {/* HomePage */}
          <Route path="/" element={<Home />} />
          {/* Collection */}
          <Route path="/collection" element={<Collection />} />
          {/* About */}
          <Route path="/about" element={<About />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          {/* getting the product */}
          <Route path="/product/:productId" element={<Product />} />
          {/* cart page */}
          <Route path="/cart" element={<Cart />} />
          {/* login page */}
          <Route path="/login" element={<Login />} />
          {/* Place order page */}
          <Route path="/order-now" element={<PlaceOrder />} />
          {/*  order page */}
          <Route path="/orders" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
