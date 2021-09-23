import './App.scss';
import Search from './Components/Search-bar';
import Logo from './Components/Logo';

function App() {
  return (
    <div className="main">
      <div className="header">
        <Logo></Logo>
        <Search></Search>
      </div>
    </div>
  );
}

export default App;
