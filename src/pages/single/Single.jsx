import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/singlepost/Singlepost'
import './single.css'

const Single = () => {
  return (
    <div className='single'>
        <Singlepost/>
        <Sidebar/>
        </div>
  )
}

export default Single