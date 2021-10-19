Feature: Purchase items from the site
    As a buyer
    I want to checkout with different combinations of products

Scenario: Checkout after adding the cheapest and 2nd cheapest products to the basket and removing the cheapest
Given I log in
And I sort the products by "Price (high to low)"
When I add the 2 "last" products to the basket
And I remove product 1 from the basket
And I checkout
Then I should view the checkout form
And I should have 1 item in the basket