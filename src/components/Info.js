import React from "react";
import InfoDetails from "./InfoDetails";
import InfoHeading from "./InfoHeading";
import InfoSocial from "./InfoSocial";

function Info() {
	return (
		<div className="info">
			<InfoHeading />
			<InfoSocial />
			<InfoDetails />
		</div>
	);
}

export default Info;
