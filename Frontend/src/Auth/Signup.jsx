  import { useState } from "react";
  import { Link } from "react-router-dom";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import logo from "../assets/logoincu.png";


  const SignUp = () => {
    const [formData, setFormData] = useState({
      name: "",
      CID: "",
      email: "",
      gender: "",
      password: "",
      confirmPassword: "",
      expertise: [],
      phoneNo: "",
    });

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
      e.preventDefault();

      // Check if all fields are filled
      for (const key in formData) {
        if (formData[key] === "") {
          alert("Please fill out all fields!");
          return;
        }
      }
      console.log(formData);

      try {
        // Make the POST request
        const response = await axios.post(
          "http://localhost:8080/signup",
          formData
        );

      // Handle the response
      if (response.status === 200) {
        // Assuming the server responds with some data
        console.log(response.data);
        // Reset the form data
        setFormData({
          name: "",
          CID: "",
          email: "",
          gender: "",
          password: "",
          confirmPassword: "",
          expertise: [],
          phoneNo: "",
        });
        // Show success message or perform any other actions
        alert("Sign up successful!");
        // Navigate to the "/User" page
        navigate("/user");
      } else {
        // Handle unexpected response status
        console.log("Unexpected response status:", response.status);
        // Show error message or perform any other actions
        alert("Sign up failed!");
      }
    } catch (error) {
      // Handle the error
      console.error(error);
      // Show error message or perform any other actions
      alert("An error occurred. Please try again later.");
    }
  };

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === "checkbox") {
        // Update expertise array based on checkbox selection
        setFormData((prevState) => {
          if (checked) {
            return {
              ...prevState,
              expertise: [...prevState.expertise, value],
            };
          } else {
            return {
              ...prevState,
              expertise: prevState.expertise.filter((item) => item !== value),
            };
          }
        });
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    };

    return (
      <div className="max-w-md mx-auto p-4 bg-[#faf9f6] rounded shadow-lg"> 
        <img src={logo} alt="Registration" className="mx-auto mb-4" style={{ width: '150px', height: 'auto' }} />

        <h2 className="text-4xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="flex mb-2">
            <label className="w-1/4 flex-shrink-0">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex mb-2">
            <label className="w-1/4 flex-shrink-0">CID:</label>
            <input
              type="text"
              name="CID"
              value={formData.CID}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex mb-2">
            <label className="w-1/4 flex-shrink-0">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex mb-2">
            <label className="w-1/4 flex-shrink-0">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded p-2"
            >
              <option value="">Select a gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex mb-2">
            <label className="w-1/4 flex-shrink-0">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex mb-2">
            <label className="w-1/4 flex-shrink-0">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex mb-2">
            <label className="w-1/4 flex-shrink-0">Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded p-2"
            >
              <option value="">Select a role</option>
              <option value="Mentor">Mentor</option>
              <option value="Mentee">Mentee</option>
            </select>
          </div>
          {formData.role === "Mentor" && (
            <div>
              <div className="flex mb-2">
                <label className="w-1/4 flex-shrink-0">Expertise:</label>
                <div className="flex-grow border border-gray-300 rounded p-2">
                  <label className="inline-flex items-center mr-2">
                    <input
                      type="checkbox"
                      name="expertise"
                      value="Project Management"
                      checked={formData.expertise.includes("Project Management")}
                      onChange={handleInputChange}
                    />
                    Project Management
                  </label>
                  <label className="inline-flex items-center mr-2">
                    <input
                      type="checkbox"
                      name="expertise"
                      value="Business Analyst"
                      checked={formData.expertise.includes("Business Analyst")}
                      onChange={handleInputChange}
                    />
                    Business Analyst
                  </label>
                  <label className="inline-flex items-center mr-2">
                    <input
                      type="checkbox"
                      name="expertise"
                      value="Database"
                      checked={formData.expertise.includes("Database")}
                      onChange={handleInputChange}
                    />
                    Database
                  </label>
                  <label className="inline-flex items-center mr-2">
                    <input
                      type="checkbox"
                      name="expertise"
                      value="Interface Design"
                      checked={formData.expertise.includes("Interface Design")}
                      onChange={handleInputChange}
                    />
                    Interface Design
                  </label>
                  <label className="inline-flex items-center mr-2">
                    <input
                      type="checkbox"
                      name="expertise"
                      value="Backend Developer"
                      checked={formData.expertise.includes("Backend Developer")}
                      onChange={handleInputChange}
                    />
                    Backend Developer
                  </label>
                  <label className="inline-flex items-center mr-2">
                    <input
                      type="checkbox"
                      name="expertise"
                      value="Full Stack Developer"
                      checked={formData.expertise.includes(
                        "Full Stack Developer"
                      )}
                      onChange={handleInputChange}
                    />
                    Full Stack Developer
                  </label>
                </div>
              </div>
            </div>
          )}
          <div className="flex mb-2">
            <label className="w-1/4 flex-shrink-0">Phone Number:</label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-300 text-black rounded px-4 py-2 mt-4 mx-auto block"
          >
            Sign Up
          </button>

        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:text-blue-700">
            Sign in
          </Link>
        </p>
      </div>
    );
  };

  export default SignUp;
