import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KYCView: React.FC = () => {
  const location = useLocation();
  const { document, selfie } = location.state as {
    document: File;
    selfie: File;
  };
  const navigate = useNavigate();

  const handleApprove = () => {
    // Your approve logic
    console.log("Approved");
  };

  const handleDelete = () => {
    // Your delete logic
    console.log("Deleted");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">KYC Details</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <p className="font-bold">Document:</p>
          {/* Assuming document is an image */}
          <img
            src={URL.createObjectURL(document)}
            alt="Document"
            className="w-full max-w-sm"
          />
        </div>
        <div className="mb-4">
          <p className="font-bold">Selfie:</p>
          <img
            src={URL.createObjectURL(selfie)}
            alt="Selfie"
            className="w-full max-w-sm"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={handleApprove}
          >
            Approve
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCView;
