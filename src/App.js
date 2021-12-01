import { useState ,useEffect } from 'react';
import FlowersContainer from './FlowersContainer'

import './App.css';

function App() {

  const [flowers, setFlowers] = useState([])
  
  const getFlowers = () => {
  fetch('http://localhost:3000/flowers')
  .then(res => res.json())
  .then(apiFlowers => setFlowers(apiFlowers))
 };
  
 useEffect(getFlowers, []);

  return (
    <div className="App">
    <FlowersContainer flowers={flowers}/>

    </div>
  );
}

export default App;


