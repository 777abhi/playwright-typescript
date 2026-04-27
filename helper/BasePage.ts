import { test as base } from '@playwright/test';
import { HomePage } from '../page/HomePage';
import { TravelFlightsPage } from '../page/TravelFlightsPage';
import { TravelSearchPage } from '../page/TravelSearchPage';

type AppFixtures = {
  homePage: HomePage;
  travelFlightsPage: TravelFlightsPage;
  travelSearchPage: TravelSearchPage;
};

const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  travelFlightsPage: async ({ page }, use) => {
    await use(new TravelFlightsPage(page));
  },
  travelSearchPage: async ({ page }, use) => {
    await use(new TravelSearchPage(page));
  }
});

export default test;
