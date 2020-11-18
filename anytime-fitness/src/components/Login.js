import react, { useState, useEffect } from 'react'
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
        text-align: center;
        margin: auto;
    
    }
`


const initialFormValue = {
    username: "",
    password: "",
    email: ""
}

const Login = () => {

    useEffect(() => {
        axios.get('https://anywherefitness1120.herokuapp.com/api/user')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    const [formValue, setFormValue] = useState(initialFormValue)

    const changeHandler = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('https://anywherefitness1120.herokuapp.com/api/auth/login', formValue)
        .then(res => console.log(res))
        .catch(err => console.log(err))
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
                        placeholder="username"
                        onChange={changeHandler}
                    />

                <input 
                        type="text"
                        name="email"
                        value={formValue.email}
                        placeholder="email address"
                        onChange={changeHandler}
                    />

                    <input 
                        type="password"
                        name="password"
                        value={formValue.password}
                        placeholder="password"
                        onChange={changeHandler}
                    />
                </form>
                <button type="submit">Login</button>
            
        </StyledLogin>
        </div>
        </div>
    )
}

export default Login