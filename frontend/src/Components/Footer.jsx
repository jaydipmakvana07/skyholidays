import React from "react";

import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/skylogo.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+91 7043604421</p>
          <p>+91 9558284055</p>
          <p>skyholidays2023@gmail.com</p>
          <a href="https://www.facebook.com/people/Sky-Holiday/pfbid02VRk4ZMWFDkf6D2CBMSDG6eWj5RZneVGeBNzJJL1NGa8HwJGnGr76dAqAzXkXifsQl/?mibextid=ZbWKwL">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/skyholidaysofficial?igsh=bXNhOXBkMGY2dXpi">
            <img src={instagram} alt="" />
          </a>
          <a href="https://api.whatsapp.com/message/A64COBWZY3K4F1?autoload=1&app_absent=0">
            <img src={whatsapp} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
              SKY <span>HOLIDAYS</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <div>
            <h2>Office Address</h2>
          </div>

          <p>B-904, Time Square 2, Sindhubhavan Road, Ahmedabad</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
