import { readFileSync } from "fs";
import { parse } from "yaml";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load variables from style.yaml
const styleYaml = readFileSync(path.join(__dirname, "src/style.yaml"), "utf8");
const variables = parse(styleYaml);

export default {
  plugins: {
    "postcss-import": {},
    "postcss-simple-vars": {
      variables: variables,
    },
    "postcss-nested": {},
  },
};
