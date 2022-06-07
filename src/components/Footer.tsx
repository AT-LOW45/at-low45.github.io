import React from "react";
import "../sass/footer.scss";

const Footer = () => {
	return (
		<footer className='Footer text-white flex flex-col md:flex-row md:flex-wrap p-3 items-stretch text-left md:text-center bg-gray-500'>
			<div>
				<h2 className=''>Customer Service</h2>
				<a href=''>Contact Us</a>
				<a href=''></a>
			</div>
			<div className=''>
				<h2>Information</h2>
				<a href=''>Terms and Conditions</a>
				<a href=''>FAQ</a>
			</div>

			<div
				style={{
					flexBasis: "100%",
					flexDirection: "row",
					margin: "auto",
					justifyContent: "center",
				}}
				className='text-sm'
			>
				&copy; 2022 - Sweet Floral Home
			</div>
		</footer>
	);
};

export default Footer;
