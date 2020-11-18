import react, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from './Navbar'
import imageS from '../images/signup.png'
import { useHistory } from 'react-router-dom'

const StyledSignUp = styled.div`
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




const SignUp = () => {

    useEffect(() => {
        axios.get('https://anywherefitness1120.herokuapp.com/api/user')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    const { push } = useHistory()

   

    const [formValue, setFormValue] = useState(initialFormValue)

    const changeHandler = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('https://anywherefitness1120.herokuapp.com/api/auth/signup', formValue)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container"> 
            <div className='rowC'>
        <Navbar/>
            </div>
        {/* <span className='outerWrap'> */}
        
        
            <div className='formWrap'>
            <img src={imageS} className="form-image" alt="Logo" />
            <StyledSignUp>

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
                <button>Sign Up</button>
            </form>
         </StyledSignUp>

        </div>
        {/* </span> */}
        </div>
    )
}

export default SignUp