import './css/style.css';
import Navbar from './nav';
import Homepage from './home';
import Footer from './footer';
import Success from './success';
import Termofuse from './terms-of-use';
import Privacy from './privacy';
import Error404 from './error404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

   <Router>
      <div className="App">
      <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/privacy">
              <Privacy/>
            </Route>
            <Route exact path="/success">
              <Success/>
            </Route>
            <Route exact path="/terms-of-use">
              <Termofuse/>
            </Route>
            <Route exact path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
