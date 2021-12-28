import React from "react";
import emailIcon from "../images/email-icon.png";
import linkedinIcon from "../images/linkedin-white.png";

function InfoSocial() {
	return (
		<div className="social">
			<a
				href="mailto:omatheuspessoa@gmail.com?Subject=Hello%20Matt"
				className="email-btn"
				target="_blank"
				rel="noreferrer"
			>
				<img src={emailIcon} alt="email" />
				Email
			</a>
			<a
				href="https://www.linkedin.com/in/matt-pessoa/"
				className="linkedin-btn"
				target="_blank"
				rel="noreferrer"
			>
				<img src={linkedinIcon} alt="linkedin" />
				Linkedin
			</a>
		</div>
	);
}

export default InfoSocial;
