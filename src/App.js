import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './pages/skills';
import Home from './pages/home';
import Skills from './pages/skills';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Navigation from './components/nav';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/skills'} exact component={Skills} />
        <Route path={'/portfolio'} exact component={Portfolio} />
        <Route path={'/contact'} exact component={Contact} />
      </Switch>
    </Router>
    // <div>
    //   {/* <Home />
    //   <Skills />
    //   <Portfolio />
    //   <Contact /> */}
    // </div>
  );
}

export default App;
