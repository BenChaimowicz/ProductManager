"use strict";
function createProduct() {
    if (nameInput.value != '' && nameInput.value != null && nameInput.value != undefined) {
        var pName = nameInput.value;
    }
    else {
        alert('שם המוצר אינו חוקי!');
        return false;
    }
    if (parseFloat(priceInput.value) >= 0.50 && priceInput.value != '' && priceInput.value != null) {
        var pPrice = parseFloat(priceInput.value);
    }
    else {
        alert('מחיר לא חוקי!');
        return false;
    }
    if (weightInput.value != '' && weightInput.value != null && parseFloat(weightInput.value) >= 0.1) {
        var pWeight = parseFloat(weightInput.value);
    }
    else {
        alert('משקל לא חוקי!');
        return false;
    }
    let kosher;
    kosherInput.checked ? kosher = true : kosher = false;
    if (manInput.value != '') {
        var pMan = manInput.value;
    }
    else {
        alert('שם יצרן לא חוקי!');
        return false;
    }
    if (expDateInput.value != '' && expDateInput.value != null) {
        var pExpiry = new Date(expDateInput.value);
    }
    else {
        alert('תאריך לא חוקי!');
        return false;
    }
    var product = new Product(pName, pPrice, pWeight, kosher, pMan, pExpiry);
    product.addToStock();
    alert('המוצר נוסף בהצלחה!');
}
function goToStock() {
    cpPage.style.zIndex = '5';
    stockPage.style.zIndex = '6';
}
function goToCP() {
    stockPage.style.zIndex = '5';
    cpPage.style.zIndex = '6';
}
