import { useEffect, useState } from 'react'
import "../../styling/dashboard/Profile.css";
import Axios from "axios"

function Profile() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:1337/login").then((response) => {
            console.log(response)
            setUsername(response.data.user[0].username);
        })
    }, [])


  return (
    <div className='profile_container'>
        <div className='profile_wrapper'>
            <div className='profile_content_wrapper'>
                <div className='profile_content'>
                    <header className='profile_content_header'>
                        <div className='profile_content_header_content'>
                            <div className='profile_pic'>
                                <img src="https://staticg.sportskeeda.com/editor/2022/12/8b62c-16713197008331-1920.jpg"/>
                            </div>
                            <p className='profile_username'>{username}</p>
                        </div>
                    </header>
                    <section className='profile_content_features_section'>features</section>
                    <section className='profile_content_posts_section'>posts</section>
                    <footer className='profile_section_footer'>footer</footer>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile