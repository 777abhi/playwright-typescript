//HomePage.ts
import { Page } from "@playwright/test";
var settings = require("../settings.json");

let btnCross;

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    //locators
    btnCross = "text=✕";
  }
  async navigateTo(path) {
    await this.page.goto(settings.baseURL + path);
  }
  async closeLoginPopup() {
    await this.page.click(btnCross);
  }
  async navigateToPage(PageName) {
    await this.page.click('img[alt="' + PageName + '"]');
  }
}
