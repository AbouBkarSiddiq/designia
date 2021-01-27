import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home';
import Skills from './pages/skills';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/skills'} exact component={Skills} />
        <Route path={'/portfolio'} exact component={Portfolio} />
        <Route path={'/contact'} exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
