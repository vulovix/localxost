import path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    sourcemap: false,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Cryptograph",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
