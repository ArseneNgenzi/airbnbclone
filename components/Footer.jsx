import React from "react";

const Footer = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 bg-red-400 py-3 justify-items-center ">
			<div className="space-y-4 text-xs text-gray-800 mb-5">
				<h5 className="font-bold text-white">ABOUT</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			<div>
				<div className="space-y-4 text-xs text-gray-800 mb-5">
					<h5 className="font-bold text-white">COMMUNITY</h5>
					<p>Accessibility</p>
					<p>This is an Airbnb clone</p>
					<p>Damn this look pretty</p>
					<p>Referrals Accepted</p>
					<p>Arsene is too cool</p>
				</div>
			</div>

			<div>
				<div className="space-y-4 text-xs text-gray-800 mb-5">
					<h5 className="font-bold text-white">HOST</h5>
					<p>Arsene Ngenzi</p>
					<p>Presents </p>
					<p>To you the best</p>
					<p>Airbnb Clone</p>
					<p>Out there</p>
				</div>
			</div>
			<div>
				<div className="space-y-4 text-xs text-gray-800 mb-5">
					<h5 className="font-bold text-white">SUPPORT</h5>
					<p>Help Center</p>
					<p>Trust & Safety</p>
					<p>I love you</p>
					<p>I am an </p>
					<p>Fronted engineer</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
