import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function IncubeRegister() {
  const [formData, setFormData] = useState({
    institution: "",
    training: "",
    duration: "",
    businessType: "",
    businessDescription: "",
    supportRequired: "",
    technologyUsed: "",
    locationAfterGraduation: "",
    spaceRequired: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend server
    axios
      .post("http://localhost:8080/incube-register", formData)
      .then((response) => {
        // Handle the response from the backend server
        alert("Form submitted successfully");
        navigate("/"); // Replace "/home" with the appropriate URL for your home page
      })
      .catch((error) => {
        // Handle any error that occurred during the form submission
        alert("An error occurred while submitting the form");
        console.log("An error occurred while submitting the form:", error);
      });
  };

  const handleCancel = () => {
    // TODO: Handle cancel action
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto pb-12">
      <h2 className="text-2xl font-bold mb-4">
      Personal Details
      </h2>
      <div className="mb-4">
        <label htmlFor="institution" className="block">
          Name:
        </label>
        <input
          type="text"
          id="institution"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="training" className="block">
          Year:
        </label>
        <input
          type="text"
          id="training"
          name="training"
          value={formData.training}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="duration" className="block">
          Department:
        </label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">Proposed Business Information</h2>
      <div className="mb-4">
        <label htmlFor="businessType" className="block">
          Business Type:
        </label>
        <div>
          <input
            type="radio"
            id="existingBusiness"
            name="businessType"
            value="Existing Business"
            checked={formData.businessType === "Existing Business"}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="existingBusiness">Existing Business</label>
        </div>
        <div>
          <input
            type="radio"
            id="newBusiness"
            name="businessType"
            value="New Business"
            checked={formData.businessType === "New Business"}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="newBusiness">New Business</label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="businessDescription" className="block">
          Brief description of Business Idea:
        </label>
        <textarea
          id="businessDescription"
          name="businessDescription"
          value={formData.businessDescription}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="supportRequired" className="block">
          Support required from business Incubation center:
        </label>
        <textarea
          id="supportRequired"
          name="supportRequired"
          value={formData.supportRequired}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="technologyUsed" className="block">
          Technology to use:
        </label>
        <textarea
          id="technologyUsed"
          name="technologyUsed"
          value={formData.technologyUsed}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="locationAfterGraduation" className="block">
          Business location after graduation:
        </label>
        <textarea
          id="locationAfterGraduation"
          name="locationAfterGraduation"
          value={formData.locationAfterGraduation}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="spaceRequired" className="block">
          Space Required (sq.ft):
        </label>
        <input
          type="text"
          id="spaceRequired"
          name="spaceRequired"
          placeholder="sq.ft"
          value={formData.spaceRequired}
          onChange={handleChange}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Preview
        </button>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
      {submissionStatus && <p>{submissionStatus}</p>}
    </form>
  );
}

export default IncubeRegister;
