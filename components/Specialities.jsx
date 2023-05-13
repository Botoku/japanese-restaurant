import React from 'react'
import classes from '../styles/specialities.module.css'
import Image from 'next/image'
import Button from './Button'

const Specialities = () => {
  return (
    <div className={classes.section}>
      <h3>OUR SPECIALITIES</h3>
      <div className={classes.specialitiesGridCont}>
        <div className={classes.individualSpecialCont}>
          <div className={classes.imageCont}>
            <Image src='/Sushi.svg' fill={true}/>
          </div>

          <div className={classes.nameCont}>
            <p className={classes.name}>Sushi</p>
            <p className={classes.varieties}>12 varieties</p>
          </div>
          <Button filled={false}/>          
        </div>

        <div className={classes.individualSpecialCont}>
          <div className={classes.imageCont}>
            <Image src='/Ramen.svg' fill={true}/>
          </div>

          <div className={classes.nameCont}>
            <p className={classes.name}>Ramen</p>
            <p className={classes.varieties}>8 varieties</p>
          </div>
          <Button filled={false}/>          
        </div>

        <div className={classes.individualSpecialCont}>
          <div className={classes.imageCont}>
            <Image src='/Mochi.svg' fill={true}/>
          </div>

          <div className={classes.nameCont}>
            <p className={classes.name}>Mochi</p>
            <p className={classes.varieties}>5 varieties</p>
          </div>
          <Button filled={false}/>          
        </div>

        <div className={classes.individualSpecialCont}>
          <div className={classes.imageCont}>
            <Image src='/Onigiri.svg' fill={true}/>
          </div>

          <div className={classes.nameCont}>
            <p className={classes.name}>Onigiri</p>
            <p className={classes.varieties}>6 varieties</p>
          </div>
          <Button filled={false}/>          
        </div>
      </div>
      
    </div>
  )
}

export default Specialities