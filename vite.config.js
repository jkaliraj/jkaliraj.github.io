import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
  plugins: [
    react({
      jsxRuntime: "classic",
      babel: {
        parserOpts: {
          plugins: ["jsx"],
        },
      },
    }),
    yaml(),
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.(jsx|js)$/,
    jsx: "transform",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".jsx": "jsx",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
});
