import React from 'react'
import ButtonStyle from './ButtonStyle.module.css'

const Button = (props) => {
  const { children } = props
    return (
    <button className={ButtonStyle.btnPrimary}>{ children || 'Button' }</button>
  )
}

export default Button