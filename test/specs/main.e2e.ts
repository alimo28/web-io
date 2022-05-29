import LoginPage from '../pageobjects/login.page';


describe('Navigate to application', () => {
     it('navigate to the url of the application and click on "doctor search" button', async () => {
         await LoginPage.open();
         await browser.pause(1000);
 
         await LoginPage.searchWith();
         await browser.pause(5000);
     });

    it('insert the searchterm in the inputfield and click on the "search" button', async () => {
        await LoginPage.open();
        await browser.pause(1000);
        await LoginPage.insertSearchKeyword('Peter Test');
        await browser.pause(1000);
        await LoginPage.search();
        await browser.pause(3000);
        
        const PeteTest = await $('/html/body/app-root/div[2]/div[1]/div/app-search-container/div/div/div/div[3]/div/div/app-contact-card[1]/div/app-contact-header/div/div/div[2]/h2/a');
        await PeteTest.waitForExist({ timeout: 5000 });
        expect(PeteTest).toBeExisting();
        expect(PeteTest).toHaveTextContaining('Dr. Peter Test');
        
        const PetABD = await $('/html/body/app-root/div[2]/div[1]/div/app-search-container/div/div/div/div[3]/div/div/app-contact-card[2]/div/app-contact-header/div/div/div[2]/h2/a');
        await PetABD.waitForExist({ timeout: 5000 });
        expect(PetABD).toBeExisting();
        expect(PetABD).toHaveTextContaining('Dr. Peter Test ABD');

        await browser.pause(10000);
    });

});
