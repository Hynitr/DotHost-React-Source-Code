import './css/style.css';
import Navbar from './nav';
import Homepage from './home';
import Footer from './footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
