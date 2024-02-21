import React from "react";

//  Components
import Header from "./components/Header";
import SingleInput from "./components/SingleInput";
import MapComponent from "./components/MapComponent";

const App = () => {
	return (
		<section className="w-full h-full min-h-screen flex flex-col items-center bg-secondary font-primary">
			{/* Header */}
			<Header />

			{/* Heading */}
			<div className="heading w-full text-center mt-6 hidden md:block">
				<p className="text-primary text-xl">
					Let's calculate <span className="font-semibold">distance</span> from Google maps
				</p>
			</div>

			{/* HeroSection */}
			<section className="flex flex-col md:flex-row w-full h-auto max-w-5xl md:mt-6 gap-x-12 lg:gap-x-20">
				{/* Left Section */}
				<section className="flex flex-col gap-6 md:gap-4 w-full md:w-1/2 p-4 lg:p-0 order-2 md:order-1 mt-4 md:mt-0">
					<SingleInput label="Origin" val={"Mumbai"} />
					<section className="flex flex-col lg:flex-row lg:items-start w-full gap-y-6 gap-x-6 items-center justify-between lg:pr-4">
						<div className="w-full gap-6 lg:gap-4 flex flex-col">
							<SingleInput label="Stop" val={"Ajmer"} />
							<SingleInput label="Destination" val={"Delhi"} />
						</div>
						<button className="rounded-full p-2 lg:p-4 lg:px-6 px-10 font-semibold bg-primary text-white hover:scale-105 transition-all duration-300 active:scale-[.85]">
							Calculate
						</button>
					</section>

					<section className="flex flex-col border mt-4">
						<div className="flex w-full justify-between bg-white p-6 md:p-4 py-5 items-center">
							<p className="text-lg font-semibold">Distance</p>
							<p className="text-2xl text-primary-light font-semibold">1,427 kms</p>
						</div>

						<p className="px-6 py-4 text-xs">
							The distance between <span className="font-bold">Mumbai</span> and <span className="font-bold">Delhi</span> via
							the seleted route is <span className="font-bold">1,427 kms</span>.
						</p>
					</section>
				</section>

				<section className="flex justify-center items-center w-full md:w-1/2 order-1 md:order-2 min-h-[420px]">
					<MapComponent />
				</section>
			</section>
		</section>
	);
};

export default App;
