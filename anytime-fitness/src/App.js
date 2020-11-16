
import './components/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Buttons from './components/Buttons'

function App() {
  return (
    <div className='App'>
      <div className="rowC">
      <a href="#"><Buttons name='Home' /></a>
<a href="#"><Buttons name='About' /></a>
    <a href="#"><Buttons name='Calculators' /></a>
    <a href="#"><Buttons name='Login' /></a>
    <a href="#"><Buttons name='Register' /></a>
    </div>
    
   <h1>Anywhere Fitness Coming Soon!</h1>
    
    </div>


    
  //   // <Router>
  //   //   <div className="App">
  //   //     <Switch>
  //   //       <Route path="/SignUp" component={SignUp} />
  //   //       <Route path="/Login" component={Login} />
  //   //     </Switch>
        
  //   //   </div>
  //   // </Router>
  );
}

export default App;
