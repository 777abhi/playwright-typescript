//refined code using tools
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
  await page.click('table:nth-child(2) tbody tr:nth-child(1) td:nth-child(2)'); // 1st Nov    
  await page.click('table:nth-child(2) tbody tr:nth-child(5) td:nth-child(3)'); // 30th Nov 
  await page.click('input[name="0-travellerclasscount"]');
  await page.click('text=AdultsAbove 12 years1 >> :nth-match(button, 2)');
  await page.click('text=ChildrenBetween 2-12 years0 >> :nth-match(button, 2)');
  await page.click('button:has-text("SEARCH")');

  await page.waitForSelector("//div[@class='non-stop']//span[@class='u-ib u-rfloat']/*")
  const locator = await page.locator("//div[@class='non-stop']//span[@class='u-ib u-rfloat']/*");
  await expect(locator).toHaveClass('c-switch switch-off');
  await page.click('.switch-handle');
  await expect(locator).toHaveClass('c-switch switch-on');

  const locatorAllPriceList = "//div[@class='result-col outr']//div[@class='result-col-inner']//div[contains(@class,'price-group')]";
  await page.waitForSelector(locatorAllPriceList);
  await page.waitForSelector("//div[contains(@class,'c-flight-listing-split-row selected hide-detail')]//div[contains(@class,'label br')][normalize-space()='non-stop']");
  await page.waitForTimeout(1000);
  const allFlightsPriceOnPage = await page.$$(locatorAllPriceList);
  let lastRowForFlight;
  for await (const flightPriceOnPage of allFlightsPriceOnPage) {
    console.log(await flightPriceOnPage.innerText());
    lastRowForFlight = flightPriceOnPage;
  }

  await lastRowForFlight.click();


  await page.click('button:has-text("Book")');
  await page.click('text=REVIEW ITINERARY');


});
