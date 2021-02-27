import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Loading from './Loading';
import After from './After'
import './App.css';
import { useState } from "react";

function App() {
  const API_URL = 'http://localhost:1337/api/v1';
  const URL = 'http://localhost:1337';
  const [image, setImage] = useState({});

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home setImage={setImage}/>
          </Route>
          <Route path="/loading">
            <Loading API_URL={API_URL} image={image} setImage={setImage}/>
          </Route>
          <Route path="/after">
            <After URL={URL} image={image}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
