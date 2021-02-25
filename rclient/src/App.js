import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';

function App({API_URL}) { 
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${API_URL}/`);
      setData(response.data);
    }

    fetchData();
  }, []);

  function handle(e) {
    const dropArea = e.target;
    const eventType = e.type;

    e.preventDefault();
    e.stopPropagation();

    if (eventType == 'dragenter' || eventType == 'dragover')
      highlight();

    if (eventType == 'dragleave' || eventType == 'drop')
      unhighlight();

    if (eventType == 'drop') {
      let fileTypes = ['image/png', 'image/jpeg']
      let file = e.dataTransfer.files[0]
      if (file){ 
        if (!fileTypes.includes(file.type))
          alert('you can only upload images !')

        const formData = new FormData();
        formData.append('image', file);
        axios.post(`${API_URL}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          console.log(res);
        });
      }
        
    }
    
    function highlight(e) {
      dropArea.classList.add('highlight')
    }
    
    function unhighlight(e) {
      dropArea.classList.remove('highlight')
    }

    return false;
  }
    
  return (
    <main>
      <section className="upload-wrap">
        <h3 style={{marginTop: '36px'}}>Upload your image</h3>
        <small>File should be Jpeg, Png,...</small>
        <div 
          onDragEnter={handle} onDragOver={handle}
          onDragLeave={handle} onDrop={handle}
        id="add-drop" className="add-drop">
          <h6 style={{fontSize: '12px', color: '#BDBDBD', marginTop: 'auto'}}>Drag & Drop your image here</h6>
        </div>
        <h6 style={{fontSize: '12px', color: '#BDBDBD'}}>Or</h6>
        <button>Choose a file</button>
      </section>
    </main>
  );
}

export default App;
