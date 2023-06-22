import "./topbar.css";
import {Link} from "react-router-dom"
const TopBar = () => {
    const user = false;
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>


        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
            </div>
        <div className="topRight">
          { user ? (  <img 
            className="topImg"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="profile picture" 
            />):(
                <ul className="topList">
                    <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
                   </li>
                <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
                </li>
                </ul>
                
            )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          
        </div>
        </div>
  )
}

export default TopBar