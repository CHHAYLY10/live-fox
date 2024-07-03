import { NextPage } from "next";
import Footer from "@/components/Layout/Navigation/Footer/Footer";
import Header from "@/components/Layout/Navigation/Header/Header";
import ProductDetail from "@/views/Product/ProductsDetail";

const ProductDetailPage: NextPage = () => {
  return (
    <>
      <Header />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
