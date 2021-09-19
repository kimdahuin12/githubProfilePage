import logo from './logo.svg';
import './App.css';
import menuIcon from './githubMenuIcon.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <ul className="menu">
          <img src={menuIcon}/>
          <li className="menu_item"><input placeholder="Search or jump to..."/></li>
          <li className="menu_item"><a href="#">Pull requests</a></li>
          <li className="menu_item"><a href="#">Issues</a></li>
          <li className="menu_item"><a href="#">Marketplace</a></li>
          <li className="menu_item"><a href="#">Explore</a></li>
        </ul>
      </header>
      <nav className="underline-nav">
        <ul className="underline-nav-items">
          <li className="menu_item"><a href="#">Overview</a></li>
          <li className="menu_item"><a href="#">Repositories</a></li>
          <li className="menu_item"><a href="#">Projects</a></li>
          <li className="menu_item"><a href="#">Packages</a></li>
        </ul>
        <br/>
        
      </nav>
    </div>
  );
}

export default App;
