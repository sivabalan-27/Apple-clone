import appleLogo from "../images/apple-logo.png";
import { FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black/90 text-white">
      <div className="flex items-center justify-between md:justify-center px-6 py-2">
        
        {/* Left (Logo) */}
        <img src={appleLogo} alt="Apple Logo" className="w-8 h-8" />

        {/* Center Nav Links (hidden on mobile, flex on tablet+desktop) */}
        <ul className="hidden md:flex gap-8 items-center font-thin text-sm mx-10">
          <li><a href="#" className="hover:font-semibold">Store</a></li>
          <li><a href="#" className="hover:font-semibold">Mac</a></li>
          <li><a href="#" className="hover:font-semibold">iPad</a></li>
          <li><a href="#" className="hover:font-semibold">iPhone</a></li>
          <li><a href="#" className="hover:font-semibold">Watch</a></li>
          <li><a href="#" className="hover:font-semibold">AirPods</a></li>
          <li><a href="#" className="hover:font-semibold">TV & Home</a></li>
          <li><a href="#" className="hover:font-semibold">Entertainment</a></li>
          <li><a href="#" className="hover:font-semibold">Accessories</a></li>
          <li><a href="#" className="hover:font-semibold">Support</a></li>
        </ul>

        {/* Right (Icons) */}
        <div className="flex items-center gap-6">
          <FaSearch className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
          {/* Hamburger only visible on mobile */}
          <FaBars className="md:hidden cursor-pointer" size={22} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
