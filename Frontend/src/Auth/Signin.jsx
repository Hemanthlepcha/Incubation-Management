import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logoincu.png";



import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Signin = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        formData
      );
      // Assuming the backend sends a response with a token and userID
      const { token, userID, role } = response.data;
      // You can save the token and userID in your frontend state or localStorage for authentication purposes
      console.log("Login Successful:", token, userID, role);
      if (role === "Admin") {
        navigate("/dashboard")
      } else {
        navigate("/")
      }
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="w-full  max-w-md mx-auto p-4 bg-[#faf9f6] rounded shadow-lg">
      <img src={logo} alt="Registration" className="mx-auto mb-4" style={{ width: '150px', height: 'auto' }} />

        <h2 className="text-4xl font-bold mb-4 text-center">Log In</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-300 text-black font-medium py-2 px-4 rounded-md w-full"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
