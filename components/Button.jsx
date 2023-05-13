import React from 'react'
import classes from '../styles/button.module.css'

const Button = ({isFilled}) => {
  return (
    <div className={isFilled ? classes.isFilled : classes.isNotFilled}>
        Order Now
    </div>
  )
}

export default Button