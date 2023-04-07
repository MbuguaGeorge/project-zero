import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </Router>

  )
}

export default App
