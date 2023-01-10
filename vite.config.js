import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteCompression({ algorithm: "gzip", deleteOriginFile: true }),
    react(),
  ],
  build: {
    outDir: "build",
    reportCompressedSize: true,
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443, // Run the websocket server on the SSL port
    },
  },
});
