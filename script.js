// TASK:
// 1. Create a constant variable that retrieves the HTML element with ID inputData.
// and log the variable to the console to verify correct resrival.

// 5. add the method .value to retrieve the value from the inut of the element itself.

const inputData = document.querySelector('#inputData').value;
console.log(inputData);

// 2. Create a constant variable thatretrieves the HTML element with ID submitData
// and log the variable to the console to verify correct retrievel.

const submitData = document.querySelector('#submitData')
console.log(submitData);

// 3. create a function with name displayData
// and log a string saying "in working" to the console log

// 6. create a variable called inputDataValue that uses the variable inputData with the value method.
// add a log logging out the variable input inside of the function. 

function displayData() {
    console.log("I'm working");

    const inputDataValue = inputData.value;
    console.log(inputDataValue)
};

// 4. Use the variable submitData and add an event listner, listening for a click and activating function Displaydata.

submitData.addEventListener("click", displayData);