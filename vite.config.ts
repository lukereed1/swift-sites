import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	base: "./",
	plugins: [react()],
	assetsInclude: /\.(svg|png|jpg|jpeg)$/i,
});