//flipkart.spec.ts
import test from "../helper/BasePage";

test("Book Flight from Flipkart.com", async ({
  homePage,
  travelFlightsPage,
  travelSearchPage,
}) => {
  await test.step("Goto flipkart.com", async () => {
    await homePage.navigateTo("/");
  });
  await test.step("Skip login", async () => {
    await homePage.closeLoginPopup();
  });
  await test.step("Goto Travel", async () => {
    await homePage.navigateToPage("Travel");
  });
  await test.step("Verify that one way is selected by default", async () => {
    await travelFlightsPage.verifyOneWayIsSelected();
  });
  await test.step("Click on round trip", async () => {
    await travelFlightsPage.clickRoundTrip();
  });
  await test.step("From - Kolkata", async () => {
    await travelFlightsPage.selectFromAs("Kolkata");
  });
  await test.step("To - Chennai", async () => {
    await travelFlightsPage.selectToAs("Chennai");
  });
  await test.step("Depart on Nov 1", async () => {
    await travelFlightsPage.selectDepartDate();
  });
  await test.step("Return on Nov 30", async () => {
    await travelFlightsPage.selectArrivalDate();
  });
  await test.step("Adult 2", async () => {
    await travelFlightsPage.selectAdult();
  });
  await test.step("Child 1", async () => {
    await travelFlightsPage.selectChild();
  });
  await test.step("Economy should be selected", async () => {
    await travelFlightsPage.verifyEconomyIsSelected();
  });
  await test.step("Click on the search", async () => {
    await travelFlightsPage.navigateToPage("SEARCH");
  });
  await test.step("Verify non-stop is not selected", async () => {
    await travelSearchPage.verifyNonStopIsSelected();
  });
  await test.step("Click on the non-stop", async () => {
    await travelSearchPage.selectNonStop();
  });
  await test.step("print all the prices", async () => {
    await travelSearchPage.printAllOutboundFlights();
  });
  await test.step("Select the last flight", async () => {
    await travelSearchPage.selectLastOutboundFlight();
  });
  await test.step("Click on the book button", async () => {
    await travelSearchPage.navigateToReviewOrder();
  });
  await test.step(
    "Verify the page navigates to the review store online",
    async () => {
      await travelSearchPage.reviewItenerary();
    }
  );
});
