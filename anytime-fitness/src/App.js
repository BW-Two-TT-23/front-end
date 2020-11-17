
import './components/App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import Tools from './components/Tools'

function App() {
  return (
    
 
     
    <Router>
      
        <Switch>
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/Home" component={Home}/>
          <Route path="/About" component={About} />
          <Route path="/Tools" component={Tools} />
          
          
        </Switch>
        
    
    </Router>


      
    
    


    
   
  );
}

export default App;
