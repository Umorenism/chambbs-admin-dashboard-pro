// GlobalInput.tsx
import React from "react";

interface GlobalInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GlobalInput: React.FC<GlobalInputProps> = ({
  label,
  name,
  type,
  value,
  placeholder = "",
  onChange,
}) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default GlobalInput;
