import { Redirect, useHistory } from "react-router-dom";

export default function Home({setImage}) { 
    const history  = useHistory();

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
  
          setImage({file});
          history.push('/loading');
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

    function upload(e) {
      document.getElementById('upload').click()
    }

    function change(e) {
      const file = e.target.files[0];
      setImage({file});
      history.push('/loading');
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
          <div>
            <input onChange={change} id="upload" style={{display: 'none'}} type="file" accept="image/png, image/jpeg"></input>
            <button onClick={upload}>Choose a file</button>
          </div>
        </section>
      </main>
    );
  }