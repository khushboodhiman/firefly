import './App.scss';
import Search from './Components/Search-bar';
import Logo from './Components/Logo';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="main">
      <div className="header">
        <Logo></Logo>
        <Search></Search>
        <Banner></Banner>
      </div>
    </div>
  );
}

export default App;
