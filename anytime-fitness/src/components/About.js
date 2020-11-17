
import Navbar from './Navbar'
import imageMax from '../images/max500.png'
import imagePH from '../images/placeholder.png'

function About(){
    return(
    
    <div>
        <div className='rowC'><Navbar/></div>
        
        <div className='main'>
        <div>
        <h1 className='topMargin'>This is our Team!</h1>
        <p>We are a students at Lambda School, building cool sites.</p>
        </div>
        </div> 
        {/* main */}
        

        <div className='teamPhotoBar'>
            <div><img src={imageMax} className="teamPhoto" alt="Image of a blue haired web developer named Max" />
            <p>Max is devoted to UI/UX.</p>
            </div>

            <div>
            <img src={imagePH} className="teamPhoto" alt="placeholder" />
            <p>coming soon</p>

            </div>
            <div>
            <img src={imagePH} className="teamPhoto" alt="Placeholder" />
            <p>coming soon</p>

            </div>
        

        </div>

        
         
    </div> 
    // last
    );

}

export default About;