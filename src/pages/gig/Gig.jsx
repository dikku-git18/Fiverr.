import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR > GRAPHICS & DESIGN ></span>
          <h1>I will create amazing art using midjourney ai</h1>

          <div className="user">
            <img
              className="pp"
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ad68f554913d9d326d611e604ef79b0b-1608722734146/74e5ab33-a5fc-40ae-9cee-a91b23e80237.jpg"
              alt=""
            />
            <span>Motilonian</span>
            <div className="stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/289150700/original/ecc98cc908669240e0b03ee7b1cd575f94ef4ba0/create-amazing-art-using-midjourney-ai.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/300950700/original/40ef17230e6912bae9c198375d1e367519ab0272/create-4-portraits-from-your-picture-with-ai.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/7e8e52bee4c38f4040875a84836e5915-1678675953232/Ice%201.jpg"
              alt=""
            />
          </Slider>
          <h2>About this Gig</h2>

          <div className="para">
            <p>Beautiful Art based on your ideas!</p>
            <p>
              <br></br>
            </p>
            <p>
              If you want to see your ideas come to life through the power of
              Midjourney AI, you came to the right place!
            </p>
            <p>
              <br></br>
            </p>
            <p>
            Your artwork will be generated using the most advanced artistic image generation AI (Midjourney). I will iterate different designs of whatever it is you are wishing for until you LOVE it. In this process I will be as communicative as possible and let you influence the direction of the artwork as much as you like.
            </p>
            <p>
              <br></br>
            </p>
            <p>
              I am doing anything! Only your imagination sets the boundaries.
            </p>
          </div>

          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ad68f554913d9d326d611e604ef79b0b-1608722734146/74e5ab33-a5fc-40ae-9cee-a91b23e80237.jpg"
                alt=""
              />
              <div className="info">
                <span>Motilonian</span>
                <div className="stars">
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">INDIA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">2 hours</span>
                </div>
                <div className="item">
                  <span className="title">last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>

              <hr />

              <div className="para">
                <p>Beautiful Art based on your ideas!</p>
                <p>
                  <br></br>
                </p>
                <p>
                  If you want to see your ideas come to life through the power
                  of Midjourney AI, you came to the right place!
                </p>
                <p>
                  <br></br>
                </p>
                <p>
                  Your artwork will be generated using the most advanced
                  artistic image generation AI (Midjourney). I will iterate
                  different designs of whatever it is you are wishing for until
                  you LOVE it. In this process I will be as communicative as
                  possible and let you influence the direction of the artwork as
                  much as you like.
                </p>
                <p>
                  <br></br>
                </p>
                <p>
                  I am doing anything! Only your imagination sets the
                  boundaries.
                </p>
              </div>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                  alt=""
                />
                <div className="info">
                  <span>User</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p className="para2">
                Great communication before, & during the project. Very skilled
                with midjourney to create exactly the imagery i was looking to
                have developed and provide a sense of connection with what
                patients in the US healthcare system feel as they move along
                their healthcare jouney! Worksample imageBig worksample image
                Helpful?
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                  alt=""
                />
                <div className="info">
                  <span>User</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p className="para2">
                Great communication before, & during the project. Very skilled
                with midjourney to create exactly the imagery i was looking to
                have developed and provide a sense of connection with what
                patients in the US healthcare system feel as they move along
                their healthcare jouney! Worksample imageBig worksample image
                Helpful?
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                  alt=""
                />
                <div className="info">
                  <span>User</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <span>5</span>
              </div>
              <p className="para2">
                Great communication before, & during the project. Very skilled
                with midjourney to create exactly the imagery i was looking to
                have developed and provide a sense of connection with what
                patients in the US healthcare system feel as they move along
                their healthcare jouney! Worksample imageBig worksample image
                Helpful?
              </p>

              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>


        <div className="right">
          <div className="price">
            <h3>1 digital AI Generated Art Piece
</h3>
            <h2>₹1,299</h2>
          </div>
          <p>
          The image will be delivered in PNG format.
          </p>
          <div className="details">
            <div className="item">
              <img src="/images/clock.png" alt=""/>
              <span>3 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/images/recycle.png" alt=""/>
              <span>2 Revisions</span>
            </div>
          </div>

          <div className="feartures">
            <div className="item">
              <img src="/images/greencheck.png" alt=""/>
              <span>1 image</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt=""/>
              <span>Prompt creation</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt=""/>
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt=""/>
              <span>Image upscaling</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};
export default Gig;
