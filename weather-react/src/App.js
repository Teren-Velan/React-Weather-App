import React from 'react'

const api = {key:"19643273fe21828f567b30bb5e9f9201",
base:'https://api.openweathermap.org/data/2.5/'
}



function App() {
  return (
    <div className="app warm">
      <main>
       <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search" />
       </div>
       <div className="location-box">

       </div>
      </main>
    </div>
  );
}

export default App;
