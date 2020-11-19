import react, { useState, useEffect } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth'
import axios from 'axios'
import './ClassList.css'
import { useHistory, useParams } from 'react-router-dom'

const ClassList = () => {

    const { push } = useHistory()
    const { id } = useParams()

    const [classes, setClasses] = useState([])
    
    useEffect(() => {
        axios.get('https://anywherefitness1120.herokuapp.com/api/classes')
        .then(res => {
            setClasses(res.data)
        }, [renderedClasses])
        .catch(err => console.log(err))
    })

    const deleteClass = (itemId) => {
        console.log(itemId)
        axiosWithAuth().put(`/api/classes/${id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const renderedClasses = classes.map(item => {
        return(
                <div key={item.id} className="classlist-container">
                    <h3 className="class-name">{item.name}</h3>
                    <div>
                        <h4>Type: <span>{item.type}</span></h4>
                        <h4>Duration: <span>{item.duration}</span></h4>
                        <h4>Intensity Level: <span>{item.intensitylevel}</span></h4>
                        <h4>Start Time: <span>{item.starttime}</span></h4>
                        <h4>Location: <span>{item.location}</span></h4>
                        <h4>Current Attendees: <span>{item.numberofattendees}</span></h4>
                        <h4>Class Size: <span>{item.maxclasssize}</span></h4>
                    </div>
                    <div className="twobuttons">
                        <button className="edit">Update</button>
                        <button
                            onClick={() => deleteClass(item.id)}
                            className="delete">Delete</button>
                    </div>
                </div>
        )
    })
    
    return(
        <div className="background">
            <div className="button">
               
                <button onClick={() => {
                        push('/FitnessClass')
                    }}>Register a Class</button>
                
            </div>
            
            <h1>Classes</h1>
            <div className="classlist-big-container">
                
                {renderedClasses}
            </div>
        </div>
    )
}

export default ClassList