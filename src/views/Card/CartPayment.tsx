import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { StateProps, StoreProduct } from "@/shared/types";
import FormattedPrice from "@/components/Formatted/FormattedPrice";
import { IoBagCheckOutline } from "react-icons/io5";

const CartPayment = () => {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);

  //Checkout payments
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { data: session } = useSession();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: productData, email: session?.user?.email }),
    });
    const checkoutSession = await response.json();

    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error.message);
    }
  };
  return (
    <div className="border-t w-full border-gray-200 px-4 py-6 sm:px-6">
      <div className="justify-between text text-base font-medium text-gray-900">
        <div className="flex justify-between text-2xl">
          <p>Total</p>
          <span className="font-bold text-xl">
            <FormattedPrice amount={totalAmount} />
          </span>
        </div>
        {userInfo ? (
          <div className="flex mt-6 mb-3">
            <button
              onClick={handleCheckout}
              className="flex w-full h-10 items-center justify-center text-center bg-gray-200 rounded-lg hover:bg-green-600 hover:text-white duration-300"
            >
              <IoBagCheckOutline className="text-3xl" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex mt-6 ">
              <button className="flex w-full h-10 items-center justify-center text-center bg-gray-200 rounded-lg hover:bg-red-700 hover:text-white duration-300">
                <IoBagCheckOutline className="text-3xl" />
              </button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
                Please login Before Checkout
              </p>
            </div>
          </>
        )}
      </div>
      <p className="mt-1 text-center text-sm text-gray-500 hover:text-green-600">
        Shipping and taxes are calculated at checkout.
      </p>
    </div>
  );
};

export default CartPayment;
