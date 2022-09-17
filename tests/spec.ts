import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import MainPage from '../pages/mainPage';
import IssuesPage from '../pages/issuesPage';
import RoadMapPage from '../pages/roadMapPage';
import SearchPage from '../pages/searchPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.redmine.org/');
});

test.describe('Test Cases', () => {

  test('Check registration page', async ({ page }) => {
    const randomstring = Math.random().toString(36).substring(2);
    const register = new RegisterPage(page)
    const mainPg = new MainPage(page)
    await (await mainPg.getRegisterButtonLoc()).click();
    await register.enterNickName(randomstring)
    await register.enterPasswordAndConfirmPassword()
    await register.enterFirstName(randomstring)
    await register.enterLastName(randomstring)
    await register.enterEmail(randomstring)
    await register.selectUserLanguage('uk')
    await register.clickCommitButton()
    await expect(await register.getNotificationLoc()).toContainText('Account was successfully created');
    // await page.pause()
  });

  test('Check filters functional on the "issues" page', async ({ page }) => {
    const mainPg = new MainPage(page)
    const issuesPg = new IssuesPage(page)
    await mainPg.clickIssuesButton();
    await issuesPg.selectFilter('tracker_id')
    await issuesPg.selectFilter('created_on')
    await issuesPg.selectTrackerFilter('3')
    await issuesPg.insertDateIntoCdreatedFilter('2022-09-01')
    await issuesPg.clickApplyButton()
    await expect (await issuesPg.getIdLoc()).toHaveText('37636')
    // await page.pause()
  });

  test('Check Slack link on the "Wiki" page', async ({ page }) => {
    const mainPg = new MainPage(page)
    await mainPg.clickSupportAndGettingHelpButton()
    await expect(await mainPg.getSlackLinkLoc()).toBeVisible()
    await mainPg.clickSluckLink()
    await expect(page).toHaveURL('https://redmineorg.slack.com/join/shared_invite/zt-ew74bkww-9~Cs~L2oSioRXDljumZ_zg#/shared-invite/email');
    // await page.pause()
  });

  test('Сhecking the transition to a specific entry from the "roadmap" menu', async ({ page }) => {
    const mainPg = new MainPage(page)
    const roadMapPg = new RoadMapPage (page)
    await mainPg.clickRoadMapButton()
    await roadMapPg.version510Click()
    await (await roadMapPg.getlastEntryLoc()).scrollIntoViewIfNeeded()
    await expect (await roadMapPg.getlastEntryLoc()).toBeVisible()
    await roadMapPg.lastEntryClick()
    await expect(page).toHaveURL('https://www.redmine.org/issues/37657');
    // await page.pause()

  });

  test('Check search field', async ({ page }) => {
  const mainPg = new MainPage(page)
  const searchPg = new SearchPage(page)
  await mainPg.searchFieldInsertText('automation')
  await page.keyboard.down('Enter')
  await searchPg.wikiCheckBoxClick()
  await searchPg.redminePluginsCheckBoxClick()
  await searchPg.commitButtonClick()
  await searchPg.additionalsButtonClick()
  await expect(page).toHaveURL('https://www.redmine.org/plugins/additionals')
  // await page.pause()
  });
});
