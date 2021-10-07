import type { DenonConfig } from "https://deno.land/x/denon@2.4.9/mod.ts";

const config: DenonConfig = {
  watch: true,
  scripts: {
    start: {
      cmd: "deno run --unstable --allow-net --allow-read --allow-env src/server.ts",
      desc: "Run dev server",
      unstable: true,
      watch: true
    },
  },
};

export default config;
