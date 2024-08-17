import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import styles from './App.module.css';
import { fetchAllData, songs } from './helpers/api.jsx';
// import { songs } from './helpers/api.jsx';
import Section from './components/Section/Section.jsx';
import FilterSection from './components/FilterSection/FilterSection';

function App() {
  const [albumData, setAlbumData] = useState({ topAlbums: [], newAlbums: [], songs: [] });
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(songs.length);
  

  const fetchData = async () => {
    try {
      const { topAlbums, newAlbums, songs } = await fetchAllData();
      setAlbumData({ topAlbums, newAlbums, songs });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(albumData.songs, albumData.newAlbums, albumData.topAlbums);
  

  return (
    <>
      <Navbar searchData={albumData.newAlbums} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={albumData.topAlbums} />
        <Section type="album" title="New Albums" data={albumData.newAlbums} />
        <FilterSection
          data={songs}
          type="song"
          title="Songs"
          value={value}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </div>
    </>
  );
}

export default App;