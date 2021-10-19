import { Given, When, Then } from '@wdio/cucumber-framework';
import CartPage from '../pageobjects/cart.page';
import LoginPage from '../pageobjects/login.page';
import CheckoutPage from '../pageobjects/checkout.page';
import ShoppingListPage from '../pageobjects/shopping_list.page';
import MenuBarPage from '../pageobjects/menu_bar.page';

const pages = {
    login: LoginPage,
    shoppingList: ShoppingListPage,
    cart: CartPage,
    checkout: CheckoutPage,
    menuBar: MenuBarPage
}

Given(/^I log in$/, async () => {
    await pages['login'].open();
    await LoginPage.login();
});

Given(/^I sort the products by "([^"]*)?"$/, async (sorting: string) => {
    await ShoppingListPage.sortBy(sorting);
});

When(/^I add the (.*) "([^"]*)?" products to the basket$/, async (items: number, order: string) => {
    await ShoppingListPage.addItemsToCart(items, order);
    const n = await MenuBarPage.getBadgeNumber();
    await expect(n).toBe(items);
});

When(/^I remove product (.*) from the basket$/, async (item: number) => {
    await MenuBarPage.goToCart();
    await CartPage.removeItemFromCart(item);
});

When(/^I checkout$/, async () => {
    await CartPage.goToCheckout();
});

Then(/^I should view the checkout form$/, async () => {
    await expect(CheckoutPage.checkoutForm).toBeDisplayed();
});

Then(/^I should have (.*) item in the basket$/, async (item: number) => {
    const numBadge = await MenuBarPage.getBadgeNumber();
    await expect(numBadge).toBe(item);
});

