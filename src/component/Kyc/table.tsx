import React from "react";

interface TableRow {
  id: number;
  name: string;
  status: string;
  amount: number;
}

const tableData: TableRow[] = [
  { id: 1, name: "John Doe", status: "Active", amount: 1000 },
  { id: 2, name: "Jane Smith", status: "Inactive", amount: 1500 },
  { id: 3, name: "Samuel Green", status: "Pending", amount: 1200 },
  { id: 4, name: "Emily Brown", status: "Active", amount: 2000 },
];

const TableList: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id} className="border-t border-gray-200">
              <td className="py-2 px-4">{row.id}</td>
              <td className="py-2 px-4">{row.name}</td>
              <td
                className={`py-2 px-4 ${
                  row.status === "Active"
                    ? "text-green-600"
                    : row.status === "Inactive"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {row.status}
              </td>
              <td className="py-2 px-4">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
