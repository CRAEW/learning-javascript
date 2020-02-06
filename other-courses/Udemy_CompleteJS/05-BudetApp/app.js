// BUDGET CONTROLLER
var budgetController = (function() {

    // Some code

})();




// UI CONTROLLER
var UIController = (function() {

    // Some code

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // Get the filed input data

        // Add the item to the budget controller

        // Add the new item to the UI

        // Calculate budget

        // Display budget in th UI

        console.log('It works.');

    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


    document.addEventListener('keypress', function(event) {

        if(event.keycode === 13 || event.which === 13) {
            
            ctrlAddItem();

        }

    });

})(budgetController, UIController);