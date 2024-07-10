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
import { onMessageChange, sendMessage } from './redux/state';






const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />

      <Nav friend={props.state.friends.friend} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/*" element={<Profile posts={props.state.profilePage.posts}
            newPostText={props.state.profilePage.newPostText} store={props.store} />} />
          <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} store={props.store} />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;

