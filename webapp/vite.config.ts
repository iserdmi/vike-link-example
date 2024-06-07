import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { UserConfig } from "vite";
import tsconfig from "./tsconfig.json";
import path from "path";

const cwd = path.dirname(new URL(import.meta.url).pathname);

const config: UserConfig = {
  resolve: {
    alias: Object.fromEntries(
      Object.entries(tsconfig.compilerOptions.paths).map(([key, [value]]) => [
        key.replace("/*", ""),
        path.resolve(cwd, value.replace("/*", "")),
      ])
    ),
  },
  plugins: [react(), vike()],
};

export default config;
