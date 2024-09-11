import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale, // Registering the CategoryScale for x-axis
} from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale // Register the CategoryScale
);

const LiveChatGraph = () => {
  const [chatData, setChatData] = useState<number[]>([]);
  const [timestamps, setTimestamps] = useState<string[]>([]);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage = Math.floor(Math.random() * 10) + 1; // Simulate receiving chat data
      const currentTime = new Date().toLocaleTimeString();

      setChatData((prevData) => [...prevData, newMessage]);
      setTimestamps((prevTimestamps) => [...prevTimestamps, currentTime]);

      if (chatData.length > 10) {
        setChatData((prevData) => prevData.slice(1));
        setTimestamps((prevTimestamps) => prevTimestamps.slice(1));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [chatData]);

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: "Inoming Messages Received",
        data: chatData,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Number of Coins message",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LiveChatGraph;
