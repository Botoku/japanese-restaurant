import React from "react";
import classes from "../styles/navigation.module.css";
import Link from "next/link";

import Image from "next/image";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <div className={classes.nameCont}>
          <Link href='/'>
            <h3>MIYABI HOUSE</h3>
          </Link>
        </div>
        <div className={classes.linksCont}>
          <div className={classes.innerLinkCont}>
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <div className={classes.circle}></div>
          </div>

          <div className={classes.innerLinkCont}>
            <Link href="/menu" className={classes.link}>
              Menu
            </Link>
            <div className={classes.circle}></div>
          </div>

          <div className={classes.innerLinkCont}>
            <Link href="/about" className={classes.link}>
              About
            </Link>
            <div className={classes.circle}></div>
          </div>
        </div>

        <div className={classes.iconCont}>
          <div className={classes.icon1}>
            <Image src="/bag-happy.svg" alt="" width={20} height={20} />
          </div>
          <div className={classes.icon2}>
            <Image src="/profile-circle.svg" alt="" width={20} height={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
