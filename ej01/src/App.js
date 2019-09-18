import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Clock from './components/Clock';
import NoClock from './components/NoClock';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/noclock"> No clock </Link>
              </li>
              <li>
                <Link to="/"> Clock </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path ="/" component = {Clock}/>
          <Route path = "/noclock" component = {NoClock}/>
        </Switch>

      </div>
    );
  }
}

export default App;
