// @ts-ignore
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  plugins: [react(), svgr()]
});
