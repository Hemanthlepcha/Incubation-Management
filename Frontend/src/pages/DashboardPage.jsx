
function DashboardPage() {
  const incubationRequests = [
    {
      id: 1,
      name: "John Doe",
      status: "Approved",
      uploadedDate: "June 1, 2023",
      pitchDate: "June 15, 2023",
    },
    {
      id: 2,
      name: "John Doe",
      status: "Approved",
      uploadedDate: "June 1, 2023",
      pitchDate: "June 15, 2023",
    },
    // Add more incubation requests as needed
  ];

  const events = [
    {
      id: 1,
      eventName: "Webinar: Introduction to React",
      status: "Active",
      eventDate: "June 20, 2023",
      organizer: "ABC Organization",
    },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold">15</span>
            <span className="ml-2 text-gray-600">Total Tasks</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">80%</span>
            <span className="ml-2 text-gray-600">Progress</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Incubation Requests</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 text-left border">Name</th>
                <th className="py-2 text-left border">Status</th>
                <th className="py-2 text-left border">Uploaded Date</th>
                <th className="py-2 text-left border">Pitch Date</th>
              </tr>
            </thead>
            <tbody>
              {incubationRequests.map((request) => (
                <tr key={request.id}>
                  <td className="py-2 border">{request.name}</td>
                  <td className="py-2 border">{request.status}</td>
                  <td className="py-2 border">{request.uploadedDate}</td>
                  <td className="py-2 border">{request.pitchDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Additional features for Incubation Requests */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-4">Events</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 text-left border">Event Name</th>
                <th className="py-2 text-left border">Status</th>
                <th className="py-2 text-left border">Event Date</th>
                <th className="py-2 text-left border">Organizer</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td className="py-2 border">{event.eventName}</td>
                  <td className="py-2 border">{event.status}</td>
                  <td className="py-2 border">{event.eventDate}</td>
                  <td className="py-2 border">{event.organizer}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Additional features for Events */}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
