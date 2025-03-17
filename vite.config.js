import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@projects": path.resolve(__dirname, "./projects"),
      "@app": path.resolve(__dirname, "./src/Application"),
      "@assets": path.resolve(__dirname, "./src/Engine/Assets"),
      "@errors": path.resolve(__dirname, "./src/Application/Errors"),
      "@error": path.resolve(__dirname, "./src/Application/Errors"),
      "@core": path.resolve(__dirname, "./src/Engine/Core"),
      "@lib": path.resolve(__dirname, "./src/Engine/Lib"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  build: {
    lib: {
      name: "skava-engine",
      fileName: (f) => `skava-engine.${f}.js`,
      format: ["es", "cjs"],
      entry: path.resolve(__dirname, "src/index.js"),
    },
    rollupOptions: {
      external: ["uuid"],
    },
  },
});
