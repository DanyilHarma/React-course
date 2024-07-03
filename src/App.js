import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/navbar/Navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/news/news';
import Music from './components/Music/music';
import Settings from './components/settings/settings';



const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

