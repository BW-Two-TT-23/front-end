import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
