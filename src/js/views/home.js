import React from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
	<div className="container d-flex justify-content-around">
		<Link to="/allProducts">
			<button className="botoncompracard btn-lg">
				SHOP
			</button>
		</Link>
	</div>
		<div className="pt-4 homeLetter">
			<h4 className="text-center">
				WELCOME TO RACERSPRO 
			</h4>
			<h6 className="text-center ">
				YOU WILL FIND SPECIAL OFFERS WITH US
			</h6>
		</div>
	</div>
);
