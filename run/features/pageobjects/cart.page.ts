import Page from './page';

class CartPage extends Page {

    get totalItems(): any { return $$('.cart_item') };
    get checkoutButton() { return $('button[data-test="checkout"]') }

    async removeItemFromCart(i: number) {
        await this.totalItems[i-1].$('.cart_button').click();
    }

    async goToCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();
