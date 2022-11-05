import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [endpoint, setEndpoint] = useState('');
  const [cointner, setCointner] = useState([]);
  const [finalpoint, setFinalPoint] = useState('');

  useEffect(() => {
    options()
  }, [endpoint])


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6dfff0f9admshdd8087fdca7270ep1cde35jsn8b5790b24fa6',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => {
      setCointner(data)
    }).catch(err => console.error(err));


  const onChangehandle = (e) => {
    setEndpoint(e.target.value);
  }

  const submithandler = (e) => {
    e.preventdefault();
    setFinalPoint(endpoint);
  }


  return (
    <div className='App'>

      <form onSubmit={submithandler}>
        <input type="text" value={endpoint} onChange={onChangehandle} />
        <button type="submit">submit</button>
      </form>

      {
        cointner.map((item) => {
          <div>
            <img src={item.i.imageUrl} />
            <p>{item.l}</p>

          </div>
        })
      }
    </div>

  );
}

export default App;
