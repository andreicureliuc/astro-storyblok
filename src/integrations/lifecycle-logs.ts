import kleur from "kleur";
import type { AstroIntegration } from "astro";

export const lifecycleLogs = () => {
  let integration: AstroIntegration = {
    name: "astro-lifecycle-logs",
    hooks: {},
  };

  integration.hooks["astro:server:start"] = () => {
    // Display a custom message when the server starts
    console.log(kleur.bold().green(`🚀 Welcome to NFON.com!`));
  };

  integration.hooks["astro:build:start"] = () => {
    // Display a custom message when the build starts
    console.log(kleur.bold().green(`🚀 Starting to build NFON.com ...`));
  };

  return integration;
};

export default lifecycleLogs;
