/* eslint-disable jsx-a11y/img-redundant-alt */

import Navbar from './Navbar'
import imageMax from '../images/max500.png'
import imagePH from '../images/placeholder.png'
import imageTaja from '../images/taja.png'
import imagePaul from '../images/paul.jpeg'
import imageChris from '../images/chris.jpeg'

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
            <img src={imagePaul} className="teamPhoto" alt="image of Paul" />
            <p>Paul is an excellent team player and web dev.</p>

            </div>
            <div>
            <img src={imageChris} className="teamPhoto" alt="image of Christopher" />
            <p>Full stack web dev, creative.</p>

            </div>
        

        </div>
        <div className='teamPhotoBar'>
            <div><img src={imageTaja} className="teamPhoto" alt="image of Taja" />
            <p>Taja, our full stack developer and training lead.</p>
            </div>

            <div>
            <img src={imagePH} className="teamPhoto" alt="placeholder" />
            <p>Michelle, UX/UI.</p>

            </div>
            <div>
            <img src={imagePH} className="teamPhoto" alt="Placeholder" />
            <p>Grady, UX/UI</p>

            </div>
        

        </div>
        
         
    </div> 
    // last
    );

}

export default About;