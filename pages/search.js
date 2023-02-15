import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import format from "date-fns/format";
import HouseCard from "@/components/HouseCard";

const Search = ({searchResults}) => {

    // console.log(searchResults)
	const router = useRouter();

	const { location, startDate, endDate, guests } = router.query;

	const from = format(new Date(startDate), "MMM dd, yyyy");
	const to = format(new Date(endDate), "MMM dd, yyyy");

	const placeholder = `${location} || ${guests} guest(s) || ${from} - ${to}`;

	return (
		<div>
			<Header placeholder={placeholder} />

			<main className="flex max-w-[100%] md:max-w-[80%] m-auto">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs">
						{" "}
						100+ homes from {from} - {to} for {guests} guests
					</p>

					<h1 className="text-3xl font-semibold mt-2 mb-6">
						Homes in "{location}"
					</h1>

					<div className="hidden md:inline-flex space-x-2 py-4 text-gray-500 whitespace-nowrap">
						<p className="buttonsAboveSearch">Cancelation Flexibility</p>
						<p className="buttonsAboveSearch">In Town</p>
						<p className="buttonsAboveSearch">In Mountains</p>
						<p className="buttonsAboveSearch">Prices</p>
						<p className="buttonsAboveSearch">More Filters</p>
					</div>

                   <div className="flex flex-col">
                    {searchResults.map((item,id) => (
                            <HouseCard key={id} item={item}/>
                        ))}
                    </div> 
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Search;


export async function getServerSideProps() {
    // const searchResults = await fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&lang=en&rows=50&facet=host_response_time&facet=city&facet=country&facet=property_type&facet=room_type&facet=amenities&facet=features')
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
    .then(res => res.json())

    return {
        props: {
            searchResults,
        }
    }
}