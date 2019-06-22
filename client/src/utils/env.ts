import { Environments } from "./types";

interface ENV {
  NODE_ENV: Environments;
  GRAPHQL_URL: string;
}

function getEnvVars(env = "", envVars: any): ENV {
  if (env.indexOf(Environments.dev) !== -1) return envVars.dev;
  if (env.indexOf(Environments.stag) !== -1) return envVars.staging;
  if (env.indexOf(Environments.prod) !== -1) return envVars.production;
  return envVars.dev;
}

const dev = require("../config/development.env.json");
const staging = require("../config/development.env.json");
const prod = require("../config/development.env.json");
const env = getEnvVars(process.env.NODE_ENV, {
  dev,
  staging,
  prod
});

export const NODE_ENV = env.NODE_ENV;
export const GRAPHQL_URL = env.GRAPHQL_URL;
