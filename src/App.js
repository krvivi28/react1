// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Form from './components/Form';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
 <>
 <Navbar/>
 <Textarea/>
 <About/>
 {/* <Router>
 <Navbar title="home"/>
 <Routes>
 <Route path="/" element={<Textarea />} />
        <Route path="about" element={<About />} />

 </Routes>
 </Router> */}
 </>
  );
}

export default App;
