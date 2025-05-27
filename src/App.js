import React, { useEffect, useState } from "react";

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://hostel-management-teal.vercel.app/api/rooms") // Replace with your backend URL
      .then(response => response.json())
      .then(data => setRooms(data))
      .catch(error => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Room Management System 🏠</h1>
        <ul>
          {rooms.length > 0 ? (
            rooms.map(room => (
              <li key={room.id}>
                Room {room.room_number} - {room.availability} - ${room.price}
              </li>
            ))
          ) : (
            <p>Loading rooms...</p>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
