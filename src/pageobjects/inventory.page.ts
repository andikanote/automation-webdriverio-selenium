import { $ } from '@wdio/globals'
import Page from './page';

class InventoryPage extends Page {
    public get inventoryContainer() {
        return $('.inventory_list');
    }

    public get title() {
        return $('.product_label');
    }

    public async isInventoryDisplayed() {
        return await this.inventoryContainer.isDisplayed();
    }

    public async getPageTitle() {
        return await this.title.getText();
    }
}

export default new InventoryPage();