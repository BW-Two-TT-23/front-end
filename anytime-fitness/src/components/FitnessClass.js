
import axios from 'axios'
import react, { useState, useEffect } from 'react'
import './FitnessClass.css'
import { axiosWithAuth } from './utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialClass =
    {
        name: "",
        type: "",
        starttime: "",
        duration: "",
        intensitylevel: "",
        location: "",
        numberofattendees: "",
        maxclasssize: "",
    }



const FitnessClass = () => {

    const { push } = useHistory()

    useEffect(() => {
        axios.get('https://anywherefitness1120.herokuapp.com/api/classes')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    const [fitnessClass, setFitnessClass] = useState(initialClass)

    const changeHandler = e => {
        setFitnessClass({
            ...fitnessClass,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        // console.log(fitnessClass)
        axios.post('https://anywherefitness1120.herokuapp.com/api/classes', fitnessClass)
        .then(res => {
            res.data.push(fitnessClass)
            push('./ClassList')
        })
        .catch(err => console.log(err))
        
        
    }

    return(
        <div className="class-container">

            <h1 className="register-header">Register a Class</h1>

  
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    name="name"
                    value={fitnessClass.name}    
                    placeholder="NAME"
                    onChange={changeHandler}       
                />

                <input 
                    type="text"
                    name="type"
                    value={fitnessClass.type}    
                    placeholder="TYPE"
                    onChange={changeHandler}       
                />

                <input 
                    type="text"
                    name="starttime"
                    value={fitnessClass.starttime}    
                    placeholder="START TIME"
                    onChange={changeHandler}       
                />

                <input 
                    type="text"
                    name="duration"
                    value={fitnessClass.duration}    
                    placeholder="DURATION"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="intensitylevel"
                    value={fitnessClass.intensitylevel}    
                    placeholder="INTENSITY LEVEL"
                    onChange={changeHandler}       
                />

                <input 
                    type="text"
                    name="location"
                    value={fitnessClass.location}    
                    placeholder="LOCATION"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="numberofattendees"
                    value={fitnessClass.numberofattendees}    
                    placeholder="REGISTERED ATTENDEES"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="maxclasssize"
                    value={fitnessClass.maxclasssize}    
                    placeholder="CLASS SIZE"
                    onChange={changeHandler}       
                />
                
                <button>Submit</button>
            </form>
        </div>
    )
}


export default FitnessClass