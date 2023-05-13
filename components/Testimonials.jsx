import React from 'react'
import classes from '../styles/testimonials.module.css'
import Image from 'next/image'
const Testimonials = () => {
  return (
    <div className={classes.cont}>
        <h3>Testimonials</h3>
        <div className={classes.innerCont}>
        <div className={classes.testimonialCont1}>
            <Image src='/Group24.svg' alt="animation" fill={true}/>
        </div>

        <div className={classes.testimonialCont3}>
            <Image src='/Group25.svg' alt="animation" fill={true}/>
        </div>

        <div className={classes.testimonialCont2}>
            <Image src='/Group26.svg' alt="animation" fill={true}/>
            
        </div>
        </div>
        
    </div>
  )
}

export default Testimonials