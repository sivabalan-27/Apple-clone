import airpods from "../images/airpods.png";

function Airpods() {
    return (
        <div className="text-center bg-gray-100"
        style={{
            backgroundImage: `url(${airpods})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"600px"
        }}>
            <div>
                <h1 className="font-bold text-4xl pt-5">Airpods Pro 3</h1>
                <h3 className="font-medium text-2xl pt-2">The Worlds Best in-ear</h3>
                <h3 className="font-medium text-2xl">Active Noise Cancellation</h3>
                <p className="text-gray-600 pt-2">Available from 19 Sep</p>
                <div className="flex justify-center gap-6 mt-3">
                    <button className="text-white bg-blue-600 w-28 py-2 px-3 rounded-3xl hover:bg-blue-700">Learn More</button>
                    <button className="text-blue-600 w-28 py-2 rounded-3xl border-2 border-blue-400 hover:bg-blue-600 hover:text-white">Pre-Order</button>
                </div>
            </div>

        </div>

    );
}

export default Airpods;
