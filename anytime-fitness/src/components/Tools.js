
import Navbar from './Navbar'
import numbers from '../images/numbers.png'

function Tools(){
    return(
    
    <div>
        <div className='rowC'>
        <Navbar/>
        </div>
        <div className='rowC'>
        <h1>Tools to help</h1>
        </div>
        <div><img src={numbers} className="formImage" alt="a heart and the words your numbers" /></div>
        <form>
            <input></input>
        </form>

    </div>
    
    );

}

export default Tools;