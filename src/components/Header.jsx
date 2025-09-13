import iphone17Air from "../images/iPhone-17-air.jpg";

function Header() {
  return (
    <div className="mt-5 text-center bg-gray-50">
            <h1 className="p-2 text-5xl pt-4 text-black font-bold">iPhone 17</h1>
            <h3 className="font-semibold text-black text-2xl">Magichromatic</h3>
            <p className="pt-3 text-gray-600 text-xl">Available from 19 Sep</p>
            <div className="mt-4 flex justify-center gap-5">
            <button className="text-white bg-blue-600 w-28 py-2 px-3 rounded-3xl hover:bg-blue-700">Learn More</button>
            <button className="text-blue-600 w-28 py-2 rounded-3xl border-2 border-blue-400 hover:bg-blue-600 hover:text-white">Pre-Order</button>
            </div>
            <img src="src\images\iphone-17-air.jpg" alt="" className="inline-block w-full" />
        </div>
  );
}

export default Header;
