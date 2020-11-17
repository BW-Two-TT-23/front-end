import Navbar from './Navbar'
import kettlebell from '../images/kettlebell.png'
import run from '../images/run.png'

function Home(){
    return(
    
        <div>
    <div className='rowC'>
        
        <Navbar />
        </div>
        
        <div className='homeMain'>
            <div className='homeMain1'>
            <h1>Welcome to AnyTime Fitness</h1>
            <p>Welcome!</p>
            <p>We're glad you're here.</p>
            <p>The world is a little crazy right now,</p>
                
            <p>but you can still take good care of yourself.</p> 
            
            <p>Register for a class today!</p>
            </div>

        <div className="photosMainLeft">
        <img src={kettlebell} className="photosMain20" alt="Image of a kettlebell" />

        </div>
        
        <div className="photosMainright">
        <img src={run} className="photosMainN20" alt="Image of a runner" />

        </div>
       
        </div>
        </div>
    );

}

export default Home;