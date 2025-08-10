// config.ts

// Define allowed environment names
type EnvName = 'dev' | 'sit' | 'prod';

// Map of base URLs for each environment
const BASE_URLS: Record<EnvName, string> = {
  dev: 'https://dev.insurance-app.com',
  sit: 'https://sit.insurance-app.com',
  prod: 'https://insurance-app.com'
};

// Get the current environment from process.env, default to 'dev'
const currentEnv = (process.env.TEST_ENV as EnvName) || 'dev';

// Return the base URL for the current environment
export function getBaseUrl(): string {
  return BASE_URLS[currentEnv];
}
