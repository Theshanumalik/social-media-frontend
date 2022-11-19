import { Link } from 'react-router-dom'
import  './rightSideBar.scss'
import pic from '../../assets/user.jpg'
const RightSideBar = () => {
  return (
    <aside className="rightSideBar">
      <div className="card">
        <h3>Suggestion for you</h3>
        <ul>
          <li>
            <img src={pic} alt="s" />
            <span>Wasim raja</span>
            <div className="card-action">
            <button>Follow</button>
            <button>Remove</button>
            </div>
          </li>
          <li>
            <img src={pic} alt="s" />
            <span>Wasim raja</span>
            <div className="card-action">
            <button>Follow</button>
            <button>Remove</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <h3>Online Friends</h3>
        <ul>
          <li>
            <img src={pic} alt="s" />
            <span>Wasim raja</span>
          </li>
          <li>
            <img src={pic} alt="s" />
            <span>Wasim raja</span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default RightSideBar