/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="success-wrapper bg-white select-none font-sans font-bold text-center uppercase ">
      <div className="flex mt-2 justify-center">
        {/* <MyImage
        src="/assets/artwork/img/[removal.ai]_b8561994-e952-487e-a7c5-dd8d9592f89b-29369.png"
        className="py-5"
        width={500}
        height={400}
      /> */}
        <img
          width={450}
          src="https://img.freepik.com/free-vector/cash-delivery-concept_23-2148786295.jpg?t=st=1711643908~exp=1711647508~hmac=5d1c90c5e39069487e85011cc3eaef76838f7f35e751e3a486e119ff270215de&w=740"
          alt=""
        />
      </div>

      <div>
        <div className="py-5">
          <h2>Thank you for your order!</h2>
          <p>Check your email inbox for the receipt.</p>
        </div>
        <Link href="/product">
          <button className="inline-block px-6 py-3 border border-gray-700 rounded transition-all duration-200 relative overflow-hidden text-black z-10 hover:text-white hover:border-black hover:bg-black">
            Continue Shopping
            <span className="absolute left-1/2 transform -translate-x-1/2 scale-y-0 scale-x-125 top-full w-140 h-180 bg-opacity-5 rounded-full transition-all duration-500 delay-100"></span>
            <span className="absolute left-1/2 transform -translate-x-1/2 scale-y-0 scale-x-145 top-180 w-160 h-190 bg-black rounded-full transition-all duration-500 delay-100"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
