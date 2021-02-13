import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
