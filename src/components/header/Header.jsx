import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <div className="headerTitleSm">Jcee & Gilly</div>
        <div className="headerTitleLg">Blog</div>
      </div>
      <img
      className='headerImg' 
      src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
      alt="" />
    </div>
  )
}

export default Header

