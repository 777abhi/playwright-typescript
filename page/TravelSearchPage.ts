import { expect, type Locator, type Page } from '@playwright/test';

export class TravelSearchPage {
  private readonly switchNonStopOnOff: Locator;
  private readonly switchHandle: Locator;
  private readonly allPriceList: Locator;
  private readonly bookButton: Locator;

  constructor(private readonly page: Page) {
    this.switchNonStopOnOff = page.locator("//div[@class='non-stop']//span[@class='u-ib u-rfloat']/*");
    this.switchHandle = page.locator('.switch-handle');
    this.allPriceList = page.locator(
      "//div[@class='result-col outr']//div[@class='result-col-inner']//div[contains(@class,'price-group')]"
    );
    this.bookButton = page.locator('button:has-text("Book")');
  }

  async verifyNonStopIsSelected(): Promise<void> {
    await expect(this.switchNonStopOnOff).toHaveClass(/switch-off/);
  }

  async selectNonStop(): Promise<void> {
    await this.switchHandle.click();
    await expect(this.switchNonStopOnOff).toHaveClass(/switch-on/);
  }

  async printAllOutboundFlights(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    const prices = await this.allPriceList.allInnerTexts();
    prices.forEach((value) => console.log(value));
  }

  async selectLastOutboundFlight(): Promise<void> {
    const count = await this.allPriceList.count();
    await this.allPriceList.nth(count - 1).click();
  }

  async navigateToReviewOrder(): Promise<void> {
    await this.bookButton.click();
  }

  async reviewItinerary(): Promise<void> {
    await this.page.click('text=REVIEW ITINERARY');
  }
}
