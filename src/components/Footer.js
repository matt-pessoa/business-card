import React from "react";
import facebookIcon from "../images/Facebook Icon.svg";
import githubIcon from "../images/GitHub Icon.svg";
import instagramIcon from "../images/Instagram Icon.svg";
import twitterIcon from "../images/Twitter Icon.svg";

function Footer() {
	return (
		<footer>
			<img src={facebookIcon} alt="Facebook" />
			<img src={githubIcon} alt="GitHub" />
			<img src={instagramIcon} alt="Instagram" />
			<img src={twitterIcon} alt="Twitter" />
		</footer>
	);
}

export default Footer;
