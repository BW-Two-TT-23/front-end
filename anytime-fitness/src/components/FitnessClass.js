import react, { useState } from 'react'
import Navbar from './Navbar'


const initialClass = {
    name: "",
    type: "",
    start_time: "",
    duration: "",
    intensity_level: "",
    location: "",
    registered_attendees: "",
    class_size: "",
    class_image: ""
}

const FitnessClass = () => {

    const [fitnessClass, setFitnessClass] = useState(initialClass)

    const changeHandler = e => {
        setFitnessClass({
            ...fitnessClass,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    return(
        <div className="class-container">
             <div className='rowC'>
                <Navbar/>
            </div>
            <div className='rowC'>
            <h1>Register a Class</h1>
            </div>
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
                    name="start_time"
                    value={fitnessClass.start_time}    
                    placeholder="START TIME"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="duration"
                    value={fitnessClass.duration}    
                    placeholder="DURATION"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="intensity_level"
                    value={fitnessClass.intensity_level}    
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
                    name="registered_attendees"
                    value={fitnessClass.registered_attendees}    
                    placeholder="REGISTERED ATTENDEES"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="class_size"
                    value={fitnessClass.class_size}    
                    placeholder="CLASS SIZE"
                    onChange={changeHandler}       
                />
                <input 
                    type="file"
                    name="class_image"
                    id={Date.now()}
                    placeholder="CLASS IMAGE"
                    src={fitnessClass.class_image}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default FitnessClass