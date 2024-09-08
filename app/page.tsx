import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col size-full p-10 gap-5 lg:gap-10 bg-[#422828] overflow-auto">
			<div className="mt-auto mx-auto relative aspect-square min-h-32 size-32 lg:min-h-60 lg:size-60 overflow-hidden rounded-full mx-auto">
				<Image src={"/kigurumi.png"} fill alt="Profile Picture"></Image>
			</div>
			<div className="mb-auto mx-auto text-center text-xl text-white">
				<p className="text-2xl font-bold">Welcome to Tinutuan's Collection Page!</p>
				<p>This humble website is just a personal collection for my beatmaps.</p>
				<p>{process.env.ROOT_URL}</p>
			</div>
			{/* <div className="m-auto">
			</div> */}
		</main>
	);
}
