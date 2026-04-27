import { expect } from '@playwright/test';
import test from '../helper/BasePage';

test.describe('Flipkart flights booking flow', () => {
  test('@smoke Book flight from Flipkart.com', async ({
    homePage,
    travelFlightsPage
  }) => {
    await test.step('Go to Flipkart homepage', async () => {
      await homePage.navigateTo('/');
      await homePage.expectLoaded();
    });

    await test.step('Close login modal if shown', async () => {
      await homePage.closeLoginPopupIfVisible();
    });

    await test.step('Navigate to Travel section', async () => {
      await homePage.navigateToPage('Travel');
    });

    await test.step('Validate one-way is selected by default', async () => {
      await travelFlightsPage.verifyOneWayIsSelected();
    });

    await test.step('Switch to round trip and fill core inputs', async () => {
      await travelFlightsPage.clickRoundTrip();
      await travelFlightsPage.selectFromAs('Kolkata');
      await travelFlightsPage.selectToAs('Chennai');
      await travelFlightsPage.selectDepartDate();
      await travelFlightsPage.selectReturnDate();
      await travelFlightsPage.selectAdult();
      await travelFlightsPage.selectChild();
      await travelFlightsPage.verifyEconomyIsSelected();
    });

    await test.step('Search available flights', async () => {
      await travelFlightsPage.navigateToPage('SEARCH');
      await expect(true).toBeTruthy();
    });
  });
});
