import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth'
import { useParams, useHistory } from 'react-router-dom'



const initialClass = {
    name: "",
    type: "",
    starttime: "",
    numberofattendees: "",
    maxclasssize: "",
    location: "",
    intensitylevel: "",
    duration: ""
}

const ClassUpdate = (props) => {

    const { push } = useHistory()
    const { id } = useParams()
    const [updateClass, setUpdateClass] = useState(initialClass)

    const changeHandler = e => {
        setUpdateClass({
            ...updateClass,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axiosWithAuth().put()
    }

    return(
        <div>
            <h2>Update Item</h2>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    name="name"
                    value={updateClass.name}    
                    placeholder="NAME"
                    onChange={changeHandler}       
                />

                <input 
                    type="text"
                    name="type"
                    value={updateClass.type}    
                    placeholder="TYPE"
                    onChange={changeHandler}       
                />

                <input 
                    type="text"
                    name="starttime"
                    value={updateClass.starttime}    
                    placeholder="START TIME"
                    onChange={changeHandler}       
                />

                <input 
                    type="text"
                    name="duration"
                    value={updateClass.duration}    
                    placeholder="DURATION"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="intensitylevel"
                    value={updateClass.intensitylevel}    
                    placeholder="INTENSITY LEVEL"
                    onChange={changeHandler}       
                />

                <input 
                    type="text"
                    name="location"
                    value={updateClass.location}    
                    placeholder="LOCATION"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="numberofattendees"
                    value={updateClass.numberofattendees}    
                    placeholder="REGISTERED ATTENDEES"
                    onChange={changeHandler}       
                />

                <input 
                    type="number"
                    name="maxclasssize"
                    value={updateClass.maxclasssize}    
                    placeholder="CLASS SIZE"
                    onChange={changeHandler}       
                />
                
                <button>Update</button>
            </form>
        </div>
    )
}

export default ClassUpdate