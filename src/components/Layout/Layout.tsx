import BrandsComponent from "../Brands/Brands";
import Footer from "./Navigation/Footer/Footer";
import Header from "./Navigation/Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <BrandsComponent />
      <Footer />
    </div>
  );
}
