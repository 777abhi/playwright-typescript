import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  timeout: 12 * 10000, // 2 minutes
  //reporter:'html',
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        headless: false,
        launchOptions: {
          //slowMo:1000
        },
      },
    },
  ],
};
export default config;
