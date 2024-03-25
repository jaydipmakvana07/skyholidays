import React from "react";

import Classes from "../Styles/Services.module.css";

import service1 from "../assets/service01.gif";
import service2 from "../assets/service02.gif";
import service3 from "../assets/service03.gif";
import service4 from "../assets/service04.gif";
import service5 from "../assets/service05.gif";
import service6 from "../assets/service06.gif";
import service7 from "../assets/service07.gif";
import service8 from "../assets/service08.gif";


function Service() {
  const data = [
    {
      icon: service1,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
    {
      icon: service2,
      title: "Get Best Prices",
      subTitle:
        "Get Affordable Price And Amazing Discount On International And Domestic Packages",
    },
    {
      icon: service3,
      title: "Domestic Tour Packages",
      subTitle:
        "Explore your own backyard with tailored travel experiences across your country's diverse landscapes and attractions.",
    },
    {
      icon: service4,
      title: "International Tour Packages",
      subTitle:
        " Embark on unforgettable adventures abroad with meticulously crafted itineraries to global destinations.",
    },
    
    {
      icon: service5,
      title: "Domestic Air Tickets",
      subTitle:
        "Fly seamlessly within your country with our user-friendly platform offering convenient booking options and competitive fares.",
    },
    {
      icon: service6,
      title: "Online Passport Agent",
      subTitle:
        "Streamline the passport application process with efficient online assistance for hassle-free travel documentation.",
    },
    {
      icon: service7,
      title: "Car Rental Service",
      subTitle:
        "Hit the road in style with our seamless car rental service, offering a fleet of vehicles to suit every traveler's needs.",
    },
    {
      icon: service8,
      title: "24/7 Customer Support",
      subTitle:
        " Round-the-clock assistance ensures peace of mind and immediate help whenever travelers need it.",
    },

  ];

  return (
   
    
    <section id="service" className={Classes.service}>
   
      
      {data.map((item) => {
        return (
          <div className={Classes.services}>
            <div className={Classes.icon}>
              <img src={item.icon} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        );
      })}
      </section>
      
    
  );
}

export default Service;
