
import './components/App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { PrivateRoute } from './components/utils/PrivateRoute'
import SignUp from './components/SignUp'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import Tools from './components/Tools'
import FitnessClass from './components/FitnessClass'

import ClassList from './components/ClassList'
import ClassUpdate from './components/ClassUpdate'

import Reviews from './components/Reviews'







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

          <Route path="/ClassList" component={ClassList}/>

          <Route path="/ClassUpdate" component={ClassUpdate}/>


          <Route path="/Reviews" component={Reviews} />

          <PrivateRoute/>
        </Switch>
        
    
    </Router>


      
    
    


    
   
  );
}

export default App;
