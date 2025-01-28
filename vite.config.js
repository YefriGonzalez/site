import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
   base: "/site/",
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components/index"),
      "@routes": path.resolve(__dirname, "src/Routes/index"),
      "@global": path.resolve(__dirname, "src/Utilities/GlobalVariables"),
    },
  },
  publicDir: "./src/assets",
});
