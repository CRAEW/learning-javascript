/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var mark = {
    fullName: 'Mark Smidt',
    mass: 87,
    height: 1.87,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var john = {
    fullName: 'John Smidt',
    mass: 87,
    height: 1.92,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark, john);

// calcBMI() also returns the BMI, so you can replace mark.BMI with mark.calcBMI() in the switch statement

switch(true) {
    case mark.BMI > john.BMI:
        console.log(mark.fullName + ' BMI: ' + mark.BMI);
        console.log(john.fullName + ' BMI: ' + john.BMI);
        console.log(mark.fullName + ' has the highest BMI.');
        break;
    case john.BMI > mark.BMI:
        console.log(mark.fullName + ' BMI: ' + mark.BMI);
        console.log(john.fullName + ' BMI: ' + john.BMI);
        console.log(john.fullName + ' has the hightes BMI.');
        break;
    default:
        console.log(mark.fullName + ' BMI: ' + mark.BMI);
        console.log(john.fullName + ' BMI: ' + john.BMI);
        console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI.');
}
*/