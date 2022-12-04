import Post from "../../components/post/Post";
import "./home.scss";
import AddPost from "../../components/addPost/AddPost";
const Home = () => {
  return (
    <main>
      <AddPost />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
};

export default Home;
