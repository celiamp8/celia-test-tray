## Implementation details:

To match the suggested Tray.io implementation, the tests are developed with Cucumber, Typescript and Webdriver.io and follow the Page Object Model.

## Run the tests:

In the terminal, open the “run” folder: `cd run`

From that folder,

To install dependencies: `npm i`

To run tests: `npx wdio run wdio.conf.ts`

## Possible improvements:

- Separate Given, When, Then steps in different files (not really needed for this test because of its simplicity but would be needed for a larger framework).
- On that note, for a larger framework it would be good to separate different tests into different suites. This test runs directly with the main webdriver.io command.
- Add base url, username and password, to a global config file.
- Currently we loop through the 2 cheapest items in reverse order and we add them to the cart: cheapest first, 2nd cheapest second. This means that we just need to remove the item at index 0 to remove the cheapest in the 2nd When step. Ideally we should have this be more independent of the adding order so a good improvement if we had more time would be to create a utils helper file with a function that took the array of price values, removed the “$” at the beginning, and returned the value or selector of the cheapest one. 
