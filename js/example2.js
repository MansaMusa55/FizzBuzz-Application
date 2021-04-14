//Take user input and print numbers to the page
function printNumbers(){
    //first number the user enters
    let startNum = parseInt(document.getElementById("numOne").value);
    ///second number the user enters
    let endNum = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(startNum, endNum);
    displayData(numbers);
}

// Gets the range of numbers
function getRange(start, end){
    let numberArray = [];

    for (let index = start; index <= end; index++){
        //fizzbuzz things go here
        
        numberArray.push(index);

    }
    return numberArray;
}

//display the numbers on the page
function displayData(numbers){
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    //clear the table
    resultsBody.innerHTML = "";

    // Loops over every element in the numbers array
    //Get the value and write it at the end
    for (let i = 0; i < numbers.length; i += colCount){
        let dataRow = rowTemplate.content.cloneNode(true);
        
        //return an array of columns from the template
        let cols = dataRow.querySelectorAll("td");

        //loop over the columns
            for (let colIndex = 0; colIndex < cols.length; colIndex++) {
                let value = numbers[i + colIndex];
                //Grabs manual entry of user from "Enter First Multiple"
                let multipleOne = parseInt(document.getElementById("mulOne").value);
                //Grabs manual entry of user from "Enter Second Multiple"
                let multipleTwo = parseInt(document.getElementById("mulTwo").value);

                //If the value from the range is a multple of entry one and two then print fizzbuzz
                if ((value % multipleOne == 0) && (value % multipleTwo == 0)) {
                    cols[colIndex].classList.add("fizzbuzz");
                    cols[colIndex].textContent = "FizzBuzz";
                } else if (value % multipleOne == 0) {
                    cols[colIndex].classList.add("fizz");
                    cols[colIndex].textContent = "Fizz";
                } else if (value % multipleTwo == 0) {
                    cols[colIndex].classList.add("buzz");
                    cols[colIndex].textContent = "Buzz";
                }
                //td's use textContent to set content
                else{
                cols[colIndex].textContent = value;
                }
            }
            //add the row to the page
            resultsBody.appendChild(dataRow);


    }

}                