const { exec } = require('child_process');

// Jalankan test cases dengan WebdriverIO
exec('npx wdio wdio.conf.ts', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error during test execution: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Test Output: ${stdout}`);

    // Setelah test selesai, jalankan Allure report
    exec('allure generate allure-results --clean && allure open', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error generating Allure report: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Allure Report: ${stdout}`);
    });
});