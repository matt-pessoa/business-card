import React from "react";
import emailIcon from "../images/email-icon.png";

function InfoSocial() {
	return (
		<div className="social">
			<a href="mail.google.com" className="email-btn">
				<img src={emailIcon} alt="email" />
				Email
			</a>
			<a
				href="https://www.linkedin.com/in/matt-pessoa/"
				className="linkedin-btn"
			>
				Linkedin
			</a>
		</div>
	);
}

export default InfoSocial;
