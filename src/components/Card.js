import React from "react";
import Footer from "./Footer";
import Info from "./Info";
import ProfilePic from "./ProfilePic";

function Card() {
	return (
		<div className="card">
			<ProfilePic />
			<Info />
			<Footer />
		</div>
	);
}

export default Card;
