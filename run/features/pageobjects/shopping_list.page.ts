import Page from './page';

enum SortDirection {
    'Name (A to Z)' = 'az',
    'Name (Z to A)' = 'za',
    'Price (low to high)' = 'lohi',
    'Price (high to low)' = 'hilo'
}

class ShoppingListPage extends Page {

    get selectDropdown() { return $('select[data-test="product_sort_container"]') }
    get inventoryItems(): any { return $$('.inventory_item') }


    async sortBy(direction: string) {
        const directionValue = SortDirection[direction];

        await this.selectDropdown.selectByAttribute('value', directionValue);
    }

    async addItemsToCart(numberOfItems: number, order: string) {
        let maxItemsIndex = await this.inventoryItems.length.then((value) => { return value; });
        maxItemsIndex -=1;

        if (order == 'last') {
            for (let i = maxItemsIndex; i > maxItemsIndex - numberOfItems; i--) {
                await this.inventoryItems[i].$('.btn_inventory').click();
            }
        } else {
            for (let i = 0; i < numberOfItems; i++) {
                await this.inventoryItems[i].$('.btn_inventory').click();
            }
        }
    }

}

export default new ShoppingListPage();
