import './index.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Head from './Head';
import Committee from './Committee';
import Tail from './Tail';
import Cfp from './Cfp';
import ImpDates from './ImpDates';
import Workshop from './Workshop';
import Reg from './Reg';
import Contact from './Contact';
function App() {
  return (
  
  <div>
    <Head />
    <nav>
    <Link to="/Home">|   Home   |</Link>
    <Link to="/Committee">|   Committee   |</Link>
    <Link to="/Cfp">|   Call for Papers   |</Link>
    <Link to="/ImpDates">|    Dates   |</Link>
    <Link to="/Workshop">|   Workshop   |</Link>
    <Link to="/Reg">|   Registration   |</Link>
    <Link to="/Contact">|   Contact   |</Link>
    </nav>
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Committee">
        <Committee />
      </Route>
      <Route path="/Cfp">
        <Cfp />
      </Route>
      <Route path="/ImpDates">
        <ImpDates />
      </Route>
      <Route path="/Workshop">
        <Workshop />
      </Route>
      <Route path="/Reg">
        <Reg />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
    </Switch>
    <Tail />

    
</div>

  );
}

export default App;
