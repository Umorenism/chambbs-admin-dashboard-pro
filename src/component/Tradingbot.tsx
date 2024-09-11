import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
const TradingBot = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setCoin(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(error.message);
      });
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow pt-16 text-white pb-16 overflow-y-auto p-8 min-h-screen">
        <div className="bg-white flex justify-between items-center rounded-full text-xl font-semibold">
          <div className="bg-green-500 h-full py-2 m-1 px-10 rounded-full">
            Buy
          </div>
          <motion.button
            whileHover={{
              scale: 1.1,
              color: "#000",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mr-2 text-red-600 text-2xl font-semibold"
          >
            Sell
          </motion.button>
        </div>

        <div className="flex mt-2 justify-between">
          <div className="w-full">
            <h1 className="text-black py-2">Select Pairs</h1>
            <select
              name=""
              id=""
              className="bg-transparent w-full border rounded-md text-black py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" className="text-black">
                USDT
              </option>
              <option value="" className="text-black">
                BNB
              </option>
              <option value="" className="text-black">
                CHAMB
              </option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <h1 className="text-black text-2xl font-semibold py-2">
                Base Price
              </h1>
              <input
                type="number"
                placeholder="search for price here..."
                className="w-full text-black py-2 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:p-2"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <h1 className="text-black text-2xl font-semibold py-2">Price</h1>
              <input
                type="number"
                placeholder="enter your price here"
                className="w-full text-black py-2 p-2 rounded-md bg-transparent border focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:p-0"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <h1 className="text-black text-2xl font-semibold py-2">
                Numbers of Trades
              </h1>
              <input
                type="number"
                placeholder="enter your price here"
                className="w-full p-2 py-2 rounded-md bg-transparent text-black border focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:p-0"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <h1 className="text-black text-2xl font-semibold py-2">
                Quantity
              </h1>
              <input
                type="number"
                placeholder="Select quantity"
                className="w-full p-2 py-2 rounded-md bg-transparent text-black border focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:p-0"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#006400",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-green-700 w-full mt-2 py-3 rounded-lg font-bold"
              >
                Execute Trade
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingBot;
