import Page from './page';

class CheckoutPage extends Page {

    get checkoutForm() { return $('#checkout_info_container').$('form') }

}

export default new CheckoutPage();