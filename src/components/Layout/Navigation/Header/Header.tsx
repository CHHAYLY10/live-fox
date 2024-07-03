import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateProps } from "@/shared/types";
import { signIn, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addUser } from "@/utils/nextSlice";
import { FaUserTie } from "react-icons/fa6";
import CartPage from "@/views/Card/cart";
import MyImage from "@/components/Image";
import ProfileDetail from "@/components/Profile/ProfileDetail";

export default function Header() {
  const { data: session } = useSession();
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userInfo, allProducts } = useSelector(
    (state: StateProps) => state.next
  );

  const dispatch = useDispatch();
  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts]);
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <nav className="border-gray-200 dark:bg-gray-900 bg-amazon_blue text-lightText sticky top-0 z-50 left-[0] right-[0] bg-[#fff] [box-shadow:0_1rem_1rem_rgba(0,_0,_0,_0.05)]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Link href="/">
            <MyImage
              src="/assets/logos/Untitled_design-aP57R6AJY-transformed.png"
              width={111}
              height={49}
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            />
          </Link>
        </a>
        <div className="flex p-2 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            className="mx-3 mt-2"
            type="button"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            {userInfo ? (
              <ProfileDetail img={userInfo.image} />
            ) : (
              <div
                onClick={() => signIn()}
                className="mb-2 text-[25px] text-[gray]"
              >
                <FaUserTie />
              </div>
            )}
          </button>

          <button className="text-[25px] text-[gray] cursor-pointer relative [transition:transform_.4s_ease] border-[none] bg-transparent hover:scale-110">
            <span className="absolute -right-[8px] text-[12px] text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
              {productData ? productData.length : 0}
            </span>
            <CartPage />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              className="text-[1.2rem] scroll-smooth scroll-pt-[8.5rem] overflow-x-hidden mx-4 my-[0] text-[#666] hover:text-[black] hover:border-b-[2px_solid_black]"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="text-[1.2rem] scroll-smooth scroll-pt-[8.5rem] overflow-x-hidden mx-4 my-[0] text-[#666] hover:text-[black] hover:border-b-[2px_solid_black]"
              href={"/product"}
            >
              <a onClick={() => setLoading(true)} /> Products
            </Link>
            <Link
              className="text-[1.2rem] scroll-smooth scroll-pt-[8.5rem] mx-4 my-[0] text-[#666] hover:text-[black] hover:border-b-[2px_solid_black]"
              href={"/about"}
            >
              About Us
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
