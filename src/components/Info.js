import React from "react";
import InfoDetails from "./InfoDetails";
import InfoHeading from "./InfoHeading";
import InfoSocial from "./InfoSocial";

function Info() {
	return (
		<div className="info">
			<div className="container-info">
				<InfoHeading />
				<InfoSocial />
				<InfoDetails />
			</div>
		</div>
	);
}

export default Info;
