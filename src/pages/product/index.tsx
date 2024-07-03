import Layout from "@/components/Layout/Layout";
import { StoreProduct } from "@/shared/types";
import { setAllProducts } from "@/utils/nextSlice";
import Products from "@/views/Product/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface ProductProps {
  productData: StoreProduct;
}

export default function ProductPage({ productData }: ProductProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllProducts({ allProducts: productData }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);

  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
