import { useState } from 'react'
import "../styling/SignUp.css"
import Axios from "axios"
import { Link } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function sign_up_user(event){
        event.preventDefault()
        console.log("works")
        Axios.post("http://localhost:1337/signup", {
            email: email,
            username: username,
            password: password
        }).then((response) => {
            console.log(response)
        })
    }

  return (
    <div className='container'>
        <div className='wrapper'>
            <form>
                <h1>Instagram</h1>
                <h3>Sign up to see photos and videos from your friends.</h3>
                {/* <button>Loign with Facebook</button> */}
                <div className='input_tags'>
                    <input type='text' placeholder='Email' name="email" value={email} onChange={((e) => {setEmail(e.target.value)})}/>
                    <input type='text' placeholder='Username' name="username" value={username} onChange={((e) => {setUsername(e.target.value)})}/>
                    <input type='text' placeholder='Password' value={password} onChange={((e) => {setPassword(e.target.value)})}/>
                    <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                    <p>By signing up, you agree to our Terms . Learn how we collect, use and share your data in our Privacy Policy and how we use cookies and similar technology in our Cookies Policy .</p>
                    <button onClick={sign_up_user}>Sign up</button>
                </div>
            </form>
            <div className='under_form'>
                <p>Have an account? <Link to="/">Log in</Link></p>
            </div>
        </div>

    </div>
  )
}

export default SignUp