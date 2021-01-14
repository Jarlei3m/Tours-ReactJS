import React, {useState, useEffect} from 'react';

//  CSS
import './global.css';
import './components/header/title.css';
import './components/main/list.css';
import './components/empty/message.css';

// components
import Title from './components/header/Title';
import Loading from './components/loader/Loading';
import Message from './components/empty/Message';
import List from './components/main/List';

// API
const API_URL = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      const places = await response.json();

      setIsLoading(false);
      setPlaces(places);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }

  }
  
  useEffect(() => {
    fetchPlaces();
  }, [])

  const removePlace = (id) => {
    let filteredPlaces = places.filter(place => place.id !== id)

    setPlaces(filteredPlaces)
  }

  if (isLoading) {
    return <Loading />
  }

  if (places.length === 0) {
    return (
      <header>
        <Message /> 
        <button className="btn-refresh" onClick={() => fetchPlaces()}>Refresh</button>
      </header>
    )
  }

  return (
    <section>
      <Title />
      <List places={places} removePlace={removePlace} />     
      
    </section>
  );
}

export default App;
