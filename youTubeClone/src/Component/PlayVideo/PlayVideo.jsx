import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";


const PlayVideo = ({videoId}) => {
  return (
    <div className="play-video">
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer" ></iframe>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
        <div className="play-video-info">
            <p>200 Views &bull ; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />100</span>
                <span><img src={dislike} alt="" />3</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>P2 motivation</p>
                <span>10k Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="video-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro molestias omnis animi quae? Explicabo.</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Aaruhi <span>2 days ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis id possimus omnis, commodi nemo! Lorem ipsum dolor sit amet.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Aaruhi <span>2 days ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis id possimus omnis, commodi nemo! Lorem ipsum dolor sit amet.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Aaruhi <span>2 days ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis id possimus omnis, commodi nemo! Lorem ipsum dolor sit amet.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Aaruhi <span>2 days ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis id possimus omnis, commodi nemo! Lorem ipsum dolor sit amet.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo
