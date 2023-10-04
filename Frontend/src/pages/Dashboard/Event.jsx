import React, { useState, useEffect } from "react";

const apiUrl = "http://localhost:8080/api/events";

function formatEventDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function Event() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    date: "",
    detail: "",
    status: "Active",
  });

  const totalEvents = events.length;

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        console.error("Failed to fetch events. Response status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        fetchEvents();
        setNewEvent({
          eventName: "",
          date: "",
          detail: "",
          status: "Active",
        });
        setShowForm(false);
      } else {
        console.error("Failed to create event");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleEditEvent = async (eventToEdit) => {
    try {
      const response = await fetch(`${apiUrl}/${eventToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventToEdit),
      });

      if (response.ok) {
        fetchEvents();
      } else {
        console.error("Error editing event:", response.statusText);
      }
    } catch (error) {
      console.error("Error editing event:", error);
    }
  };

  const handleDeleteEvent = async (eventName) => {
    try {
      if (!eventName) {
        console.error("Invalid event name");
        return;
      }
  
      const response = await fetch(`${apiUrl}/${eventName}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        fetchEvents();
      } else {
        console.error("Error deleting event:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Event</h2>
        <div>
          <span className="text-gray-500 ml-2 mr-4">Total: {totalEvents}</span>
          <button
            className="bg-yellow-300 hover:bg-blue-600 text-black py-2 px-4 rounded"
            onClick={toggleForm}
          >
            Add Event
          </button>
        </div>
      </div>
      {showForm && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Create New Event</h3>
          <div className="flex mb-2">
            <input
              type="text"
              name="eventName"
              value={newEvent.eventName}
              onChange={handleInputChange}
              placeholder="Event Name"
              className="border border-gray-300 rounded-md px-4 py-2 mr-2"
            />
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-4 py-2 mr-2"
            />
            <input
              type="text"
              name="detail"
              value={newEvent.detail}
              onChange={handleInputChange}
              placeholder="Detail"
              className="border border-gray-300 rounded-md px-4 py-2 mr-2"
            />
            <select
              name="status"
              value={newEvent.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded"
            onClick={handleAddEvent}
          >
            Create Event
          </button>
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 text-left border">Sl. No.</th>
            <th className="py-2 text-left border">Event Name</th>
            <th className="py-2 text-left border">Status</th>
            <th className="py-2 text-left border">Date</th>
            <th className="py-2 text-left border">Detail</th>
            <th className="py-2 text-left border">Edit</th>
            <th className="py-2 text-left border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td className="py-2 border">{index + 1}</td>
              <td className="py-2 border">
                {event.editable ? (
                  <input
                    type="text"
                    value={event.eventName}
                    onChange={(e) =>
                      handleEditEvent({
                        ...event,
                        eventName: e.target.value,
                      })
                    }
                  />
                ) : (
                  event.eventName
                )}
              </td>
              <td className="py-2 border">
                {event.editable ? (
                  <select
                    value={event.status}
                    onChange={(e) =>
                      handleEditEvent({
                        ...event,
                        status: e.target.value,
                      })
                    }
                    style={{
                      color: event.status === "Active" ? "green" : "red",
                    }}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                ) : (
                  event.status
                )}
              </td>
              <td className="py-2 border">
                {event.editable ? (
                  <input
                    type="date"
                    value={event.date}
                    onChange={(e) =>
                      handleEditEvent({
                        ...event,
                        date: e.target.value,
                      })
                    }
                  />
                ) : (
                  formatEventDate(event.date)
                )}
              </td>
              <td className="py-2 border">
                {event.editable ? (
                  <input
                    type="text"
                    value={event.detail}
                    onChange={(e) =>
                      handleEditEvent({
                        ...event,
                        detail: e.target.value,
                      })
                    }
                  />
                ) : (
                  event.detail
                )}
              </td>
              <td className="py-2 border">
                {event.editable ? (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded"
                    onClick={() => handleEditEvent({ ...event, editable: false })}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                    onClick={() => handleEditEvent({ ...event, editable: true })}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td className="py-2 border">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Event;
