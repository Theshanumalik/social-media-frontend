import React, { useContext, useState } from "react";
import "./addPost.scss";
import { AuthContext } from "../../context/AuthContext";
import profile from "../../assets/user.jpg";
import { AddAPhotoOutlined } from "@mui/icons-material";
const AddPost = () => {
  const { state } = useContext(AuthContext);
  const [postImage, setPostImage] = useState(null);
  return (
    <div className="AddPost">
      <div className="captionInput">
        <img src={profile} alt={state.user.name} />
        <input type="text" placeholder="What's in your mind?" />
      </div>
      <hr />
      <div className="addPostAction">
        <label htmlFor="postImage">
          <AddAPhotoOutlined />
          Image
        </label>
        <input
          type="file"
          maxLength={1}
          id="postImage"
          hidden
          onChange={(e) => setPostImage(e.target.files[0])}
        />
        <button>Share</button>
      </div>
      {postImage && (
        <img src={URL.createObjectURL(postImage)} className="addPostImage" />
      )}
    </div>
  );
};

export default AddPost;
