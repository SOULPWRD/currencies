import {defineConfig, coverageConfigDefaults} from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, "src/**/*.tsx", "src/hooks"]
    }
  }
});
