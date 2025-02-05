import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/repo-mahesh/",
  assetsInclude: ["**/*.svg"], // Add this line to handle SVG files
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  plugins: [react()],
  server: {
    // https: {
    //   key: fs.readFileSync('./key.pem'),
    //   cert: fs.readFileSync('./cert.pem'),
    // },
    proxy: {
      "/api": {
        target: "https://127.0.0.1:8000",
        changeOrigin: true,
        secure: false, // Accepts self-signed certificates
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
