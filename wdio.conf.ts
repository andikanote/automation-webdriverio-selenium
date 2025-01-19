export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    specs: [
        './src/tests/**/*.ts'
    ],
    exclude: [],
    maxInstances: 10, // Maksimal instance yang berjalan secara paralel
    capabilities: [
        // Konfigurasi untuk Chrome
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--disable-gpu', '--window-size=1280,1024'] //args: ['-headless', '--width=1280', '--height=1024']
            }
        },
        // Konfigurasi untuk Firefox
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['--width=1280', '--height=1024'] //args: ['-headless', '--width=1280', '--height=1024']
            }
        }
    ],
    logLevel: 'silent',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};