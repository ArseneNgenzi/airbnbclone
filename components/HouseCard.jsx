import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const HouseCard = ({ item }) => {
	const { description, img, lat, location, long, price, star, title, total } =
		item;
	// console.log(item)
	return (
		<div className="flex py-7 px-2 flex-col md:flex-row border-b-2 border-red-400 md:border-gray-200 cursor-pointer hover:opacity-80 transition ease-in-out duration-300 hover:shadow-lg  last:border-b-0">
			<div className="relative h-52 xsm:w-full md:h-52 md:w-80 flex-shrink-0">
				<Image src={img} fill className="object-cover object-center  rounded-xl" />
			</div>

			<div className="flex flex-col flex-grow md:pl-5 mt-5 md:mt-0">
				<div className="flex justify-between">
					<p>{location}</p>
					<HeartIcon className="h-7 cursor-pointer" />
				</div>

				<h4 className="md:text-xl">{title}</h4>
				<div className=" border-b md:border-b w-10 pt-2" />
				<p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

				<div className="flex justify-between items-end pt-5">
					<p className="flex items-center">
						<StarIcon className="h-5 text-red-400" />
						{star}
					</p>
					<div>
						<p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
						<p className="text-right font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HouseCard;
