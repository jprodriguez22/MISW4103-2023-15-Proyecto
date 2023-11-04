const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless:false });
    const page = await browser.newPage();

    // Navigate to the page and perform login actions
    await page.goto('http://localhost:2368/ghost/');

    // You may need to add code for login actions here

    // Add a delay to allow time for manual login (in milliseconds)
    await new Promise(resolve => setTimeout(resolve, 15000)); // Adjust the time as needed

    const cookies = await page.cookies();
    const fs = require('fs');
    fs.writeFileSync('cookies.json', JSON.stringify(cookies));

    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
