import  './leftSideBar.scss'
import {Link} from 'react-router-dom'
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gallery from "../../assets/8.png";
import userIcon from "../../assets/user.jpg";

const LeftSideBar = () => {
  return (
    <aside className="leftSideBar">
        <ul>
          <li>
            <img src={userIcon} className="userIcon" />
            <span>John Doe</span>
          </li>
          <li>
            <img src={Groups} />
            <span>Groups</span>
          </li>
          <li>
            <img src={Friends} />
            <span>Friends</span>
          </li>
          <li>
            <img src={Market} />
            <span>Market</span>
          </li>
          <li>
            <img src={Watch} />
            <span>Watch</span>
          </li>
          <li>
            <img src={Memories} />
            <span>Memories</span>
          </li>
          <li>
            <img src={Events} />
            <span>Events</span>
          </li>
          <li>
            <img src={Gallery} />
            <span>Gallery</span>
          </li>
        </ul>
    </aside>
  )
}

export default LeftSideBar