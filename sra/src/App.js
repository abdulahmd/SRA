import './App.css';
import AboutUs from './components/AboutUs.js';
import Home from './components/Home.js';
import Research from './components/Research.js';
import Apply from './components/Apply.js';

function App() {
  return (
    <div className="App">
      <Home />
      <Research />
      <AboutUs />
      <Apply />
    </div>
  );
}


export default App;