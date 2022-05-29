import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnSearch() {
        return $('/html/body/app-root/div[2]/div[1]/div/app-landing-page/main/header/div/div/div/div/button');
        //return $('=Finden');
    }

    public get linkSearch() {
        const link = $('/html/body/app-root/div[2]/div[1]/app-header/div/div/div/div[2]/ul/li[2]/a');
        return link.getAttribute('href');
    }

    public get inputKeyword() {
        return $('#searchInput');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to navigate 
     */
    public async insertSearchKeyword(keyword: string) {
        await this.inputKeyword.setValue(keyword);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to navigate 
     */
    public async search() {
        //const btn = this.btnSearch;

        //console.log(btn.getAttribute('href'));
        //console.log(btn.getAttribute('class'));
        //console.log(btn.getText());
        
        this.btnSearch.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to search with the given keyword 
     */
    public async searchWith() {
        //const link = (await this.linkSearch).toString;
        return super.openPage((await this.linkSearch).toString);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open();
    }
}

export default new LoginPage();
