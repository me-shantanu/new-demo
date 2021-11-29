
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Home from './components/home/Home';
import About from './components/about/About'
function App() {
  return (
    <Router>
  
    <div className="App">
          <Nav/>
      <Routes>
            <Route path="/" exact  element={<Home/>}></Route></Routes>
      <Routes>      <Route path="/about"  exact element={<About/>}></Route></Routes>
          
    </div>
    </Router>
  );
}

export default App;
