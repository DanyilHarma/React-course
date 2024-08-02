import './App.css';
import Nav from './components/navbar/Navbar';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/news/news';
import Music from './components/Music/music';
import Settings from './components/settings/settings';
import UsersContainer from './components/users/usersContainer';
import { connect } from 'react-redux';
import ProfileContainer from './components/profile/profileContainer ';
import HeaderContainer from './components/header/HeaderContainer';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav friend={props.state.friends.friend} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<Dialogs state={props.state} />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div >
  )
}

// const mapStateToProps = (state) => ({
//   friends: state.friends.friend
// })
// export default connect(mapStateToProps)(App)

export default App;


