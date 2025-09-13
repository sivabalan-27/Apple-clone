import AirPods from "./AirPods";
import Watch from "./Watch";
import Watchse from "./WatchSE";
import Watchultra from "./WatchUltra";
import Exchange from "./Exchange";
import Ipad from "./ipad";

function ProductsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6">
      <AirPods />
      <Watch />
      <Watchse/>
      <Watchultra/>
      <Ipad/>
      <Exchange/>
    </div>
  );
}

export default ProductsSection;
