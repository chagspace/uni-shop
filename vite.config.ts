import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	resolve: {
		alias: {
			"@/*": "/src/*",
			"@platform": "/src/platform",
			"@helpers": "/src/helpers",
			"@components": "/src/components",
			"@wxComponents": "/src/wxComponents",
			"@store": "/src/store",
			"@services": "/src/services",

			"@locales": "/src/locales",

			// deep-import
			"@http": "/src/services/http",
			"@domains": "/src/services/domains",
			"@message": "/src/services/message",
		},
	},
});
