function printNumbers(){
    let startNum = parseInt(document.getElementById("numOne").value);
    let endNum = parseInt(document.getElementById("numTwo").value);
    displayData(startNum, endNum);
}

//Display numbers in a table
function displayData(start,end){
    const template = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    resultsBody.innerHTML = "";

    //Loop over values fron start to end
    for (let i = start; i <= end; i += 5) {
        const dataRow = document.importNode(template.content, true);
        dataRow.getElementById("col1").textContent = i
        dataRow.getElementById("col2").textContent = i + 1;
        dataRow.getElementById("col3").textContent = i + 2;
        dataRow.getElementById("col4").textContent = i + 3;
        dataRow.getElementById("col5").textContent = i + 4;

        resultsBody.appendChild(dataRow);
    }
}


