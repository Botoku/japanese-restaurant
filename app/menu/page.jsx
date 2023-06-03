import React from "react";
import classes from "../../styles/menu.module.css";
import Image from "next/image";


function Menu() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.box1}>
          <div className={classes.content}>
            <div className={classes.imgCont}>
                <Image className={classes.image} fill src='/ramen-noodle-soup.webp'/>
            </div>
            <p><span>Ramen</span> egg noodles in a salty broth is Japan’s favourite late-night meal. There are four major soup styles: tonkotsu (pork bone), miso, soy sauce and salt.</p>
          </div>
        </div>

        <div className={classes.box2}>
          
        <div className={classes.content}>
            <div className={classes.imgCont}>
                <Image fill src='/Seafood-okonomiyaki.webp'/>
            </div>
            <p><span>Okonomiyaki</span> literally “grilled as you like”.It’s a savoury pancake filled with any number of things, usually cabbage and pork, and topped with fish flakes, dried seaweed, mayo & a Worcester-style sauce. </p>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.content}>
            <div className={classes.imgCont}>
                <Image fill src='/Unagi.webp'/>
            </div>
            <p><span>Unagi</span> river eel,  grilled over charcoal and lacquered with a sweet barbecue sauce. </p>
          </div>
        </div>

        <div className={classes.box3}>
          <div className={classes.content}>
            <div className={classes.imgCont}>
                <Image fill src='/Cauliflower-tempura.webp'/>
            </div>
            <p><span>Tempura</span> batter-coated seafood and vegetables fried in sesame oil and served with either a tiny pool of salt or a dish of soy sauce-flavoured broth spiked with grated radish for dipping.</p>
          </div>
        </div>

        <div className={classes.box}>
        <div className={classes.content}>
            <div className={classes.imgCont}>
                <Image fill src='/smoked-mackerel-maki.webp'/>
            </div>
            <p><span>Sushi</span>Raw fish served on rice seasoned lightly with vinegar. </p>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.content}>
            <div className={classes.imgCont}>
                <Image fill src='/tonkatsu-pork.webp'/>
            </div>
            <p><span>Tonkatsu</span>breaded and deep-fried pork cutlet.Tonkatsu is melt-in-your-mouth tender, served with a side of miso soup and a mountain of shredded cabbage.</p>
          </div>
        </div>

        <div className={classes.box4}>
          <div className={classes.content}>
            <div className={classes.imgCont}>
                <Image fill src='/yakitori-chicken.webp'/>
            </div>
            <p><span>Yakitori</span>charcoal-grilled chicken.Nearly every part of the chicken is on the menu, all grilled to perfection, seasoned with either shio (salt) or tare (a sweet soy sauce-based glaze) </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
