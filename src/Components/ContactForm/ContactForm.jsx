import React from 'react'
import './ContactForm.css'
import ContactImg from './Images/contact.png'

const ContactForm = () => {

  return (
    <section>
        <div className="contactHeading">
        <div className="contactForm">
            <h1>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>
        </div>
        
        <div className="formSection">
            
            <div className="form-box">

            <div className='propBtn'>
            <button className='form-btns' onClick={()=>{return console.log("VIA SUPPORT CHAT");
            }}><i className="ri-message-2-line"></i>VIA SUPPORT CHAT</button>

            <button className='form-btns' onClick={()=>{return console.log("VIA CALL");
            }}><i className="ri-phone-line"></i>VIA CALL</button>
            </div>

            <button className='form-btns-outline' onClick={()=>{return console.log("VIA EMAIL SUPPORT");
            }}><i class="ri-mail-ai-line"></i>VIA EMAIL FORM</button>

              <form action="./php" className="form-box">
              <label htmlFor="name" id="form-label">Name</label>
              <input type="name" name="Name" placeholder='Enter Full Name'/>

              <label htmlFor="email" id="form-email">Email</label>
              <input type="email" name="Name" placeholder='Enter Email' required/>

              <label htmlFor="text" id='form-email'>Text</label>
              <textarea name="text" id="text-area" rows={8} placeholder='Type Here'></textarea>
              </form>

              <button className='formBox-btn'>Submit</button>

            </div>

            <div className="contactImg">
            <img src={ContactImg} alt="Image" />
            </div>
        </div>


    </section>
  )
}

export default ContactForm