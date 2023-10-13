// Scrape Merriam-Webster website for wotd

import { chromium, firefox, webkit } from 'playwright';

(async () => {
    for (const browserType of [chromium, firefox, webkit]) {
        const browser = await browserType.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.merriam-webster.com/word-of-the-day', { timeout: 60000 });

        const wotdMW = await page.$eval(
            '.word-header-txt',
            (element) => element.innerText
        );

        console.log("Merriam-Webster's WOTD: ", wotdMW);

        await browser.close();
    }
})();


// const playwright = require("playwright")
// (async() => {
//     for (const browserType of ['chromium', 'firefox', 'webkit']){
//         const browser = await playwright[browserType].launch();
//         const context = await browser.newContext();
//         const page = await context.newPage();
//         await page.goto("https://www.merriam-webster.com/word-of-the-day");

//         const wotdMW = await page.$eval(
//             ".word-header-txt",
//             (element) => element.innerText
//         );

//         console.log("Merriam-Webster's WOTD: ", wotdMW);

//         await browser.close();
//     }
//  })();


// (async () => {
//     const browserType = 'chromium'; // Choose your browser type
//     const browser = await playwright[browserType].launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://www.merriam-webster.com/word-of-the-day");
  
//     const wotdMW = await page.$eval(
//       ".word-header-txt", // Note the CSS selector here
//       (element) => element.innerText
//     );
  
//     console.log("Merriam-Webster's WOTD: ", wotdMW);
  
//     await browser.close();
//   })();