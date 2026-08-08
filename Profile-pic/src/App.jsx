import { useState } from "react"
import "./App.css";
import myPic from "./image/My pic.jpg";

function App(){

  const [value, setValue] = useState(true)
  const [followers, setFollowers] = useState(100)
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="ID">

      
      <div className="box">
      <div className="img">
        <img src={myPic} alt="Profile" />
      </div>

        <div className="info">
          <h1>zoey._.035</h1>
          <h3>🩷 her</h3>
          <div className="followers">
            <p>0 post</p>
            <p>{followers} followers</p>
            <p>100 following</p>
          </div>
          <p>It's a big deal cause it's my dream.🦢</p>
          

        </div>
      </div>
        <button onClick={() => {
          if (isFollowing) {
            setFollowers(followers - 1);
            setIsFollowing(false);
          } else {
            setFollowers(followers + 1);
            setIsFollowing(true);
          }
        }}>
        {isFollowing ? "Following" : "Follow"}
        </button>
    </div>
  )
}

export default App