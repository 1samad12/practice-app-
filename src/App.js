import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from a fake API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data Cards</h1>
      <div className="card-container">
        {data.map(item => (
          <div className="card" key={item.id}>
            <img src={`https://picsum.photos/200/300?random=${item.id}`} alt={`Image ${item.id}`} />
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            {/* Add other data fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
