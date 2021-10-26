//TravelFlightsPage.ts
import { Page, expect } from "@playwright/test";

let rdbOneWay, rdbRoundTrip;

let txtBoxDepartCity, txtBoxArrivalCity, txtBoxDepartDate;

export class TravelFlightsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    //locators
    rdbOneWay = "//input[@id='ONE_WAY']";
    rdbRoundTrip = "//div[@data-checked='false']";

    txtBoxDepartCity = 'input[name="0-departcity"]';
    txtBoxArrivalCity = 'input[name="0-arrivalcity"]';
    txtBoxDepartDate = 'input[name="0-datefrom"]';
  }

  async navigateToPage(PageName) {
    await this.page.click('button:has-text("' + PageName + '")');
  }

  async verifyOneWayIsSelected() {
    expect(await this.page.isChecked(rdbOneWay)).toBeTruthy();
  }

  async verifyEconomyIsSelected() {
    expect(
      await this.page.isChecked(
        "//div[@data-checked='true'][normalize-space()='Economy']"
      )
    ).toBeTruthy();
  }

  async clickRoundTrip() {
    await this.page.check(rdbRoundTrip);
  }

  async selectFromAs(departCityName) {
    await this.page.click(txtBoxDepartCity);
    await this.page.fill(txtBoxDepartCity, departCityName);
    await this.page.click("text=Kolkata, IndiaCCU");
  }

  async selectToAs(arrivalCityName) {
    await this.page.click(txtBoxArrivalCity);
    await this.page.fill(txtBoxArrivalCity, arrivalCityName);
    await this.page.click("text=Chennai, IndiaMAA");
  }

  async selectDepartDate() {
    await this.page.click(txtBoxDepartDate);
    await this.page.click(
      "table:nth-child(2) tbody tr:nth-child(1) td:nth-child(2)"
    ); // 1st Nov
  }

  async selectArrivalDate() {
    await this.page.click(
      "table:nth-child(2) tbody tr:nth-child(5) td:nth-child(3)"
    ); // 30th Nov
  }

  async selectAdult() {
    await this.page.click('input[name="0-travellerclasscount"]');
    await this.page.click(
      "text=AdultsAbove 12 years1 >> :nth-match(button, 2)"
    );
  }
  async selectChild() {
    await this.page.click(
      "text=ChildrenBetween 2-12 years0 >> :nth-match(button, 2)"
    );
  }
}
