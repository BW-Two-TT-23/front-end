import react, {useState} from 'react'

const initialWeight= (0)
const initialHeight= (0)

function Bmi(){
const [weight, setWeight] = useState(initialWeight)
const [height, setHeight] = useState(initialHeight)
// const [bmi, setBMI] = useState(0)

// const evaluateBMI = (weight, height) =>{

    
//     setBMI(bmi)
    return (
    <div>
    (const user_bmi = 703 *(weight/height))
    </div>
    )
}



export default Bmi;