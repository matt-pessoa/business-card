import React from "react";
import facebookIcon from "../images/Facebook Icon.svg";
import githubIcon from "../images/GitHub Icon.svg";
import instagramIcon from "../images/Instagram Icon.svg";
import twitterIcon from "../images/Twitter Icon.svg";

function Footer() {
	return (
		<footer>
			<div className="social-links">
				<a
					href="https://twitter.com/mattabacate"
					target="_blank"
					rel="noreferrer"
				>
					<img src={twitterIcon} alt="Twitter" />
				</a>
				<a
					href="https://www.facebook.com/matheus.pessoa.710/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={facebookIcon} alt="Facebook" />
				</a>
				<a
					href="https://www.instagram.com/omatheuspessoa/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={instagramIcon} alt="Instagram" />
				</a>
				<a
					href="https://github.com/matt-pessoa"
					target="_blank"
					rel="noreferrer"
				>
					<img src={githubIcon} alt="GitHub" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
