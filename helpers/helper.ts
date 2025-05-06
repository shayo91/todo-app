import { Page } from '@playwright/test';


export class Helper {
    // This class can contain common helper methods like get page title, wait for event etc.

    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getTitle() {
        return await this.page.title();
    }

    async sleep(time: number) {
        await this.page.waitForTimeout(time);
    }

}