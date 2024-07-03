import { FaApple } from "react-icons/fa6";
import { AiFillAndroid } from "react-icons/ai";
import { PiFigmaLogo } from "react-icons/pi";
import { IoLogoChrome } from "react-icons/io5";
import Link from "next/link";

export default function Testimonial() {
  return (
    <div className="flex justify-center m-10">
      <div>
        <div className="items-center justify-around pt-[100px] m-auto px-[35px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-[1500px]">
            <Link href="https://www.apple.com/app-store/" target="_blank">
              <div className="[flex-basis:20%] mx-5 rounded-xl min-w-[270px] min-h-[300px] mb-[30px] text-center px-[20px] py-[40px] [box-shadow:0_0_20px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer [transition:transform_0.5s] hover:-translate-y-[10px]">
                <div className="text-[5rem] mx-[35%] mb-5 items-center">
                  <FaApple />
                </div>
                <div className="text-[33px] font-bold">iOS App</div>
                <p className="text-[18px] font-semibold mx-[0] my-[12px] text-[#777777] line-clamp-3">
                  Create, browse and save palettes on the go
                </p>
              </div>
            </Link>

            <Link href="https://play.google.com/store/apps?hl=en" target="_blank">
              <div className="[flex-basis:20%] mx-5 rounded-xl min-w-[270px] min-h-[300px] mb-[30px] text-center px-[20px] py-[40px] [box-shadow:0_0_20px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer [transition:transform_0.5s] hover:-translate-y-[10px]">
                <div className="text-[5rem] mx-[35%] mb-5 items-center">
                  <AiFillAndroid />
                </div>
                <div className="text-[34px] font-bold">Android App</div>
                <p className="text-[18px] font-semibold mx-[0] my-[12px] text-[#777777] line-clamp-3">
                  Thousands of palettes in your pocket
                </p>
              </div>
            </Link>

            <Link href="https://www.figma.com/" target="_blank">
              <div className="[flex-basis:20%] mx-5 rounded-xl min-w-[270px] min-h-[300px] mb-[30px] text-center px-[20px] py-[40px] [box-shadow:0_0_20px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer [transition:transform_0.5s] hover:-translate-y-[10px]">
                <div className="text-[5rem] mx-[35%] mb-5 items-center">
                  <PiFigmaLogo />
                </div>
                <div className="text-[34px] font-bold">Figma Plugin</div>
                <p className="text-[18px] font-semibold mx-[0] my-[12px] text-[#777777] line-clamp-3">
                  All palettes right in your workspace
                </p>
              </div>
            </Link>

            <Link href="https://chat.openai.com/" target="_blank">
              <div className="[flex-basis:20%] mx-5 rounded-xl min-w-[270px] min-h-[300px] mb-[30px] text-center px-[20px] py-[40px] [box-shadow:0_0_20px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer [transition:transform_0.5s] hover:-translate-y-[10px]">
                <div className="text-[5rem] mx-[35%] mb-5 items-center">
                  <IoLogoChrome />
                </div>
                <div className="text-[34px] font-bold">Chrome</div>
                <p className="text-[18px] font-semibold mx-[0] my-[12px] text-[#777777] line-clamp-3">
                  Get and edit a palette every new tap
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
