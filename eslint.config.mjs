// @ts-check
import { eslintConfig } from "js-style-kit";

export default eslintConfig({
  ignores: ["public/admin/assets", "tina/__generated__"],
  react: {
    framework: "next",
  },
  typescript: "tsconfig.eslint.json",
});
