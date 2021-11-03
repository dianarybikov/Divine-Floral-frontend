import { useState ,useEffect } from 'react';
import flowersContainer from './FlowersContainer'
// import logo from './logo.svg';
import './App.css';

function App() {

  const [flowers, setFlowers] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/flowers')
      .then(res => res.json())
      .then(apiFlowers => setFlowers(apiFlowers))
  });
  return (
    <div className="app">
      <h1>Divine Floral</h1>
      <p> this is my website for a side company that will be starting. currently work out the api</p>
    </div>
  );
}

export default App;
