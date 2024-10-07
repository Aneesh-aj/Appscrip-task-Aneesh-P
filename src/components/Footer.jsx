import React, { useState } from 'react';
import '../style/footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const [isLinksOpen, setIsLinksOpen] = useState({
        mettaMuse: false,
        quickLinks: false,
        followUs: false,
    });

    const toggleLinks = (section) => {
        setIsLinksOpen((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <footer className="footer">
            <div className='footer-main'>
                <div className="footer-main-section subscribe">
                    <h4>BE THE FIRST TO KNOW</h4>
                    <p>Sign up for updates from mettā muse.</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Enter your e-mail..." />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>

                <div className="footer-main-section contact">
                    <h4>CONTACT US</h4>
                    <p className='footer_para'>+44 221 133 5360</p>
                    <p className='footer_para'>customercare@mettamuse.com</p>
                    <h4>CURRENCY</h4>
                    <p className='footer_para'>🇺🇸 • USD</p>
                </div>

            </div>
            <hr className='crossline' />
            <div className="footer-section links mettaMuse">
                <h4 onClick={() => toggleLinks('mettaMuse')}>mettā muse</h4>
                <ul className={isLinksOpen.mettaMuse ? 'active' : ''}>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                </ul>
            </div>
               <hr className='hr_visible' />
            <div className="footer-section links quickLinks">
                <h4 onClick={() => toggleLinks('quickLinks')}>QUICK LINKS</h4>
                <ul className={isLinksOpen.quickLinks ? 'active' : ''}>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
             <hr  className='hr_visible'/>
            <div className='footer_middle'>
                <div className="footer-section social">
                    <h4 onClick={() => toggleLinks('followUs')}>FOLLOW US</h4>
                    <div className={isLinksOpen.followUs ? 'active social-icons' : 'social-icons'}>
                        <FaFacebookF className="icon" />
                        <FaInstagram className="icon" />
                        <FaLinkedinIn className="icon" />
                    </div>
                </div>
                  <hr className='hr_visible' />
                <div className="footer-section payment">
                    <h4>mettā muse ACCEPTS</h4>
                    <div className="payment-methods">
                        <img src="/path-to-icons/gpay.png" alt="Google Pay" />
                        <img src="/path-to-icons/paypal.png" alt="Paypal" />
                        <img src="/path-to-icons/amex.png" alt="Amex" />
                        <img src="/path-to-icons/applepay.png" alt="Apple Pay" />
                        <img src="/path-to-icons/shopify.png" alt="Shopify Pay" />
                    </div>
                </div>
            </div>
            <hr className='crossline' />
            <div className="footer-section copyright">
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
           
        </footer>
    );
};

export default Footer;