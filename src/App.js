import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
      <a
          className="App-link"
          href="http://www.kimo.com.tw"
          target="_blank"
          rel="noopener noreferrer"
      >
          Learn React
      </a>
    </div>
  );
}


export default App;
