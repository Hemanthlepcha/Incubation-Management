import React from 'react';

function Notification() {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-semibold max-w-lg">Announcements</h2>
      <div className="flex items-center space-x-2">
        {/* <span className="bg-blue-500 text-white px-2 py-1 rounded">New</span> */}
        <p className="text-gray-700">Notification 1</p> <br/>
        {/* <p className="text-gray-700">Notification 1</p> <br/>
        <p className="text-gray-700">Notification 1</p> */}

      </div>
    </div>
  );
}

export default Notification;
