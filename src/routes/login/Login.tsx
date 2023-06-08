import { Link } from "react-router-dom"
import DALL from "../../assets/DALL.png"
import { Navbar } from "../../components/Navbar"
import React from "react"
import Group from "../../assets/giftsgroup.png"
import "./login.css"

function handleLoginRetriev() {
    const retriev = document.querySelector('.login-retriev');
    const loginInitial = document.querySelector('.login-form')
    //instaciamento do elemento e checagem se ele existe no html
    if (retriev instanceof HTMLElement && loginInitial instanceof HTMLElement) {
        retriev.style.display = "block";
        loginInitial.style.display = "none"
    }
};
function handleLoginInitial() {
    const initial = document.querySelector('.login-initial');
    const loginInitial = document.querySelector('.login-form')
    if (initial instanceof HTMLElement && loginInitial instanceof HTMLElement) {
        initial.style.display = "block";
        loginInitial.style.display = "none";
    }
}

function Login() {

    return (
        <><Navbar />
            <section className="background-login">
                <img src={DALL} alt="" />
                <div className="logon-promocional">

                    <img src={Group} />
                </div>

                <div className="login-form">
                    {/* login para usuario já cadastrado */}
                    <h3>Hello! Welcome back</h3>
                    <p>make yours login now</p>
                    <label>
                        <br />
                        <input type="text" name="email" placeholder=" Email" />
                    </label><br />
                    <label >
                        <br />
                        <input className="input-password" type="password" name="password" placeholder=" Password" />
                    </label>
                    <p onClick={handleLoginRetriev} className="link-login">Forgot your password?</p>
                    <button className="login-button" type="submit">log in</button>
                    <p onClick={handleLoginInitial} className="link-login">Create an account</p>

                </div>

                <div className="login-initial">
                    {/*login para usuario nao cadastrado*/}
                    <h3>Join us,<br />Create your account today!</h3>
                    <p>inform your data</p>
                    <label>
                        <br />
                        <input type="text" name="name of user" placeholder="Name" />
                    </label>
                    <br />
                    <label>
                        <br />
                        <input type="text" name="email" placeholder="Email" />
                    </label>
                    <br />
                    <label>
                        <br />
                        <input type="text" name="confirm email" placeholder="Confirm-email ..." />
                    </label>
                    <br />
                    <label><br />
                        <input type="password" name="password" placeholder="Password" />
                    </label>
                    <br />
                    <label>
                        <br />
                        <input type="password" name="confirm password" placeholder="Confirm-password ..." />
                    </label>
                    {/* concertar imagen de check !!!!!!!!!!!!!!!!!!!!!!!!*/}
                    {/* concerta botao do login*/}
                    <p>
                        <div className="checkbox-wrapper-13">
                            <input type="checkbox" id="c1-13"/>
                        </div>
                        I read and accept the terms</p>
                    <button className="login-button" >Create</button>
                </div>

                <div className="login-retriev">
                    <h3>Lost your password?<br />
                        retrieve via email now</h3>
                    <p>enter the data</p>
                    <label>
                        <br />
                        <input type="text" name="name of user" placeholder="Name" />
                    </label>
                    <br />
                    <label>
                        <br />
                        <input type="text" name="email" placeholder="Email" />
                    </label>
                    <br />
                    <label>
                        <br />
                        <input type="text" name="confirm email" placeholder="Confirm-email ..." />
                    </label>
                    <p>A code will be sent to your email<br />
                        confirm this code on the next screen</p>
                    <button className="login-button" >send</button>

                </div>
            </section>
        </>
    )
}
export default Login