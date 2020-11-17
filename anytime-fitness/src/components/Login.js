import react, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from './Navbar'

const StyledLogin = styled.div`
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
        border: 1.rem solid #008037;
        font-weight: bold;
    }
    .container{
        display: flex;
        flex-flow: column;
        padding: 2%;
        height: 100vh;
        justify-content: center;
       

    }

    form{
        dislay: flex;
        flex-direction: column;
        border: .1rem solid #008037;
       
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
        <div>
            <Navbar/>
            <div className='form'></div>
        <StyledLogin>
            
            <div className="container">
                
                
                <form onSubmit={submitHandler}>
                <div className='lable-top'><h2>Login</h2></div>
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
                <button>Login</button>
            </div>
        </StyledLogin>
        </div>
    )
}

export default Login