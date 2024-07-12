import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...fixupConfigRules(pluginReactConfig).rules,
      "import/no-unresolved": [2, { caseSensitive: true }],
    },
  },
];
