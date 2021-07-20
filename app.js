const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(`\nSolving for rectangle with dimensions: ${l}, ${w}`);

    console.log(`Area of rectangle: ${rect.area(l, w)}`);
    console.log(` Perimeter of rectangle: ${rect.perimeter(l, w)}`);

}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);