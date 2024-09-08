import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UnderConstruction from "@/components/WarningBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Website under construction",
	description: "Website under construction",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="w-dvw h-dvh flex flex-col">
					<UnderConstruction />
					<div className="grow overflow-hidden overflow-y-auto bg-[#422828]">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
