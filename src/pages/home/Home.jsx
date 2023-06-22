import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from "../../components/posts/Posts";
import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-posts">
          <Posts />
        </div>
        <div className="home-sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
  
