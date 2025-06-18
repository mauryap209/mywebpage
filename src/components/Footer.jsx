import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
        <p>© 2025 My Website. All rights reserved.</p>  
        <p>Follow us on:</p>
        <ul className="social-links">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
        <p>Contact us at: <a href="mailto:mauryap209@gmail.com">mauryap209@gmail.com</a></p>
        <p>Privacy Policy | Terms of Service</p>
       
        <p>Thank you for visiting our website!</p>
        </footer>

    </div>
  )
}

export default Footer