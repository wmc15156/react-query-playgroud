import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { babel } from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: "bundled",
      plugins: [
        [
          "@stylexjs/babel-plugin",
          {
            dev: true,
            test: false,
            unstable_moduleResolution: {
              type: "commonJS",
              rootDir: __dirname,
            },
          },
        ],
      ],
      // Babel 플러그인이 처리할 파일 확장자
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
  ],
});
