import { Page } from "@playwright/test"
export default class RoadMapPage{

    constructor (public page: Page){
        

    }
async version510Click () {
    await this.page.locator('[name="5.1.0"]').click()
}

async getlastEntryLoc() {
   return await this.page.locator('[href="/issues/37657"]')
}
async lastEntryClick () {
    await (await this.getlastEntryLoc()).click()
}
}