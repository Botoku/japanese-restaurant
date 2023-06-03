import React from 'react'
import classes from '../styles/footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.content}>

        <div className={classes.leftCont}>
            <p>Miyabi House</p>
        </div>
        <div className={classes.middleCont}>
            <div className={classes.listCont}>
                <Link href="/">
                    <p className={classes.home}>Home</p>
                </Link>
            </div>

            <div className={classes.listCont}>
                <Link href="/menu">
                    <p className={classes.listTitle}>
                        Menu
                    </p>
                </Link>

                <p className={classes.listElement}>Sushi</p>
                <p className={classes.listElement}>Tempura</p>
                <p className={classes.listElement}>Ramen</p>
                <p className={classes.listElement}>Mochi</p>
                <p className={classes.listElement}>Specialities</p>
            </div>

            <div className={classes.listCont}>
                <Link href="/about">
                    <p className={classes.listTitle}>
                        About
                    </p>
                </Link>

                <p className={classes.listElement}>Company</p>
                <p className={classes.listElement}>Team</p>
                <p className={classes.listElement}>Story</p>
            </div>

        </div>
        <div className={classes.rightCont}>
            <div className={classes.iconCont}>
                < i class="ri-twitter-fill"></i>
            </div>

            <div className={classes.iconCont}>
               < i class="ri-facebook-fill"></i>
            </div>

            <div className={classes.iconCont}>
             < i class="ri-instagram-fill"></i>
            </div>

            <div className={classes.iconCont}>
                < i class="ri-github-fill"></i>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer