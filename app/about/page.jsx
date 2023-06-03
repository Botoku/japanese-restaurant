import React from "react";
import Image from "next/image";
import classes from "../../styles/about.module.css";

function About() {
  return (
    <div className={classes.aboutCont}>
        <br/>
      <p className={classes.firstP}>
        Welcome to <span>Miyabi House</span>, where every plate tells a story, and every meal
        is an unforgettable experience.
      </p>
      <div className="seperatorCont">
        <Image src="/sectionSeperator.svg" alt="" fill={true} />
      </div>
      <p>
        At <span>Miyabi House</span>, the art of Japanese cuisine comes alive. We invite you
        to embark on a culinary journey through the rich flavors, time-honored
        traditions, and meticulous attention to detail that define our
        restaurant. Let us share with you the story of our establishment, rooted
        in the heart of Japan and inspired by a deep passion for exceptional
        dining experiences.
      </p>
      <br/>
      <div className={classes.imgCont}>
        <Image src="/chef1.jpg" fill />
      </div>
      <br/>
      <p>
        At <span>Miyabi House</span>, we believe that every dish is a work of art. Our
        culinary philosophy revolves around the concept of "omotenashi," which
        is the Japanese spirit of hospitality. We aim to create an atmosphere
        where our guests feel not only welcomed but also cherished from the
        moment they step through our doors.
      </p>
      <div className="seperatorCont">
        <Image src="/sectionSeperator.svg" alt="" fill={true} />
      </div>

      <p>
        Our story begins in the picturesque countryside of Kyoto, where our
        founder, Masaru Nakamura, was born and raised. Growing up, Masaru
        developed a profound appreciation for the simplicity, harmony, and
        beauty that characterizes Japanese cuisine. He would often accompany his
        mother to the local markets, watching her carefully select the freshest
        ingredients and observing the meticulous preparation techniques she
        employed in the kitchen. Masaru's culinary journey took him to Tokyo,
        where he honed his skills under the guidance of renowned chefs who
        taught him the art of kaiseki, a traditional multi-course Japanese
        dining experience. During this time, he learned that the essence of
        Japanese cuisine lies not only in the taste but also in the presentation
        and the overall sensory experience it offers.
      </p>
      <br/>

      <div className={classes.imgCont}>
        <Image src="/sushi1.jpg" fill />
      </div>
      <br/>
      <p>
        Driven by his unwavering commitment to perfection, Masaru eventually
        decided to bring his culinary expertise to a global audience. With a
        deep desire to create an immersive dining experience that transports
        guests to the heart of Japan, he founded <span>Miyabi House</span> in the bustling
        city center of Tokyo. Every aspect of our restaurant is meticulously
        designed to reflect the timeless beauty of Japan. The moment you enter,
        you will be captivated by the tranquil ambiance, adorned with
        traditional artwork, bamboo accents, and soft lighting that evokes a
        sense of serenity. Our knowledgeable and attentive staff, dressed in
        elegant kimono, are dedicated to providing impeccable service, ensuring
        that each guest feels like an honored guest in our home.
      </p>
      <br/>

      <div className={classes.imgCont}>
        <Image src="/sushi2.jpg" fill />
      </div>
      <br/>
      <p>
        Our menu is a celebration of Japan's diverse regional cuisine, featuring
        a wide array of flavors, textures, and cooking techniques. We work
        closely with local farmers, fishermen, and artisans to source the
        freshest seasonal ingredients, ensuring that each plate tells a story of
        its own. From the delicate sashimi meticulously sliced by our skilled
        chefs to the hearty bowls of ramen simmered for hours, every dish is
        crafted with passion and attention to detail. To enhance your dining
        experience, we offer a carefully curated selection of premium sake,
        handpicked from renowned breweries across Japan. Our knowledgeable sake
        sommeliers will guide you through the nuances of each sake, pairing them
        perfectly with your chosen dishes, elevating your culinary journey to
        new heights.
      </p>
        <br/>
      <p>
        We believe that the true essence of Japanese cuisine
        lies in the balance between tradition and innovation. While honoring the
        time-honored recipes passed down through generations, our innovative
        chefs add their own creative flair, resulting in a harmonious fusion of
        flavors that will delight even the most discerning palates. Whether you
        are seeking an intimate dinner for two, a private event, or a memorable
        gathering with friends and family, <span>Miyabi House</span> promises to transport
        you to the heart of Japan, where each dish is a masterpiece and every
        ingredient is given the utmost attention. We invite you to join us on
        this gastronomic adventure and experience the magic of Japanese cuisine
        like never before.
      </p>

      <div className="seperatorCont">
        <Image src="/sectionSeperator.svg" alt="" fill={true} />
      </div>
    </div>
  );
}

export default About;
