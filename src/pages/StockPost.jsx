import React, { useState } from "react";

// Input Component for reusability
const InputField = ({ label, type, name, value, onChange, placeholder, ...rest }) => (
  <div>
    <label className="block text-sm font-medium text-green-900 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-green-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      {...rest}
    />
  </div>
);

export default function FarmerPost() {
  const [formData, setFormData] = useState({
    stockName: "",
    pictures: [],
    quantity: "",
    pricePerKg: "",
    location: "",
    postDate: "",
    farmerName: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, pictures: Array.from(e.target.files) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const fields = [
    { label: "Stock Name", name: "stockName", type: "text", placeholder: "Enter stock name" },
    { label: "Pictures", name: "pictures", type: "file", placeholder: "", multiple: true, isFile: true },
    { label: "Quantity (in kgs)", name: "quantity", type: "number", placeholder: "Enter quantity" },
    { label: "Price Per Kg", name: "pricePerKg", type: "number", placeholder: "Enter price per kg" },
    { label: "Location", name: "location", type: "text", placeholder: "Enter location" },
    { label: "Post Date", name: "postDate", type: "date", placeholder: "" },
    { label: "Farmer Name", name: "farmerName", type: "text", placeholder: "Enter farmer's name" },
    { label: "Phone Number", name: "phoneNumber", type: "tel", placeholder: "Enter phone number" },
  ];

  return (
    <div className="bg-green-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Post Your Stock</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map(({ label, name, type, placeholder, multiple, isFile }) => (
            <InputField
              key={name}
              label={label}
              name={name}
              type={type}
              value={formData[name]}
              onChange={isFile ? handleFileChange : handleInputChange}  // Conditional handler for file inputs
              placeholder={placeholder}
              multiple={multiple}
            />
          ))}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg font-medium"
          >
            Post Stock
          </button>
        </form>
      </div>
    </div>
  );
}
