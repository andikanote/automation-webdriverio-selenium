import { loginSteps } from '../stepdefinitions/ login.steps'

describe('Saucedemo Login Tests', () => {
    it('should login with valid credentials', async () => {
        await loginSteps.loginWithValidCredentials();
    });

    it('should display error message with invalid credentials', async () => {
        await loginSteps.loginWithInvalidCredentials();
    });
});