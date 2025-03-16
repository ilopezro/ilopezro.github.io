import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		short_name: "Isai's Webpage",
		name: "Isai's Webpage",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "64x64 32x32 24x24 16x16",
				type: "image/x-icon",
			},
			{
				src: "logo192.png",
				type: "image/png",
				sizes: "192x192",
			},
			{
				src: "logo512.png",
				type: "image/png",
				sizes: "512x512",
			},
		],
		theme_color: "#000000",
		background_color: "#ffffff",
		start_url: ".",
	};
}
