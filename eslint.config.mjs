import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    }
  },
  {
    files: ["**/*.js"], 
    languageOptions: {
      sourceType: "script"
    }
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  {
    ignores: ["**/build/**/*", "**/5eTools/**/*", "eslint.config.mjs"]
  },
  {
    settings: {
      react: {
        version: "detect"
      },
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];