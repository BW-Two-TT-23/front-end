import react, { useState, useEffect } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth'
import axios from 'axios'
import './ClassList.css'
import { Route, useHistory, useParams } from 'react-router-dom'
import ClassUpdate from './ClassUpdate'



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

const ClassList = () => {

    const { push } = useHistory()
    const { id } = useParams()

    const [classes, setClasses] = useState([])
    const [editing, setEditing] = useState(false)
    const [classToEdit, setClassToEdit] = useState(initialClass)
    
    useEffect(() => {
        axiosWithAuth().get('/api/classes')
        .then(res => {
            setClasses(res.data)
        })
        .catch(err => console.log(err))
    },[])

    const deleteClass = (item) => {
        axiosWithAuth().delete(`/api/classes/${item}`)
        .then(res => {
            console.log(classes)
            console.log(res)
            const newClasses = classes.filter((oneClass) => {
                console.log(oneClass)
                return `${oneClass.id}` !== `${item}`
            })
            setClasses(newClasses)
        })
        .catch(err => {
            console.log(err)
        })
    }

    // const updateClass = (item) => {
    //     axiosWithAuth().put(`/api/classes/${item}`, classToEdit)
    //     .then(res => {
    //         console.log(res)
    //         console.log(classes)
    //     })
    //     .catch(err => console.log(err))
    // }

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
                        <button
                            onClick={() => {
                                push(`/ClassUpdate/${item.id}`)
                                console.log(item.id)
                            }}
                            className="edit">Update</button>
                        <button
                            onClick={e => deleteClass(item.id)}
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
            {/* <Route path="/ClassUpdate" render={(props) => (
                        <ClassUpdate {...props} setClasses={setClasses} />
                    )}/> */}
        </div>
    )
}

export default ClassList