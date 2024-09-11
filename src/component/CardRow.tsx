import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface CardProps {
  title: string;
  balance: any;
  amount: number;
  text: string;
}

const CardRow: React.FC<CardProps> = ({ title, balance, text, amount }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="text-gray-700 text-base mb-2">Balance: ${balance}</div>
      <div className="text-gray-700 text-base mb-1">{amount}</div>
      <p className="text-green-900 flex items-center">
        <GoArrowUpRight />
        {text}
      </p>
    </div>
  );
};

export default CardRow;
