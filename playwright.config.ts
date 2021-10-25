import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  //reporter:'html',
  timeout: 12 * 10000, // 2 minutes
  use: {
    launchOptions:{
      //slowMo:1000
    },
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
  },
  
};
export default config;
