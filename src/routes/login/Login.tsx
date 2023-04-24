import DALL from "../../assets/DALL.png"
import { Navbar } from "../../components/Navbar"
import "./login.css"
function Login() {
    return (
        <><Navbar />
            <section className="background-">
          

                <img src={DALL} alt="a image from shoping" />
            

                <div className="login-form">
                    <label>email:
                    <br/>
                        <input type="text" name="email" />
                    </label>
                    <label>password:
                    <br/>
                        <input className="input-password" type="password" name="password" />
                    </label>
                   <button type="submit">log in</button>

                </div>
            </section>
        </>
    )
}
export default Login