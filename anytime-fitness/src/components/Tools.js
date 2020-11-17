
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
        <div className='rowC'>
            <img src={numbers} className="formImage" alt="a heart and the words your numbers" />
        <form>
            <h2>Calculate your BMI</h2>
            
            <div>
                
            <input type='text'
            placeholder="weight"></input>
            
            </div>
            <div>
            
            <input type='text'
            placeholder="height">
        
            </input>
            <div>
                <button>Calculate</button>
            </div>
            <h2>Your BMI is: </h2>
            </div>

        </form>
        </div>
    </div>
    
    );

}

export default Tools;