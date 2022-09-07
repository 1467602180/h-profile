import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import { presetWind } from "unocss";

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetIcons(), presetWind()],
    }),
  ],
  build: {
    minify: false,
  },
});
