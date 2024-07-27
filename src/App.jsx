import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Bookdetail from './Page/Bookdetail';
import Footer from './Components/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [animeData, setAnimeData] = React.useState([]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleAnimeDataChange = (data) => {
    setAnimeData(data);
  };

  return (
    <Router>
      <div>
        <Navbar onSearchQueryChange={handleSearchQueryChange} />
        <Routes>
          <Route path="/" element={<Card searchQuery={searchQuery} onAnimeDataChange={handleAnimeDataChange} />} />
          <Route path="/books/:key" element={<Bookdetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
