import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>

        <div className='sb__footer-below'>
            <div className='sb_footer-copyright'>
                <p>
                    @{new Date().getFullYear} ToDoLB. All right reserved.
                </p>
            </div>
            <div className='sb_footer-below-links'>
                <a href='/'><div><p>Terms and Conditions</p></div></a>
                <a href='/'><div><p>Privacy</p></div></a>
                <a href='/'><div><p>Security</p></div></a>
                <a href='/'><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>
        </div>
  )
}

export default Footer
