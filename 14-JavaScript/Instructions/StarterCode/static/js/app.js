// from data.js
var tableData = data;
// console.log(tableData);
// YOUR CODE HERE!
//1.  event listener
var dateSelected = document.getElementById("datetime").addEventListener("input", searchByDate);

function searchByDate() {
    // access user input 
    var ufoTime = d3.select("#datetime").property("value");
    var ISO_ufo_Date = new Date(ufoTime);
    var correct_format_date = ISO_ufo_Date.toLocaleDateString('en-US')
    console.log(correct_format_date);
    
    // loop through and find correct data from data source using ufoTime
    searchData(correct_format_date);
}


// 2. find date that matches in data.js
function searchData(correct_format_date) {
  var table = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];
  var i;
  for (i = 0; i < tableData.length; i++) { 
    currentDate = tableData[i].datetime;
    
    if (correct_format_date == currentDate) {
      console.log("in conditional" + currentDate);
      var row = table.insertRow(table.rows.length); //

      //insert seven cells into each row within table
      let dateTimeCell = row.insertCell(0);
      let newDate = document.createTextNode(currentDate);
      dateTimeCell.appendChild(newDate);

      let cityCell = row.insertCell(1);
      let newCity = document.createTextNode(tableData[i].city);
      cityCell.appendChild(newCity);

      let stateCell = row.insertCell(2);
      let newState = document.createTextNode(tableData[i].state);
      stateCell.appendChild(newState);

      let countryCell = row.insertCell(3);
      let newCountry = document.createTextNode(tableData[i].country);
      countryCell.appendChild(newCountry);

      let shapeCell = row.insertCell(4);
      let newShape = document.createTextNode(tableData[i].shape);
      shapeCell.appendChild(newShape);

      let durationCell = row.insertCell(5);
      let newDuration = document.createTextNode(tableData[i].durationMinutes);
      durationCell.appendChild(newDuration);
      
      let commentsCell = row.insertCell(6);
      let newComments = document.createTextNode(tableData[i].comments);
      commentsCell.appendChild(newComments);
    }
  }
  
}






