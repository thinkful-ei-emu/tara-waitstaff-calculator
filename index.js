'use strict'

//data source should reflect each meal with as an object with meal price, tax rate, tip percentage, subtotal, total

//data source should reflect meal count and total tips as well as average tips

//one form that accepts meal price, tax percentage, and tip

//button that allows to cancel without eliminating all data

//

const STORE = {
  meals: [],
  mealCount: 0,
  totalTips: 0,
};

function generateMealElement(meal) {
    console.log("We're generating the meal element!");
    return `<h2><Customer Charges</h2>
                <p>Subtotal: ${meal.price + calculateTax(meal)}</p>
                <p>Tip: ${calculateTip(meal)}</p>
                <p>Total: ${meal.price + calculateTax(meal) + calculateTip(meal)}</p>`;
}

function generateTipsElement() {
    console.log("We're generating the tips element!");
    return `<h2>My Earnings Info</h2>
                <p>Meal count: ${STORE.mealCount}</p>
                <p>Total tips: ${STORE.totalTips}</p>
                <p>Average tips: ${STORE.totalTips / STORE.mealCount}</p>`;
}

function renderWaitStaffCalculator(meal) {
    console.log("We're rendering the calculator!");
    ${'.js-customer-charges'}.html(generateMealElement(meal));
    ${'.js-earnings-info'}.html(generateTipsElement());
}

function handleSubmit() {
  ${'.js-submit-button'}.submit(function(event) {
    event.preventDefault();
    console.log("We're handling the submit!");
    const price = ${'.js-meal-price-entry'}.val();
    const tax = ${'.js-tax-percentage.entry'}.val() / 100;
    const tip = ${'.js-tip-percentage-entry'}.val() / 100;
    ${'.js-meal-price-entry'}.val('');
    ${'.js-tax-percentage.entry'}.val('');
    ${'.js-tip-percentage-entry'}.val('');
    const newMeal = addMeal(price, tax, tip);
    renderWaitStaffCalculator(newMeal);
    });
}

function addMeal(mealPrice, mealTax, mealTip) {
    console.log("We're adding the meal!");
    STORE.mealCount += 1;
    STORE.totalTips += calculateTip(mealTip);
    const newMeal = {id: STORE.mealCount, price: mealPrice, tax: mealTax, tip: mealTip};
    STORE.meals.push(newMeal);
    return newMeal;
}

function calculateTip(meal) {
    console.log("We're calculating tip!");
    return meal.price * (1+meal.tip);
}

function calculateTax(meal) {
    console.log("We're calculating tax!");
    return meal.price * (1 + meal.tax);
}

function handleReset() {
    return undefined; 
}

function handleCancel() {
    return undefined;
}

function handleWaitstaffCalculator() {
    console.log("We're starting it all!")
  handleSubmit();
  handleReset();
  handleCancel();
}

$(handleWaitstaffCalculator);