const { remote } = require('webdriverio');
const config = require('./config.json');
const path = require('path');
const screenshotDirectory = './screens';

// Execution
(async () => {
    if (config.headless){
        var browser = await remote({
            capabilities: { browserName: 'chrome', 'goog:chromeOptions': {args: ['headless']} }
        }) 
    }
    else{
        var browser = await remote({
            capabilities: { browserName: 'chrome' }
        }) 
    }
    for(page in config.pages){        
        const pageObject = config.pages[page]
        const pageName = pageObject.pageName
        const pageURL = pageObject.url
        if (pageObject.rip){
            for(viewport in config.viewports){
                const {height, width} = config.viewports[viewport]
                const viewportSize = `${width}x${height}`
                if(config.horizontal){
                    await browser.setWindowSize(height, width)
                }
                else{
                    await browser.setWindowSize(width, height)
                }                
                await browser.url(pageURL)
                await waitFullLoad(browser)
                await login(browser, pageObject)
                await waitFullLoad(browser)
                const links = await scrapLinks(browser, pageURL)
                for (i in links){
                    href = links[i]
                    await browser.url(`${pageURL}/${href}`)
                    await explore(browser, href, pageName, viewportSize)
                }                 
            }
        }
        else{
            console.log('Skipping ' + pageName)
        }
                
    }
    await browser.deleteSession(); 
})();

// Retrieve all the links belonging to the root directory
async function scrapLinks(browser, base){
    const links = await browser.$$('[href]');
    let rootLinks = [];
    for (link of links){
        href = await link.getAttribute('href');
        if (href && (href.startsWith('#/') || href.startsWith(base))){
            rootLinks.push(href);
        }
    }
    rootLinks = [...new Set(rootLinks)]
    return rootLinks;
}

// Automatically login to Ghost
async function login(browser, pageObject){
    try{
        await browser.$(pageObject.userFieldID).setValue(config.email);
        await browser.$(pageObject.passwordFieldID).setValue(config.password);
        await browser.$(pageObject.loginButtonID).click();
        await browser.pause(1500)
    }
    catch{
        console.log('Already logged in')
    }
    return
}

// Helper function to guarantee that the page is fully loaded
async function waitFullLoad(browser){
    await browser.waitUntil(async () => {
        return await browser.execute(() => {
            return document.readyState === 'complete'
        });
    })
    return;
}

// Recursive iteration
async function explore(browser, url, pageName, viewport){
    await browser.pause(1400)
    const filename = url.replace(/[#/?=]/g, '')
    const savePath = `${screenshotDirectory}/${pageName}_${viewport}_${filename}.png`
    console.log(savePath)
    await browser.$('body').saveScreenshot(savePath);
    ///browser.saveScreenshot(savePath)
    return;
}