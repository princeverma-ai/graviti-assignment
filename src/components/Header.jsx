import React from "react";

//  Utils
import Logo from "../assets/Images/logo.png";

const Header = () => {
	return (
		<header className="w-full h-20 bg-white pl-20 hidden md:flex items-center">
			<img className="h-[70%]" src={Logo} alt="" />
		</header>
	);
};

export default Header;
