import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="">
			<div className="">
				<div className="p-3 text-center">
					<Link  to="/">
						<h1 id="tittleHeader">RaceSPro</h1>
						<span>Ready to rock and roll!</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};
