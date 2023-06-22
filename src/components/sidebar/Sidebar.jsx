import './sidebar.css'
import '../../pages/home/home.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
     <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        className='sidepicha'
        src="https://images.unsplash.com/photo-1631651738795-b89313eb68d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
        alt="" />
        <p>   Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
       </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial"> 
       <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
      </div>
      </div>
      </div>
    
  )
}

export default Sidebar

