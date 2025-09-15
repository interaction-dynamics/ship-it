import { test } from '@playwright/test'
import { checkA11y, injectAxe } from 'axe-playwright'

test('should not have accessibility violations', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')

  await injectAxe(page)

  await checkA11y(page, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  })
})
