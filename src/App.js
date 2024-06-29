import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/navbar/Navbar';
import Profile from './components/profile/profile';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;

