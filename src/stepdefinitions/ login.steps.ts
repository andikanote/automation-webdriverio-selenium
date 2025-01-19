import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'

export const loginSteps = {
    async loginWithValidCredentials() {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.inventoryContainer).toBeExisting();
        await expect(InventoryPage.title).toHaveText('Products');
    },

    async loginWithInvalidCredentials() {
        await LoginPage.open();
        await LoginPage.login('invalid_user', 'invalid_password');
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveText(
            'Epic sadface: Username and password do not match any user in this service'
        );
    }
};