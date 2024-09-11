// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import axios from "axios";

// interface TradeData {
//   timestamp: string;
//   price: number;
// }

// const ReChart: React.FC = () => {
//   const [tradeData, setTradeData] = useState<TradeData[]>([]);

//   // Simulate API fetching
//   const fetchTradeData = async () => {
//     try {
//       const response = await axios.get<TradeData[]>(
//         "https://api.example.com/trades"
//       ); // Replace with your API endpoint
//       setTradeData(response.data);
//     } catch (error) {
//       console.error("Error fetching trade data", error);
//     }
//   };

//   // Update data every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       fetchTradeData();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart
//         data={tradeData}
//         margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="timestamp" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="price"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default ReChart;

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface TradeData {
  timestamp: string;
  price: number;
}
const TradeGraph: React.FC = () => {
  const [tradeData, setTradeData] = useState<TradeData[]>([]);

  // Set up WebSocket
  useEffect(() => {
    const socket = new WebSocket("wss://example.com/socket"); // Replace with your WebSocket endpoint

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setTradeData((prevData) => [...prevData, newData]);
    };

    return () => socket.close();
  }, []);

  return (
    <ResponsiveContainer width="100%">
      <LineChart
        data={tradeData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TradeGraph;
