import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  js.configs.recommended,
  {
    plugins: { "@next/next": nextPlugin },
    rules: { ...nextPlugin.configs.recommended.rules },
  },
];

export default config;
