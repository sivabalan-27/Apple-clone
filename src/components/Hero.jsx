import iphone17 from "../images/iphone17.jpg";
import iphone17Mobile from "../images/iphone17-mobile.png";
function Hero() {
    return (
      <div className="bg-black text-center w-full">
        <h1 className="text-white p-2 pt-10 text-5xl font-bold">iPhone 17 Pro</h1>
        <h3 className="text-white font-bold p-2 text-2xl">All out Pro</h3>
        <h4 className="text-gray-300 text-xl p-2">Available from 19 Sep</h4>
  
        <div className="flex justify-center gap-4 mt-3">
          <button className="text-white bg-blue-600 w-28 py-2 px-3 rounded-3xl hover:bg-blue-700">
            Learn More
          </button>
          <button className="text-blue-600 w-28 py-2 rounded-3xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white">
            Pre-Order
          </button>
        </div>
  
        <div className="w-full sm:pt-20 ">
          <picture>
            {/* Mobile image (up to 640px) */}
            <source srcSet={iphone17Mobile} media="(max-width: 640px)" />
            {/* Desktop image */}
            <img
              src={iphone17}
              alt="iPhone 17"
              className="w-7/12 mx-auto h-auto object-contain"
            />
          </picture>
        </div>
      </div>
    );
  }
  
  export default Hero;
  