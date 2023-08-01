import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import { projects } from "../../data";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Pay when you are happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video
              src="./videos/stories.mp4"
              controls
              poster="./images/video teaser image.webp"
            ></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              <b>fiverr</b>
              <span className="dots">.</span> business
            </h1>
            <h1>Advanced solutions and professional talent for businesses</h1>
            <p>
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Fiverr pro
            </div>
            <p>
              Access top freelancers and professional business tools for any
              project
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Fiverr Certified
            </div>
            <p>Build your own branded marketplace of certified experts</p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Fiverr Enterprise
            </div>
            <p>
              Manage your freelance workforce and onboard additional talent with
              an end-to-end SaaS solution
            </p>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};
export default Home;
