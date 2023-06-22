import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
          <form className="settingsForm">
            <label >Profile Picture</label>
            <div className="settingsPP">
              <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="" 
              />
             <label htmlFor=''>
             <i className=" settingsPPIcon fa-solid fa-user"></i>
             </label>
             <input type="text" id='fileInput' style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Josia Njidile"/>
            <label>Email</label>
            <input type="email" placeholder="josianjidile@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <div className="settingsSubmit">Update</div>
          </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Settings