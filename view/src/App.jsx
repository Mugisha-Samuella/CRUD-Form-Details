import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const initialFormData = {
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    street: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phoneNumber: "",
    email: "",
    termsAccepted: false,
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      toast.error("You must accept the terms and conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:2024/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      toast.success("Form submitted successfully!");
      setFormData(initialFormData); // Reset the form data
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error("Please fill all fields");
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className=" p-4 bg-gray-100 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold"></div>
          <div>
            <h1
              onClick={() => navigate("/saved")}
              className="text-black text-xl cursor-pointer flex flex-col items-center justify-center"
            >
              <FaEye
              className="text-3xl"/> Check Data
            </h1>
          </div>
        </div>
      </nav>

      {/* Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
          <div className="md:flex">
            <div className="w-full md:w-1/2 p-8 bg-gray-50">
              <h2 className="text-2xl font-bold mb-6">General Information</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border rounded-md"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Business Arena
                    </label>
                    <input
                      type="text"
                      name="businessArena"
                      value={formData.businessArena}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border rounded-md"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">Employees</label>
                    <input
                      type="text"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border rounded-md"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 p-8 bg-blue-500">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Details</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-200">Street + Nr</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border rounded-md bg-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-200">
                    Additional Information
                  </label>
                  <input
                    type="text"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border rounded-md bg-blue-500"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-200">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border rounded-md bg-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-200">Place</label>
                    <input
                      type="text"
                      name="place"
                      value={formData.place}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border rounded-md bg-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-200">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border rounded-md bg-blue-500"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-200">Code +</label>
                    <input
                      type="text"
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border rounded-md bg-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-200">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border rounded-md bg-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-200">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border rounded-md bg-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  <label htmlFor="terms" className="text-gray-200">
                    I do accept the{" "}
                    <a href="#" className="text-white">
                      Terms and Conditions
                    </a>{" "}
                    of your site.
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-white text-blue-600 rounded-3xl shadow-lg shadow-cyan-500/50"
                  >
                    Register Badge
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
