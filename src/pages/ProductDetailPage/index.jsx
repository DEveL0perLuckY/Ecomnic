import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductDetailIndex = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default ProductDetailIndex;
