import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logo1.png';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return ( 
  	<nav
     
      aria-label="main navigation"
      
    
      >
      
       <img src={logo} className="logo" alt="Logo" />
       
        <NavLink to = './Home'>Home  </NavLink>
      	<NavLink to = './About'>About    </NavLink>
        <NavLink to = './SignUp'>Sign Up    </NavLink>
        <NavLink to = './Login'>Login    </NavLink>
        <NavLink to = './Tools'> Tools    </NavLink>
        {/* <NavLink to = './Reviews'>Reviews   </NavLink> */}
       
        
     
    </nav>
  );
 };
 
 export default Navbar;