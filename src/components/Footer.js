import React from "react";
import facebookIcon from "../images/Facebook Icon.svg";
import githubIcon from "../images/GitHub Icon.svg";
import instagramIcon from "../images/Instagram Icon.svg";
import twitterIcon from "../images/Twitter Icon.svg";

function Footer() {
	return (
		<footer>
			<div className="social-links">
				<img src={twitterIcon} alt="Twitter" />
				<img src={facebookIcon} alt="Facebook" />
				<img src={instagramIcon} alt="Instagram" />
				<img src={githubIcon} alt="GitHub" />
			</div>
		</footer>
	);
}

export default Footer;
