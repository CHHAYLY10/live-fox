/* eslint-disable @next/next/no-img-element */
export default function Footer () {
  return (
    <div className="bg-[#000] text-[#8a8a8a] text-[14px] pt-[60px] px-[0] pb-[20px]">
      <div className="max-w-[1300px] m-auto pl-[25px] pr-[25px]">
        <div className="flex items-center flex-wrap justify-around">
          <div className="[flex-basis:30%]">
            <h3 className="text-[#ffffff] mb-[20px]">Download Our App</h3>
            <p className="text-[#8a8a8a]">
              Download App for Android and iso mobile phone.
            </p>
            <div className="flex mt-[20px]">
              <img
                className="w-[140px] mr-5"
                src="https://i.ibb.co/KbPTYYQ/play-store.png"
                alt=""
              />
              <img
                className="w-[140px]"
                src="https://i.ibb.co/hVM4X2p/app-store.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex-1 text-center">
            <img
              className="w-[200px] mb-[20px] ml-[30%] "
              src="https://i.ibb.co/j3FNGj7/logo-white.png"
              alt=""
            />
            <p className="text-[#8a8a8a]">
              Our Purpose Is To Sustainably Make the Pleasure and Benefits of
              Sports Accessible to the Many.
            </p>
          </div>

          <div className="[flex-basis:12%] text-center">
            <h3 className="text-[#ffffff] mb-[20px]">Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>

          <div className="[flex-basis:12%] text-center">
            <h3 className="text-[#ffffff] mb-[20px]">Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr className="border-[none] bg-[#b5b5b5] h-px mx-[0] my-[20px]" />
        <p className="text-center text-[#8a8a8a]">
          Hunter
        </p>
      </div>
    </div>
  );
}
