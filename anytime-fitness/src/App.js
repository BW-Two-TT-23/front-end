
import './components/App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import Tools from './components/Tools'
import FitnessClass from './components/FitnessClass'



function App() {
  return (
    
 
     
    <Router>
      
        <Switch>
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route exact path="/Home" component={Home}/>
          <Route path="/About" component={About} />
          <Route path="/Tools" component={Tools} />
          <Route path="/FitnessClass" component={FitnessClass} />
        </Switch>
        
    
    </Router>


      
    
    


    
   
  );
}

export default App;
