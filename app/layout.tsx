import { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import { Navbar } from "@app/components/Navbar";

export const metadata: Metadata = {
	title: "Isai Lopez Rodas",
	description:
		"Isai Lopez's Personal Website showcasing software engineering portfolio",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<Navbar />
				<main id='root'>{children}</main>
			</body>
		</html>
	);
}
