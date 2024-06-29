import tseslint from "typescript-eslint"
import js from "@eslint/js";
import qwikeslint from "eslint-plugin-qwik"

tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...qwikeslint.configs.recommended,

  {
    languageOptions: {

      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",

      parserOptions: {
        project: ["./tsconfig.json"],

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "prefer-spread": "off",
      "no-case-declarations": "off",
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/consistent-type-imports": "warn",
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "no-trailing-spaces": ["error"],

      "no-multiple-empty-lines": ["error", {
        max: 1,
      }],

      "block-spacing": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],

      "key-spacing": ["error", {
        beforeColon: false,
        afterColon: true,
      }],

      "keyword-spacing": ["error", {
        before: true,
        after: true,
      }],
    },
  },

  {
    ignores: [
      "**/*.log",
      "**/.DS_Store",
      "**/*.",
      ".vscode/settings.json",
      "**/.history",
      "**/.yarn",
      "**/bazel-*",
      "**/bazel-bin",
      "**/bazel-out",
      "**/bazel-qwik",
      "**/bazel-testlogs",
      "**/dist",
      "**/dist-dev",
      "**/lib",
      "**/lib-types",
      "**/etc",
      "**/external",
      "**/node_modules",
      "**/temp",
      "**/tsc-out",
      "**/tsdoc-metadata.json",
      "**/target",
      "**/output",
      "**/rollup.config.js",
      "**/build",
      "**/.cache",
      "**/.vscode",
      "**/.rollup.cache",
      "**/dist",
      "**/tsconfig.tsbuildinfo",
      "**/vite.config.ts",
      "**/*.spec.tsx",
      "**/*.spec.ts",
      "**/.netlify",
      "**/pnpm-lock.yaml",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/server",
      "**/tailwind.config.js",
    ],
  },
);