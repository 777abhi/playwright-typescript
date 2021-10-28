//TravelSearchPage.ts
import { Page, expect } from "@playwright/test";

let locatorSwitchNonStopOnOff, allFlightsPriceOnPage, lastRowForFlight;

let btnBook = 'button:has-text("Book")';

let switchNonStopOnOff, switchHandle, switchOn, switchOff;

let allPriceList;

export class TravelSearchPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    //locators
    switchNonStopOnOff = "//div[@class='non-stop']//span[@class='u-ib u-rfloat']/*";
    switchHandle = ".switch-handle";
    switchOn = "c-switch switch-on";
    switchOff = "c-switch switch-off";
    allPriceList = "//div[@class='result-col outr']//div[@class='result-col-inner']//div[contains(@class,'price-group')]";

  }

  async verifyNonStopIsSelected() {
    await this.page.waitForSelector(switchNonStopOnOff);
    locatorSwitchNonStopOnOff = await this.page.locator(switchNonStopOnOff);
    await expect(locatorSwitchNonStopOnOff).toHaveClass(switchOff);
  }

  async selectNonStop() {
    await this.page.click(switchHandle);
    await expect(locatorSwitchNonStopOnOff).toHaveClass(switchOn);
  }

  async printAllOutboundFlights() {
    await this.page.waitForLoadState('networkidle'); // This resolves after 'networkidle'
    allFlightsPriceOnPage = await this.page.$$(allPriceList);

    for await (const flightPriceOnPage of allFlightsPriceOnPage) {
      console.log(await flightPriceOnPage.innerText());
      lastRowForFlight = flightPriceOnPage;
    }
  }
  async selectLastOutboundFlight() {
    await lastRowForFlight.click();
  }
  async navigateToReviewOrder() {
    await this.page.click(btnBook);
  }
  async reviewItenerary() {
    await this.page.click("text=REVIEW ITINERARY");
  }
}
