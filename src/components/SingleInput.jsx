import React from "react";

const SingleInput = ({ label, val }) => {
	return (
		<section className="single flex flex-col gap-2">
			<p className="hidden md:block">{label}</p>
			<input
				type="text"
				className="p-4 py-2 border-2 bg-white placeholder:text-gray-500 outline-none w-full md:w-2/5 md:min-w-[16rem] placeholder:font-semibold"
				placeholder={val}
			/>
		</section>
	);
};

export default SingleInput;
