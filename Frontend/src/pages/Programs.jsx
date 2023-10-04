import React, { useState, useEffect } from "react";

function Programs() {
  const [events, setEvents] = useState([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    department: "",
    idea: "",
    description: "",
    email: "", // Include the email field
  });
  

  useEffect(() => {
    // Fetch events from your database when the component mounts
    fetchEventsFromDatabase();
  }, []);

  const fetchEventsFromDatabase = async () => {
    // Replace this with your actual API endpoint to fetch events from the database
    try {
      const response = await fetch("http://localhost:8080/api/events");
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        console.error(
          "Failed to fetch events. Response status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleRegisterClick = (event) => {
    // Show the registration form when the "Register" button is clicked
    setShowRegistrationForm(true);
    setSelectedEvent(event);
    // Set the selected event's name in the form data
    setFormData({ ...formData, eventName: event.eventName });
  };

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();

    // Process the registration form data here
    // You can make an API request to send the data to your server
    try {
      const response = await fetch("http://localhost:8080/api/event-registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // After successful registration, you can hide the form
        setShowRegistrationForm(false);
        setSelectedEvent(null);
        // Optionally, you can reset the form data
        setFormData({
          name: "",
          year: "",
          department: "",
          idea: "",
          description: "",
          email: "",
        });
      } else {
        console.error("Error registering for the event");
      }
    } catch (error) {
      console.error("Error registering for the event:", error.message); // Log the error message

      // Handle the error gracefully, e.g., show a user-friendly message
      // You can also set a state to display an error message to the user
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-2">{event.eventName}</h3>
            <p className="text-gray-600 mb-4">{event.detail}</p>
            <p className="text-gray-600 mb-4">{event.status}</p>

            <p className="text-gray-600 mb-2">{event.date}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => handleRegisterClick(event)}
            >
              Register
            </button>
          </div>
        ))}
      </div>

      {showRegistrationForm && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 backdrop-blur">
          <div className="bg-white rounded-lg shadow-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 cursor-pointer"
              onClick={() => {
                setShowRegistrationForm(false);
                setSelectedEvent(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* <h2 className="text-2xl font-bold mb-4">Registration Form</h2> */}
            {/* Rest of your registration form code */}
            <form
              onSubmit={handleSubmitRegistration}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="year"
                >
                  Year
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="department"
                >
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="idea"
                >
                  Idea
                </label>
                <input
                  type="text"
                  name="idea"
                  id="idea"
                  value={formData.idea}
                  onChange={handleInputChange}
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  pattern=".+\.cst@rub\.edu\.bt"
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
                <small className="text-gray-500">
                  Must end with .cst@rub.edu.bt
                </small>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit Registration
                </button>
              </div>
            </form>
            {/* ... */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Programs;
