import React from "react";

import Classes from "../Styles/Testimonials.module.css";

import avatar from "../assets/ceo01.jpg";

import avatar3 from "../assets/ceo02.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section id="testimonials" className={Classes.testimonials}>
      <h1>Contact Us</h1>

      <div className={Classes.boxContainer}>
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <div className={Classes.info}>
            <img src={avatar} alt="image" />
            <div>
              <h3>Bhaktik Patel</h3>
              <span>CEO • sky holidays</span>
              <p>+91 7043604421</p>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <div className={Classes.info}>
            <img src={avatar3} alt="image" />
            <div>
              <h3>Yash Chauhan</h3>
              <span>CEO • sky holidays</span>
              <p>+91 9558284055</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
