//BasePage.ts
import { test as baseTest } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { TravelFlightsPage } from "../page/TravelFlightsPage";
import { TravelSearchPage } from "../page/TravelSearchPage";

const test = baseTest.extend<{
  homePage: HomePage;
  travelFlightsPage: TravelFlightsPage;
  travelSearchPage: TravelSearchPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  travelFlightsPage: async ({ page }, use) => {
    await use(new TravelFlightsPage(page));
  },
  travelSearchPage: async ({ page }, use) => {
    await use(new TravelSearchPage(page));
  },
});

export default test;
