import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components/index"),
      "@routes": path.resolve(__dirname, "src/Routes/index"),
      "@global": path.resolve(__dirname, "src/Utilities/GlobalVariables"),
    },
  },
  publicDir: "./src/assets",
  base:'/site/',
});
