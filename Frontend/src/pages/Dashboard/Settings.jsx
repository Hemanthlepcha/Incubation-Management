import { useState, useEffect } from 'react';
import axios from 'axios';

function Settings() {
  const [achievements, setAchievements] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedAchievements, setEditedAchievements] = useState(null);
  const [saveMessage, setSaveMessage] = useState(null);

  useEffect(() => {
    // Fetch achievement data from the API
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await axios.get('http://localhost:8080/achievements');
      setAchievements(response.data);
      setEditedAchievements(response.data);
    } catch (error) {
      console.log('Error fetching achievements:', error);
    }
  };

  const handleEdit = () => {
    setEditing(true);
    setSaveMessage(null);
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:8080/achievementup', editedAchievements);
      setAchievements(editedAchievements);
      setEditing(false);
      setSaveMessage('Achievements successfully saved.');
    } catch (error) {
      console.log('Error saving achievements:', error);
      setSaveMessage('Failed to save achievements.');
    }
  };
  

  const handleChange = (event, field) => {
    setEditedAchievements({
      ...editedAchievements,
      [field]: parseInt(event.target.value, 10),
    });
  };  

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Innovate Hub</h1>

      {achievements ? (
        <>
                    <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">successfull Startups</td>
                <td className="border px-4 py-2">
                  {editing ? (
                    <input
                      type="number"
                      value={editedAchievements.aecGraduates}
                      onChange={(event) => handleChange(event, 'aecGraduates')}
                      className="w-20 text-center"
                    />
                  ) : (
                    achievements.aecGraduates
                  )}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Total Investments</td>
                <td className="border px-4 py-2">
                  {editing ? (
                    <input
                      type="number"
                      value={editedAchievements.becGraduates}
                      onChange={(event) => handleChange(event, 'becGraduates')}
                      className="w-20 text-center"
                    />
                  ) : (
                    achievements.becGraduates
                  )}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Free Space</td>
                <td className="border px-4 py-2">
                  {editing ? (
                    <input
                      type="number"
                      value={editedAchievements.totGraduates}
                      onChange={(event) => handleChange(event, 'totGraduates')}
                      className="w-20 text-center"
                    />
                  ) : (
                    achievements.totGraduates
                  )}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">Events</td>
                <td className="border px-4 py-2">
                  {editing ? (
                    <input
                      type="number"
                      value={editedAchievements.events}
                      onChange={(event) => handleChange(event, 'events')}
                      className="w-20 text-center"
                    />
                  ) : (
                    achievements.events
                  )}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">incubates</td>
                <td className="border px-4 py-2">
                  {editing ? (
                    <input
                      type="number"
                      value={editedAchievements.incubatees}
                      onChange={(event) => handleChange(event, 'incubatees')}
                      className="w-20 text-center"
                    />
                  ) : (
                    achievements.incubatees
                  )}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6</td>
                <td className="border px-4 py-2">Startups</td>
                <td className="border px-4 py-2">
                  {editing ? (
                    <input
                      type="number"
                      value={editedAchievements.startups}
                      onChange={(event) => handleChange(event, 'startups')}
                      className="w-20 text-center"
                    />
                  ) : (
                    achievements.startups
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4">
            {editing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
              >
                Edit
              </button>
            )}
          </div>

          {saveMessage && <p>{saveMessage}</p>}
        </>
      ) : (
        <p>Loading achievements...</p>
      )}
    </div>
  );
}

export default Settings;
