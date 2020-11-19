import react, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from './Navbar'
import imageL from '../images/Login.png'
import { useHistory } from 'react-router-dom'

const StyledLogin = styled.div`
    form{
        display: flex;
        margin: 0 auto;
        flex-flow: column;
    }

    input{
        display: flex;
        margin: 2% auto;
        text-align: center;
        padding: 2%;
    }

    h2{
        margin: 2% 0;
        justify-self: center;
        margin-bottom: 0;
    }

    button{
        margin: 3% auto;
        text-align: center;
        padding: 2%;
        margin-bottom: 2%;
        font-weight: bold;
        width: 100%
    }
    .container{
        display: flex;
        flex-direction: column;
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

    const { push } = useHistory()

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
        .then(res => {
            localStorage.setItem('token', res.data.token)
            console.log(res)
            push('/ClassList')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <div className='rowC'>
            <Navbar />
            </div>
            <div className='formWrap'>
    
            <img src={imageL} className="form-image" alt="Logo" />
            <StyledLogin>

                <form onSubmit={submitHandler}>
                <div className='lable-top'></div>
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
                    <button type="submit">Login</button>
                </form>
                </StyledLogin>

            </div>
        </div>
       
    )
}

export default Login