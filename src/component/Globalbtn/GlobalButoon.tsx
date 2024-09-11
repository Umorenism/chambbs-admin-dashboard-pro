import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  let baseStyle =
    "px-4 py-2 font-bold rounded focus:outline-none transition-all";
  let variantStyle = "";

  switch (variant) {
    case "primary":
      variantStyle = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "secondary":
      variantStyle = "bg-green-700 text-white hover:bg-gray-600";
      break;
    case "danger":
      variantStyle = "bg-red-500 text-white hover:bg-red-600";
      break;
    default:
      variantStyle = "bg-blue-500 text-white hover:bg-blue-600";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
