import { useEffect, useState } from 'react'
import "../styling/Login.css"
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom"


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;

    async function login_user(event){
        event.preventDefault()
        console.log("works")
        Axios.post("http://localhost:1337/login", {
            username: username,
            password: password
        }).then((response) => {
            console.log(response)
            if(response.data.message.length > 0){
                alert("logged in")
                navigate("/dashboard/home");
                
                
            } else{
                console.log("wrong")
            }
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:1337/login").then((response) => {
            console.log(response);
        })
    }, [])

  return (
    <div className="container">
        <div className="wrapper">
        <form className='login_form'>
            <h1>Login</h1>
            <div className="input_tags">
                <input type='text' placeholder='Username' name="username" value={username} onChange={((e) => {setUsername(e.target.value)})}/>
                <input type='password' placeholder='Password' value={password} onChange={((e) => {setPassword(e.target.value)})}/>
                <button onClick={login_user}>Login</button>
            </div>
        </form>
        <div className='under_form'>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>

    </div>
  )
}

export default Login