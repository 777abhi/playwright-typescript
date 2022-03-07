//TravelFlightsPage.ts
import { Page, expect } from "@playwright/test";

let rdbOneWay, rdbRoundTrip;

let txtBoxDepartCity, txtBoxArrivalCity, txtBoxDepartDate;

let day, month, year;

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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await this.page.click("text=Kolkata, INCCU");
  }

  async selectToAs(arrivalCityName) {
    await this.page.click(txtBoxArrivalCity);
    await this.page.fill(txtBoxArrivalCity, arrivalCityName);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await this.page.click("text=Chennai, INMAA");
  }

  async selectDepartDate() {
    await this.page.click(txtBoxDepartDate);

    await this.selectTodayDate(2);
  }

  async selectTodayDate(addDays = 0) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date();
    date.setDate(date.getDate() + addDays);
    month = await monthNames[date.getMonth()];
    year = date.getFullYear();

    await this.selectCalendarDate(date.getDate(), month, year);
  }

  async selectCalendarDate(day, month, year) {
    let locator = await this.page.locator(
      "//div[text()='" +
        month +
        " " +
        year +
        "']/ancestor::table//button[text()='" +
        day +
        "']"
    );
    await locator.click();
  }

  async selectReturnDate() {
    await this.page.click("//input[@name='0-dateto']");
    await this.selectTodayDate(15);
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
