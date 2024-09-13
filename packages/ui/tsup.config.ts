import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
	entry: {
		index: "src/index.ts",
	},
	clean: true,
	external: ["react"],
	dts: true,
	...options,
}));
