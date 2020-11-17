import react, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from './Navbar'

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
        border: 3px solid #008037;
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
        border: 3px solid #008037;
        font-weight: bold;
    }
    .container{
        display: flex;
        flex-flow: column;
        padding: 2%;
        height: 100vh;
        justify-content: center;
        border: 1px solid black;

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
        <Navbar/>
        <StyledSignUp>
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    name="username"
                    value={formValue.username}
                    placeholder="username"
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
            <button>Sign Up</button>
        </div>
        </StyledSignUp>
        </div>
    )
}

export default SignUp