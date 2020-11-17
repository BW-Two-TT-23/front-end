import react, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from './Navbar'
import imageL from '../images/Login.png'

const StyledLogin = styled.div`
    form{
       
        display: flex;
        margin:  auto;
        margin-left: -20rem;
        flex-flow: column;
        
        
    }

    input{
       
        display: flex;
        margin: 2% auto;
        text-align: center;
        padding: 0.8%;
       
    }

    h2{
        margin: 2% 0;
        justify-self: center;
        margin-bottom: 0;
    }

    button{
        
        margin: 3% auto;
        text-align: center;
        padding: 1%;
        margin-bottom: 2%;
        border: 1.rem solid #008037;
        font-weight: bold;
        width: 10rem;
        margin-left: -15rem;
    }
    .container{
        display: flex;
        flex-flow: column;
        padding: 2%;
        height: 100vh;
        justify-content: center;
        margin: -20rem;
        z-index: -1;
        
       

    }

   

    .lable-top{
        align-text: center;
        margin: auto;
    
    }
`


const initialFormValue = {
    username: "",
    password: ""
}

const Login = () => {

    const [formValue, setFormValue] = useState(initialFormValue)

    const changeHandler = e => {
        setFormValue({
            // ...initialFormValue,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    return(

        <div className='outerForm'>
            <div className='rowC'>
            <Navbar />
            </div>
            <div className='formWrap'>
            
                <img src={imageL} className="form-image" alt="Logo" />
            
            
            
        <StyledLogin>
        
            
            
                <form onSubmit={submitHandler}>
                <div className='lable-top'><h2>Login</h2></div>
                    <input 
                        type="text"
                        name="username"
                        value={formValue.username}
                        placeholder="email address"
                        onChange={changeHandler}
                    />

                    <input 
                        type="text"
                        name="password"
                        value={formValue.password}
                        placeholder="password"
                        onChange={changeHandler}
                    />
                </form>
                <button>Login</button>
            
        </StyledLogin>
        </div>
        </div>
    )
}

export default Login