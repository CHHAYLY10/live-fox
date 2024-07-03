/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Brands() {
  return (
    <div className="mx-[auto] my-[100px]">
      <div className="max-w-[1080px] m-auto pl-[25px] pr-[25px]">
        <div className="flex items-center flex-wrap justify-around">
          <div className="w-[160px]">
            <Link href="https://www.oppo.com/en/" target="_blank">
              <img
                className="w-full cursor-pointer filter grayscale-[100%] hover:w-full hover:cursor-pointer hover:filter hover:grayscale-0"
                src="https://i.ibb.co/vjrRZFM/logo-oppo.png"
                alt=""
              />
            </Link>
          </div>

          <div className="w-[160px]">
            <Link href="https://www.coca-colacompany.com/" target="_blank">
              <img
                className="w-full cursor-pointer filter grayscale-[100%] hover:w-full hover:cursor-pointer hover:filter hover:grayscale-0"
                src="https://i.ibb.co/3zs234S/logo-coca-cola.png"
                alt=""
              />
            </Link>
          </div>

          <div className="w-[140px]">
            <Link href="https://live.dev.wonderpass.asia/" target="_blank">
              <img
                className="w-full cursor-pointer filter grayscale-[100%] hover:w-full hover:cursor-pointer hover:filter hover:grayscale-0"
                src="http://localhost:3002/assets/logos/logo.svg?w=256&q=75"
                alt=""
              />
            </Link>
          </div>

          <div className="w-[160px]">
            <Link href="https://www.paypal.com/kh/home" target="_blank">
              <img
                className="w-full cursor-pointer filter grayscale-[100%] hover:w-full hover:cursor-pointer hover:filter hover:grayscale-0"
                src="https://i.ibb.co/7Wt343W/logo-paypal.png"
                alt=""
              />
            </Link>
          </div>

          <div className="w-[160px]">
            <Link href="https://www.phillipbank.com.kh/en" target="_blank">
              <img
                className="w-full cursor-pointer filter grayscale-[100%] hover:w-full hover:cursor-pointer hover:filter hover:grayscale-0"
                src="https://i.ibb.co/GVSNwJD/logo-philips.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
