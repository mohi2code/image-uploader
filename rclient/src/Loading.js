import { useEffect } from "react";
import axios from 'axios'
import ReactLoading from 'react-loading';
import { useHistory } from "react-router-dom";

export default function Loading({API_URL, image, setImage}) {
    const history = useHistory();

    useEffect(() => {
      setTimeout(() => {
          const formData = new FormData();
          formData.append('image', image.file);
          axios.post(`${API_URL}/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(res => {
            if (res.data.recieved){
              setImage({...image, name: res.data.filename})
              history.push('/after');
            }
          });
      }, 1600)
    }, [])

    return (
      <main>
        <ReactLoading type={'bars'} color={'#2F80ED'} height={'20%'} width={'20%'}/>
      </main>
    ); 
  }
  