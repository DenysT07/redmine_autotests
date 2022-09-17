import { Page } from "@playwright/test"
export default class SearchPage{

    constructor (public page: Page){ }
async wikiCheckBoxClick() {
    await this.page.locator('[id="wiki_pages"]').click()
}
async redminePluginsCheckBoxClick() {
    await this.page.locator('[id="redmine_plugins"]').click()
}
async commitButtonClick() {
    await this.page.locator('[name="commit"]').click()
}
async additionalsButtonClick() {
    await this.page.locator('[href="/plugins/additionals"]').click()
}

}