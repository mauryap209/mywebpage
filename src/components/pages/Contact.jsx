import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='contact'>Contact Us</h1>

        <div class="outer-box">
        <div class="inner-box">
            <header class="signup-header">
                <h1>Signup</h1>
                <p>It just 30 Seconds</p>
            </header>
            <main class="signup-body">
                <form action>
                    <p>
                        <label for="fullname">Full Name</label>
                        <input type="text" id="fullname" placeholder="Pankaj Maurya" required />
                    </p>
                    <p>
                        <label for="number">Phone Number</label>
                        <input type="text" id="number" placeholder="8935042258" required />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="mauryap209@gmail.com" required />
                    </p>
                    <p>
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="at least 8th charactor" required />
                    </p>
                    <p>
                        <input type="submit" id="submit" value="Create Account" />
                    </p>
                </form>
            </main>
            <footer class="signup-footer">
                <p>Already have a account ? <a href="">Login</a></p>
            </footer>
        </div>
       
    </div>
        {/* <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        <p>You can contact us via email at info@example.com or call us at (123) 456-7890.</p>
        <p>We look forward to hearing from you!</p>
        <p>Our office hours are Monday to Friday, 9 AM to 5 PM.</p>
        <p>We are here to assist you with any concerns you may have.</p>    
        <p>For support, please visit our help center or submit a ticket.</p>
        <p>Follow us on social media for updates and news.</p>
        <p>Thank you for your interest in our services.</p>
        <p>We value your feedback and strive to improve our  contact services.</p> */}

    </div>
  )
}

export default Contact