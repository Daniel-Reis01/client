import "./Navbar.css";
import Bolsa from "../../assets/bolsa de compras.png";
import  { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [count, setCount] = useState(0);

    function incrementCount() {
      setCount(count + 1);
    }
    return (

        
        <header className="nav-bar">
          <Link className="Links" to={"/"}>
          <p>PHANOX</p>
          </Link>  
      <button onClick={incrementCount}>botao contador</button>

            <div className="gift-bag">
             <h1>{count}</h1>
            <img src={Bolsa} />
            </div>
        </header>

    );
}

export default Navbar;