//BasePage.ts
import { test as baseTest } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { TravelFlightsPage } from "../page/TravelFlightsPage";
import { TravelSearchPage } from "../page/TravelSearchPage";
const { _android: android } = require("playwright");

const page = getMobilePage();

const test = baseTest.extend<{
  homePage: HomePage;
  travelFlightsPage: TravelFlightsPage;
  travelSearchPage: TravelSearchPage;
}>({
  homePage: async ({}, use) => {
    await use(new HomePage(await page));
  },
  travelFlightsPage: async ({ }, use) => {
    await use(new TravelFlightsPage(await page));
  },
  travelSearchPage: async ({ }, use) => {
    await use(new TravelSearchPage(await page));
  },
});


export default test;
async function getMobilePage() {
  
    // Connect to the device.
    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
    // Take screenshot of the whole device.
    await device.screenshot({ path: "device.png" });
    // --------------------- Browser -----------------------

    // Launch Chrome browser.
    await device.shell("am force-stop com.android.chrome");
    const context = await device.launchBrowser();

    // Use BrowserContext as usual.
    const page = await context.newPage();
    await page.goto("https://webkit.org/");
    console.log(await page.evaluate(() => window.location.href));
    await page.screenshot({ path: "page.png" });

    return page;
}

