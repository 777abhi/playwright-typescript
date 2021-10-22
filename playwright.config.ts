import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  timeout: 12 * 10000, // 2 minutes
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
  },
};
export default config;
