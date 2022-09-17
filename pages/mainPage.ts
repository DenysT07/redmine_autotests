import { Page } from "@playwright/test"
export default class MainPage{

    constructor (public page: Page){ }


    async getRegisterButtonLoc() {
        return await this.page.locator('[class="register"]')
    }
    async clickIssuesButton() {
        await this.page.locator('[class="issues"]').click();   
    }
    async clickSupportAndGettingHelpButton() {
        await this.page.locator('li>ul>li [href="#Support-38-getting-help"]').click();   
    }
    async clickRoadMapButton() {
        await this.page.locator('[class="roadmap"]').click();   
    }
    async searchFieldInsertText(value) {
        await this.page.locator('[id="q"]').fill(value);   
    }
    async getSlackLinkLoc() {
        return await this.page.locator('[href*="ljumZ_zg"]')
    }
    async clickSluckLink() {
        await (await this.getSlackLinkLoc()).click()
    }
    async searchClick () {
        await this.page.locator('[accesskey="4"]').click()
    }

}