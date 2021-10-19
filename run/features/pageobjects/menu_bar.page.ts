import Page from './page';

class MenuBarPage extends Page {

    get shoppingCartLink() { return $('a.shopping_cart_link') }
    get shoppingCartNumber() { return $('.shopping_cart_badge') }

    async getBadgeNumber() {
        let n = await this.shoppingCartNumber.getText().then((value) => { return value; });

        return n;
    }

    async goToCart() {
        await this.shoppingCartLink.click();
    }

}

export default new MenuBarPage();
