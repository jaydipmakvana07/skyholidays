import React, { useState } from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";
import BannerVideo from "../assets/video.mp4";

function Hero() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>We Have Received your Information</h5>

          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
      <div className={Classes.heroVideo}>
        <video autoPlay loop muted className={Classes.video}>
          <source src={BannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              DREAM, EXPLORE & DISCOVER WITH{" "}
              <span className={Classes.nickName}>SKY HOLIDAYS</span>
            </h1>
            <p>
              Save at least 25% on stays worldwide, from relaxing retreats to
              off-grid adventures
            </p>
          </div>

          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label>Where you want to go</label>
              <input type="text" placeholder="type your Destination" />
            </div>

            <div className={Classes.search}>
              <label>Date</label>
              <input type="date" />
            </div>

            <div className={Classes.search}>
              <label>Your Name</label>
              <input type="text" placeholder="your name"/>
            </div>
            
            <div className={Classes.search}>
              <label>Contact Number</label>
              <input type="text" placeholder="+9876543210"/>
            </div>

            <button onClick={() => setModal(true)}>book now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
