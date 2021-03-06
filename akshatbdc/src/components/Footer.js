import React from 'react'
// import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
            <p className="footer-subscription-heading">
                    Help Desk BDCoE
            </p>
            {/* <p className='footer-subscription-text'> */}
                    {/* Recruiting The Future... */}
            {/* </p> */}
            {/* <div className="input-areas"> */}
                {/* <form> */}
                    {/* <input type="email" name="email" placeholder="Your @akgec.ac.in Email" className="footer-input" /> */}
                    {/* <Button buttonStyle='btn--outline'>Registration OPEN Now</Button>
                </form> */}
            {/* </div> */}
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                
                <div className="footer-link-items">
                    <h2>Faculty</h2>
                <p>Dr. Anu Chaudhary</p>
                <p>Mrs. Anu Gupta</p>
                <p>Dr. Sushil Kumar</p>
                {/* <p>Prof. S.L. Kapoor</p> */}

                </div>
              </div>
                <div className='footer-link-wrapper'>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                <p>Instagram</p>
                <p>Github</p>
                <p>Linkden</p>
                {/* <p>Facebook</p> */}

                </div>
              
                <div className="footer-link-items">
                    <h2>Call Details</h2>
                <p>+91-9410265XXXX</p>
                <p>+91-9454268XXXX</p>
                <p>+91-9456237XXXX</p>
                {/* <p>+91-9789410XXXX</p> */}
                {/* <p>+91-7439258XXXX</p> */}
                

                </div>
</div>
            
        </div>
            <div className="policy">Big Data Center Of Excellence Co-Orperation |  AKGEC | GHAZIABAD
            <p>	&#169;All Rights Reserved - 2020</p></div>
        
        <div className='social-media'>
            <div className='social-media-wrap'>
                <div className='social-icons'>
                   <a href="https://www.instagram.com/bdcoe/" target="_blank"><akshat className='social-icon-link Facebook'>
                    <i className='fab fa-instagram'></i>
                    </akshat></a>
                    <a href="https://www.facebook.com/bigdatacoe/" target="_blank"><akshat className='social-icon-link Facebook'>
                    <i className='fab fa-facebook'></i>
                    </akshat></a>
                    <a href="https://www.linkedin.com/school/big-data-centre-of-excellence/about/" traget="_blank"><akshat className='social-icon-link Linkedin'>
                    <i className='fab fa-linkedin'></i></akshat></a>
                    <a href="https://github.com/bdcoe" target="_blank"><akshat className='social-icon-link Facebook'>
                    <i className='fab fa-github'></i>
                    </akshat></a>
                    <a href="https://www.youtube.com/channel/UCE-dW0xxvpZq_UWZ9B5jKUA" target="_blank"><akshat className='social-icon-link Facebook'>
                    <i className='fab fa-youtube'></i>
                    </akshat></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
