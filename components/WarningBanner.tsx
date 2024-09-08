import Gear from "@/components/Gear";

export default function UnderConstruction() {
	return (
		<div className="w-full flex items-center justify-center bg-yellow-200 text-black">
			<Gear className="flex items-center size-8 pr-2" fill="black" />
			<p className="text-md truncate italic">Website under construction</p>
		</div>
	);
}
