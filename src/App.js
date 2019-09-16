import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TabNav from './components/TabNav';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationList';
import EpisodeList from './components/EpisodeList';



export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path={`/`} component={WelcomePage} />
      <Route path={`/characters`} component={CharacterList} />
      <Route path={`/locations`} component={LocationList} />
      <Route path={`/episodes`} component={EpisodeList} />
    </main>
  );
}
