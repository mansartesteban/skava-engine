import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
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
    minify: false,
    sourcemap: true,
    lib: {
      name: "skava-engine",
      entry: {
        Core: path.resolve(__dirname, "src/Bundles/Core/index.js"),
        "Core/Commands": path.resolve(
          __dirname,
          "src/Bundles/Core/Commands.js"
        ),
        "Core/Shapes": path.resolve(__dirname, "src/Bundles/Core/Shapes.js"),
        "Core/Components": path.resolve(
          __dirname,
          "src/Bundles/Core/Components.js"
        ),
        UI: path.resolve(__dirname, "src/Bundles/UI/index.js"),
        "UI/Animations": path.resolve(
          __dirname,
          "src/Bundles/UI/Animations.js"
        ),
        "UI/Components": path.resolve(
          __dirname,
          "src/Bundles/UI/Components.js"
        ),
        "UI/Events": path.resolve(__dirname, "src/Bundles/UI/Events.js"),
        Utils: path.resolve(__dirname, "src/Bundles/Utils/index.js"),
        "Utils/Numeric": path.resolve(
          __dirname,
          "src/Bundles/Utils/Numeric.js"
        ),
        "Utils/Object": path.resolve(__dirname, "src/Bundles/Utils/Object.js"),
        Errors: path.resolve(__dirname, "src/Bundles/Errors.js"),
        Styles: path.resolve(__dirname, "src/Bundles/Styles.js"),
      },
      fileName: (format, entry) => `${entry}.${format}.js`,
      format: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["uuid"],
    },
  },
});
