// components/SelectInput.tsx

import React from "react";

interface SelectInputProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  value: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  onChange,
  value,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
