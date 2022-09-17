import { Page } from "@playwright/test"
export default class IssuesPage{

    constructor (public page: Page){ }

    async selectFilter(value) {
        await this.page.locator('[id="add_filter_select"]').selectOption(value);   
    }
    async selectTrackerFilter(value) {
        await this.page.locator('[id="values_tracker_id_1"]').selectOption(value);   
    }
    async insertDateIntoCdreatedFilter(value) {
        await this.page.locator('[id="values_created_on_1"]').fill(value);   
    }
    async clickApplyButton() {
        await this.page.locator('[class="icon icon-checked"]').click();   
    }
    async getIdLoc() {
        return await this.page.locator('[class="id"]')
    }

}