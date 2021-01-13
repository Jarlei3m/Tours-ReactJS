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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([
    {
      id: 1,
      img: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
      title: "Best of Paris in 7 Days Tour",
      price: "1,995",
      description: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
      fullDescription: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      read: false
    },
    {
      id: 2,
      img: "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
      title: "Best of Ireland in 14 Days Tour",
      price: "3,895",
      description: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...",
      fullDescription: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      read: false
    },
    {
      id: 3,
      img: "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
      title: "Best of Salzburg & Vienna in 8 Days Tour",
      price: "2,695",
      description: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...",
      fullDescription: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
      read: false
    },
    {
      id: 4,
      img: "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
      title: "Best of Rome in 7 Days Tour",
      price: "2,095",
      description: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...",
      fullDescription: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
      read: false
    },
    {
      id: 5,
      img: "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
      title: "Best of Poland in 10 Days Tour",
      price: "2,595",
      description: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...",
      fullDescription: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
      read: false
    }
  ])

  useEffect(() => {
    setIsLoading(false)
  }, []);

  const handleRead = (id, read) => {
    setPlaces(places.map(place => (place.id === id ? {...place, read: !read} : place)))
  }

  const removePlace = (id) => {
    let filteredPlaces = places.filter(place => place.id !== id)

    setPlaces(filteredPlaces)
  }

  const handleRefresh = () => {
    setIsLoading(true);
    window.location.reload();
  }

  return (
    <section>
      
      {isLoading ? 
        <Loading /> 
          : 
        <>
          {places.length === 0 ? 
            <header>
              <Message /> 
              <button className="btn-refresh" onClick={() => handleRefresh()}>Refresh</button>
            </header>
              : 
            <>
              <Title />
              {places.map((place) => {
                const {id, img, title, price, description, fullDescription, read} = place;
    
                return (
                  <article className="card" key={id}>
                    <img src={img} alt={title}/>
                    
                    <footer>
                      <div className="info">
                        <h4>
                          {title}
                        </h4>
                        <h4 className="price">$ {price}</h4>
                      </div>
    
                      {read ?  
                        <p className="description">
                          {fullDescription}
                          <button className="btn-read" onClick={() => handleRead(id, read)}> Show Less</button>
                        </p>
                          :
                        <p className="description">
                          {description}
                          <button className="btn-read" onClick={() => handleRead(id, read)}> Read More</button>
                        </p>                  
                      }
                      
                      <button className="btn-remove" onClick={() => removePlace(id)}>Not Interested</button>
    
                    </footer>
                  </article>
                )
              })}
            </>
          }
        </>
      }
    </section>
  );
}

export default App;
