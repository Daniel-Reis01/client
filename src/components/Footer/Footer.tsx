import "./Footer.css"
import iaphone from "../../assets/iaphone.png";
import { RiInstagramFill } from 'react-icons/Ri';
import {RiTwitterFill} from 'react-icons/Ri';
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
        <section className="footer-background">
            <div className="footer-promo">
                <p>20% off</p>
                <h1>Fine Smille</h1>
                <p>15nov to 7 dec</p>
            </div>
            <div className="footer-headphone">
                <img src={iaphone} alt="color gamer headphones" />
            </div>
            <div className="footer-sale">
                <p>Beats Solo Air</p>
                <h2>Summer Sale</h2>
                <p>company that's grown from 270 to 480 employes in the last 12months.</p>
                <Link to={"/login"}> 
                <button>shop now</button>
                </Link>
            </div>
        </section>
         <p className="last-footer">phanox all right reserved</p>
         <div className="social-medias">
            <RiInstagramFill/>
            <RiTwitterFill/>
         </div>

        
        </>
    )
}
export default Footer