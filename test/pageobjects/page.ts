/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens the main page of the site
    */
    public open () {
        return browser.url(`https://demo.clickdoc.de/cd-de/`)
    }


    public openPage (path: string) {
        return browser.url(`https://demo.clickdoc.de/cd-de/${path}`)
    }

}
