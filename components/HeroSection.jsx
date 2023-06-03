import React from "react";
import Button from "./Button";
import classes from "../styles/heroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={classes.heroCont}>
      <h2>Taste the tradition of Japan</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Turpis diam id nulla libero at
        faucibus libero eget. Ornare tincidunt tempor sed egestas pulvinar
        facilisis.
      </p>
      <Button isFilled />
      <div className={classes.imgCont}>
        <Image
          src="/foodAnimation.svg"
          alt="animation"
          fill
          className={classes.heroImg}
        />
      </div>
    </div>
  );
};

export default HeroSection;
