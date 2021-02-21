import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App({API_URL}) { 
  const [data, setData] = useState({});

  useEffect(async () => {
    const response = await axios.get(`${API_URL}/`);
    setData(response.data);
  }, []);

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}

export default App;
