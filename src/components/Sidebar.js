import React from 'react'
import "../styling/Sidebar.css";
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebarWrapper">
            <h6 className="sidebarTitle">Pictachat</h6>
                <div className="sidebarMenu">
                    {/* <ul className="sidebarList"> */}
                        <Link to="/dashboard/home"><li className="sidebarListItem" id="home"><i class="fa-solid fa-house"></i>Home</li></Link>
                        <Link to="/dashboard/test"><li className="sidebarListItem" id="search">Search</li></Link>
                        <Link to="/dashboard/test"><li className="sidebarListItem" id="create">Create</li></Link>
                        <Link to="/dashboard/profile"><li className="sidebarListItem" id="profile">Profile</li></Link>
                       {/* <li className="sidebarListItem" onClick={classesClicked} ref={classesRef} id="classes"> <PeopleIcon className='icon' />Classes</li>
                        <li className="sidebarListItem" id="attendance" onClick={attendanceClicked}><ArticleIcon className="icon" />Attendance</li>
                       <li className="sidebarListItem" id="homework" onClick={hwClicked}> <HomeWorkIcon className="icon" />Homework</li>
                        <li className="sidebarListItem" id="homework" onClick={gradesClicked}><EqualizerIcon className="icon" />Grades</li> */}

                    {/* </ul> */}
                </div>
                <div className='more_cog'>
                    <p>more</p>
                </div>
            </div>
        </div>
  )
}

export default Sidebar