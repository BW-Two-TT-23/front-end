import react, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from './Navbar'
import imageS from '../images/signup.png'

const StyledSignUp = styled.div`
    form{
        width: 60%;
        display: flex;
        margin: 0 auto;
        flex-flow: column
        ;
    }

    input{
        width: 30%;
        display: flex;
        margin: 2% auto;
        text-align: center;
        padding: 0.8%;
        border: .1rem solid #008037;
    }

    h2{
        margin: 2% 0;
        justify-self: center;
        margin-bottom: 0;
    }

    button{
        width: 15%;
        margin: 3% auto;
        text-align: center;
        padding: 1%;
        margin-bottom: 2%;
        border: .1rem solid #008037;
        font-weight: bold;
    }
    .container{
        display: flex;
        flex-direction: column;
        padding: 2%;
        height: 100vh;
        justify-content: center;
        

    }
    form{
        dislay: flex;
        flex-direction: column;
        margin-left: -10rem;
       
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

const SignUp = () => {

    const [formValue, setFormValue] = useState(initialFormValue)

    const changeHandler = e => {
        setFormValue({
            ...initialFormValue,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <div> 
            <div className='rowC'>
        <Navbar/>
            </div>
        {/* <span className='outerWrap'> */}
        
        <StyledSignUp>
        
            <div className='formWrap'>
            <img src={imageS} className="form-image" alt="Logo" />
        
            <form onSubmit={submitHandler}>
            <div className='lable-top'><h2>Sign Up</h2></div>
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
                <button>Sign Up</button>
            </form>
            
        </div>
        </StyledSignUp>
        {/* </span> */}
        </div>
    )
}

export default SignUp