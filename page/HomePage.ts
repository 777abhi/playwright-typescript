import { expect, type Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async navigateTo(path = '/'): Promise<void> {
    await this.page.goto(path);
  }

  async closeLoginPopupIfVisible(): Promise<void> {
    const closeButton = this.page.locator('button:has-text("✕")');
    if (await closeButton.isVisible().catch(() => false)) {
      await closeButton.click();
    }
  }

  async navigateToPage(pageName: string): Promise<void> {
    await this.page.click(`img[alt="${pageName}"]`);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/flipkart\.com/);
  }
}
