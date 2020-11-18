
import Navbar from './Navbar'
import imageMax from '../images/max500.png'
import imagePH from '../images/placeholder.png'

function Reviews(){
    return(
    
    <div>
        <div className='rowC'><Navbar/></div>
        
        <div className='main'>
        <div>
        <h1 className='topMargin'>Check Out Our Reviews!</h1>
        <p>Text Here</p>
        </div>
        </div> 
        {/* main */}
        

        <div className='reviewBar'>
            <div><img src={imageMax} className="teamPhoto" alt="Ma" />
            <p>Max is devoted to UI/UX.</p>
            </div>

            <div>
            <img src={imagePH} className="reviewCard" alt="placeholder" />
            <p>coming soon</p>

            </div>
            <div>
            <img src={imagePH} className="reviewCard" alt="Placeholder" />
            <p>coming soon</p>

            </div>
        

        </div>
        <div className='reviewBar'>
            <div className="reviewCard">
            <p>Text Here</p>
            </div>

            <div>
            <img src={imagePH} className="reviewCard" alt="placeholder" />
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

export default Reviews;