import { expect, type Locator, type Page } from '@playwright/test';

export class TravelFlightsPage {
  private readonly oneWayOption: Locator;
  private readonly roundTripOption: Locator;
  private readonly departCityInput: Locator;
  private readonly arrivalCityInput: Locator;
  private readonly departDateInput: Locator;
  private readonly returnDateInput: Locator;
  private readonly travellerClassInput: Locator;

  constructor(private readonly page: Page) {
    this.oneWayOption = page.locator('#ONE_WAY');
    this.roundTripOption = page.locator('#ROUND_TRIP');
    this.departCityInput = page.locator('input[name="0-departcity"]');
    this.arrivalCityInput = page.locator('input[name="0-arrivalcity"]');
    this.departDateInput = page.locator('input[name="0-datefrom"]');
    this.returnDateInput = page.locator('input[name="0-dateto"]');
    this.travellerClassInput = page.locator('input[name="0-travellerclasscount"]');
  }

  async navigateToPage(pageName: string): Promise<void> {
    await this.page.click(`button:has-text("${pageName}")`);
  }

  async verifyOneWayIsSelected(): Promise<void> {
    await expect(this.oneWayOption).toBeChecked();
  }

  async verifyEconomyIsSelected(): Promise<void> {
    await expect(this.page.locator('text=Economy')).toBeVisible();
  }

  async clickRoundTrip(): Promise<void> {
    await this.roundTripOption.check();
  }

  async selectFromAs(departCityName: string): Promise<void> {
    await this.departCityInput.fill(departCityName);
    await this.page.locator('text=/, IN/').first().click();
  }

  async selectToAs(arrivalCityName: string): Promise<void> {
    await this.arrivalCityInput.fill(arrivalCityName);
    await this.page.locator('text=/, IN/').first().click();
  }

  async selectDepartDate(addDays = 2): Promise<void> {
    await this.departDateInput.click();
    await this.selectCalendarDate(addDays);
  }

  async selectReturnDate(addDays = 15): Promise<void> {
    await this.returnDateInput.click();
    await this.selectCalendarDate(addDays);
  }

  async selectAdult(): Promise<void> {
    await this.travellerClassInput.click();
    await this.page
      .locator('div', { hasText: 'Adults' })
      .locator('button')
      .nth(1)
      .click();
  }

  async selectChild(): Promise<void> {
    await this.page
      .locator('div', { hasText: 'Children' })
      .locator('button')
      .nth(1)
      .click();
  }

  private async selectCalendarDate(addDays: number): Promise<void> {
    const target = new Date();
    target.setDate(target.getDate() + addDays);

    const month = target.toLocaleString('en-US', { month: 'long' });
    const year = target.getFullYear();
    const day = target.getDate();

    await this.page
      .locator(`//div[text()='${month} ${year}']/ancestor::table//button[text()='${day}']`)
      .first()
      .click();
  }
}
