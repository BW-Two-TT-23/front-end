import react, { useState, useEffect } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth'
import axios from 'axios'
import './ClassList.css'

const ClassList = () => {

    const [classes, setClasses] = useState([])
    
    useEffect(() => {
        axios.get('https://anywherefitness1120.herokuapp.com/api/classes')
        .then(res => {
            setClasses(res.data)
        }, [])
        .catch(err => console.log(err))
    })

    const renderedClasses = classes.map(item => {
        return(
            <div key={item.id} className="classlist-container">
                <h2>{item.name}</h2>
                <h4>Class Type: {item.type}</h4>
                <h4>Duration: {item.duration}</h4>
                <h4>Intensity Level: {item.intensitylevel}</h4>
                <h4>Start Time: {item.starttime}</h4>
                <h4>Location: {item.location}</h4>
                <h4>Current Attendees: {item.numberofattendees}</h4>
                <h4>Class Size: {item.maxclasssize}</h4>
            </div>
        )
    })
    
    return(
        <div>
            {renderedClasses}
        </div>
    )
}

export default ClassList