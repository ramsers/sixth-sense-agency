import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Opportunity from './Opportunity/Opportunity';
import Solutions from './Solutions/Solutions';
import Contact from './Contact/Contact';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="App__ctn">
        <div className="App__wrapper">
          <div className="App__home">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/opportunities' component={Opportunity} />
              <Route path='/solutions' component={Solutions} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}


export default App;
