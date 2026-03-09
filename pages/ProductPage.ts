
import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly relatedSection: Locator;
  readonly relatedItems: Locator;
  readonly productPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('input[type="text"]');
    this.relatedSection = page.locator('text=Related');
    this.relatedItems = page.locator('.related-product-item');
    this.productPrice = page.locator('.x-price-primary span');
  }

  async searchProduct(product: string) {
    await this.searchBox.fill(product);
    await this.searchBox.press('Enter');
    await this.page.click('.s-item__link');
  }

  async getRelatedCount() {
    return await this.relatedItems.count();
  }
}
