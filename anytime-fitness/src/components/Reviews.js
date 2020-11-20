import Navbar from "./Navbar";
import imageMax from "../images/max500.png";
import imagePH from "../images/placeholder.png";

function Reviews() {
  return (
    <div>
      <div className="rowC">
        <Navbar />
      </div>

      <div className="main">
        <div>
          <h1 className="topMargin">Read Our Reviews</h1>
          <p>
            AnyTime Fitness is transforming lives everywhere. Join our growing
            community today!
          </p>
        </div>
      </div>
      {/* main */}

      <div className="reviewBars">
        <div className="reviewBar">
          <div>
            <img src={imageMax} className="teamPhoto" alt="Ma" />
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

        <div className="reviewBar">
          <div>
            <img src={imageMax} className="reviewCard" alt="placeholder" />
            <p>coming soon</p>
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
      </div>
    </div>
    // last
  );
}

export default Reviews;
