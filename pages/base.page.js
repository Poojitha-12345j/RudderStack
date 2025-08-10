const { CommonLocators } = require("../locators/common.locators");

class BaseActions {
    /**
     * Launch a given URL
     * @param {string} url - The URL to open
     */
    async launchUrl(url) {
        await browser.url(url);
    }

    /**
     * Taps/clicks on the page body
     */
    async tapOnElement(locator = CommonLocators.pageBody) {
        const element = await $(locator);
        await element.waitForDisplayed({ timeout: 5000 });
        await element.click();
    }

    /**
     * Click on an element
     * @param {string} selector - CSS/XPath selector
     */
    async clickElement(selector) {
        const element = await $(selector);
        await element.waitForClickable({ timeout: 10000 });
        await element.click();
    }

    /**
     * Set value in an input field
     * @param {string} selector - CSS/XPath selector
     * @param {string} value - Text to set
     */
    async setValue(selector, value) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 10000 });
        await element.setValue(value);
    }

    /**
     * Get text of an element
     * @param {string} selector - CSS/XPath selector
     * @returns {Promise<string>}
     */
    async getText(selector) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 10000 });
        return element.getText();
    }

    /**
     * Check if element is displayed within given timeout
     * @param {string} selector - CSS/XPath selector
     * @param {number} [timeout=5000] - Timeout in ms
     * @returns {Promise<boolean>}
     */
    async isElementDisplayed(selector, timeout = 5000) {
        try {
            const element = await $(selector);
            return await element.waitForDisplayed({ timeout });
        } catch {
            return false;
        }
    }

    async waitForDisplayed(selector, timeout = 5000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
    }

    /**
     * Get attribute value of an element
     * @param {string} selector - CSS/XPath selector
     * @param {string} attribute - Attribute name
     * @returns {Promise<string>}
     */
    async getAttribute(selector, attribute) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 10000 });
        return element.getAttribute(attribute);
    }

    /**
     * Replaces the placeholder "$$$" in the given selector string with the provided value.
     * Useful for dynamic locators like '//div[text()="$$$"]'
     * @param {string} originalString - The locator string containing "$$$" placeholder
     * @param {string} valueToReplace - The value to replace "$$$" with
     * @returns {string} - Updated locator string
     */
    async replaceTheLocatorValue(originalString, valueToReplace) {
        if (!originalString.includes("$$$")) {
            throw new Error(`Locator does not contain placeholder $$$: ${originalString}`);
        }
        return originalString.replace("$$$", valueToReplace);
    }
}

module.exports = { BaseActions };
