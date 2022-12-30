import React from "react";
import WoodenTable from "../assets/woodentable.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${WoodenTable})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Organizer, Nguyen Ngoc Bao Quynh, opened her Restaurant in Los Alamitos, California on September 27, 1977. Today, there are 37 areas all through Arizona, California, Illinois, Louisiana, Nevada, Oregon, Tennessee, and Washington.

Quynh Restaurants are well known with a substantial gathering of people including families, kids, seniors, and business experts. Our benevolent condition is perfect for praising unique events, facilitating a business lunch, or assembling for a flavorful dinner with loved ones.

Open day by day for lunch and dinner, Quynh restaurant offers a choice of naturally arranged things utilizing just the best fixings accessible. Top picks incorporate Certified Angus Beef®, crisp fish, rotisserie chicken, infant back pork ribs.

New prepared pot pie, strength plates of mixed greens, wood-let go pizzas, pasta, sandwiches, burgers, and more. Quynh restaurant heated merchandise and treats including our Six-Layer Chocolate Motherlode Cake, Scratch Carrot Cake, and delectably rich cream cheddar pies are prevalent top choices with our visitors.
        </p>
      </div>
    </div>
  );
}

export default About;
