import React from 'react';
import './socialLinks.css';
const SocialLinks = () => (
    <div className="social-media">
        <ul className="list-inline">
            <li><a target="_blank" href="https://www.facebook.com/dudi.hamdi" className="icoFacebook" title="Facebook">
                <i className="fa fa-facebook"></i></a>
            </li>
            <li><a target="_blank" href="https://twitter.com/?lang=en" className="icoTwitter" title="Twitter">
                <i className="fa fa-twitter"></i></a>
            </li>
            <li><a target="_blank" href="https://plus.google.com/discover?hl=iw" className="icoGoogle" title="Google +">
                <i className="fa fa-google-plus"></i></a>
            </li>
            <li><a target="_blank" href="https://www.linkedin.com/" className="icoLinkedin" title="Linkedin">
                <i className="fa fa-linkedin"></i></a>
            </li>
        </ul>
    </div>
);
export default SocialLinks;
