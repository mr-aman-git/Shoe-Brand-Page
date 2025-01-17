import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <>
    <button className='form-btns'><i class="ri-message-2-line"></i>{props.name}</button>
    </>
  )
}

export default Button