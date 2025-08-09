export class BaseActions {
    /**
     * Launches the given URL in the browser.
     */
    async launchUrl(url) {
        await browser.url(url);
    }

    /**
     * Clicks on the element and sets its value.
     */
    async setValue(element, value) {
        await element.click();
        await element.setValue(value);
    }

    /**
     * Waits for the element to be displayed and clicks on it.
     */
    async tapOnScreen(element = $("body")) {
        await element.waitForDisplayed({ timeout: 2000 });
        await element.click();
    }

    /**
     * Replaces the placeholder "$$$" in the given string with the provided value.
     */
    async replaceTheLocatorValue(originalString, toReplace) {
        return originalString.replace("$$$", toReplace);
    }
}
