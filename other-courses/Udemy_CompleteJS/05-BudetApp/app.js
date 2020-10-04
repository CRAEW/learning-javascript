// BUDGET CONTROLLER
var budgetController = (function() {

    // Some Code

})();




// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function() {

            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function () {
            return DOMstrings;
        }

    }


})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl) {

    // Sets up ALL Event Listeners
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };


    // Adds new item
    var ctrlAddItem = function() {
        // Get the input data
        var input = UICtrl.getinput();

        // Add the item to budget controller

        // Add item to UI

        // Calculate budget

        // Display budget on UI

    };


    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }


})(budgetController, UIController);

// Without this line of code, nothing will work.
controller.init();


