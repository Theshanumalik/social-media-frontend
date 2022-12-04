import Post from "../../components/post/Post";
import "./profile.scss";
import profile from "../../assets/user.jpg";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import {
  Add,
  FacebookOutlined,
  GitHub,
  Instagram,
  Twitter,
} from "@mui/icons-material";
const Profile = () => {
  const { state } = useContext(AuthContext);
  return (
    <main>
      <div className="coverPicture">
        <img className="profileCover" src={profile} />
      </div>
      <section className="profileHeader">
        <img src={profile} alt={state.user.name} className="profilePicture" />
        <div className="userInformation">
          <h1>{state.user.name}</h1>
          <ul>
            <li>
              <FacebookOutlined />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <GitHub />
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
          <button>
            <Add /> Follow
          </button>
        </div>
      </section>
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
};

export default Profile;
