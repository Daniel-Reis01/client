import { Link } from "react-router-dom";
import Fones from "../../assets/fones.png";
import "./Promotional.css";

function Promotional() {
 
    
     
    
    return (
        <>
            <section className="best-deals">
                <div >
                    <p className="text-best-init">Beats solo</p>
                    <h2>Wireless</h2>
                    <h1>HEADPHONE</h1>
                        <Link to={"/login"}> 
                    <button type="button" className="best-button" >
                    Shop Wireless headphone
                    </button>
                    </Link>
                </div>
                <div>
                <img src={Fones} alt="fones-promoçao" />
                </div>
            <div className="deals-descriçao">
                <h4>description</h4>
                <p>
                    The game begins here. With Immortal 1000D <br />
                    gaming headphones, don't just play the
                    <br /> game - feel it,and own it. Level up
                    <br /> Your audio game with 7.1 Channel.
                </p>
            </div>
            </section>
        </>
    );
}
export default Promotional;
