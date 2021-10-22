const { test, expect } = require('@playwright/test');
test.only('test', async ({ page }) => {
  
  await page.goto('https://www.flipkart.com/');
  await page.click('text=✕');
  await page.click('img[alt="Travel"]');
  await page.click('text=One WayRound Trip >> div');
  await page.click('label:nth-child(2) ._1XFPmK');
  await page.click('input[name="0-departcity"]');
  await page.fill('input[name="0-departcity"]', 'Kolkata');
  await page.click('text=Kolkata, IndiaCCU');
  await page.click('input[name="0-arrivalcity"]');
  await page.fill('input[name="0-arrivalcity"]', 'Chennai');
  await page.click('text=Chennai, IndiaMAA');
  await page.click('input[name="0-datefrom"]');
  await page.click('table:nth-child(2) tbody tr:nth-child(1) td:nth-child(2)'); // 1st Nov   or can use 
  await page.click('table:nth-child(2) tbody tr:nth-child(5) td:nth-child(3)'); // 30th Nov or can use 
  await page.click('input[name="0-travellerclasscount"]');
  await page.click('text=AdultsAbove 12 years1 >> :nth-match(button, 2)');
  await page.click('text=ChildrenBetween 2-12 years0 >> :nth-match(button, 2)');
  await page.click('button:has-text("SEARCH")');
  await page.click('text=Non stopRefundable >> div');
  await page.click('.c-switch');
  await page.click('.switch-handle');
  await page.click('text=Non stopRefundable >> div');
  await page.click('text=PreferenceNon stopRefundable');
  await page.click('.c-switch');
  await page.click('.price-group .price .c-price-display'); //.result-wrpr
  await page.click('text=05:30 5hr 10min 1 stop 10:4023962');
  await page.click('button:has-text("Book")');
  await page.click('text=REVIEW ITINERARY');
});
