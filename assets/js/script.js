/**
* Name: Eloy Gonzalez
* Date: 03/17/2021
* Description:
 This week’s homework requires me create a simple calendar application that allows
  a user to save events for each hour of the day by modifying starter code. This app will run in the browser and 
  feature dynamically updated HTML and CSS powered by jQuery. Still learning jquery but try to add as much as I can with impacting
  my deliverable and meet the requirements. Been working the past week what we have learned on working with API's. I worked in what we have practice. 
  Very excited what was I working with DOM traversing with this project and getting to work with tables !!
*/

/**Decalared Variables
 * I used the document method querySelector() user moment to get data and working timer intervals to get secound loopthrew.
 * Below I define the workskedule array and localstorage. Also add a condition validate if array is empty get local storage 
 * and if it not yet been created generate new data for array and then update local storage.
 */
//Used moments and requested
var currentTime = moment().format("MMM Do, YYYY, hh:mm:ss");
var timeInterval = null;
var timeLeft = 60;
var result = []; // Results will go here
var nowHour = new Date().getHours(); // Get current hour of the day
var timeValue;
var tableBody = document.getElementById("repo-table");
var storedDayCalander = JSON.parse(localStorage.getItem("calanderToDo"));


workskedule = [];

//set moment date time on header
$("#date-time").text(currentTime);
//run timer function to loop threw run seconds from moments




//if array is empty after checking for local storage if empty create data for array for day time.
if (workskedule == null || workskedule.length === 0) {
  var retrievedData = localStorage.getItem("calanderToDo");
  if (retrievedData == null) {
    // Loop from current hour number to 23
      for (var i = 0; i < 25; i++) {
        var hours = i;
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        timeValue = hours + " " + ampm;
        workskedule.push({
          hoursampm: timeValue,
          tododesc: "",
          hour: i,
        });
      }
  } 
  else 
  {
    workskedule = JSON.parse(retrievedData);
  }
} 
else 
{
  //added is if needed in the future
}

//Calander adding row with data in array , adding class for past 
//present,future color , adding task , save and storage change in array and local storage.
function dayCalander() {
  var data = workskedule;

  //Loop over the data to generate a table, each table row will have a link to the repo url
  for (var i = 0; i < data.length; i++) {

    // Creating elements, tablerow, tabledata, and anchor
    var createTableRow = document.createElement("tr");
    var tableDataTime = document.createElement("td");
    var tableDataTodotask = document.createElement("td");
    var tableDatatasksave = document.createElement("td");
    var button = document.createElement("button");
    var textarea = document.createElement("textarea");
    textarea.id = "description" + i;
    var btnImage = document.createElement("i");
    button.className = "saveBtn";
    btnImage.className = "fas fa-save";
    //add classes for css change color
    if (i < nowHour) {
      createTableRow.className = "past";
    } else if (i === nowHour) {
      createTableRow.className = "present";
    } else if (i > nowHour) {
      createTableRow.className = "future";
    }
    //create row for table and td for hour, todo details and button
    tableDataTime.textContent = data[i].hoursampm;
    tableDataTime.className = "hour";
    textarea.textContent = data[i].tododesc;
    tableDataTodotask.className = "textarea";
    createTableRow.appendChild(tableDataTime);
    tableBody.appendChild(createTableRow);

    tableDataTodotask.appendChild(textarea);
    createTableRow.appendChild(tableDataTodotask);
    tableBody.appendChild(createTableRow);

    tableDatatasksave.appendChild(button);
    button.appendChild(btnImage);
    createTableRow.appendChild(tableDatatasksave);
    tableBody.appendChild(createTableRow);
    //click event for button getting the data for tododesc was pretty tricky but figured it out,
    button.addEventListener("click", function (event) {
      // used jquery as requested
      var row = $(this).parent().parent().children().eq(1).children();
      var prow = $(this).parent().parent();
      //left these consol call do to they help a lot
     // console.log(row[0].value);
     // console.log(prow[0].rowIndex);
     // console.log(workskedule[0].tododesc);
      workskedule[prow[0].rowIndex -1].tododesc = row[0].value
      console.log(workskedule[prow[0].rowIndex -1]);
      localStorage.removeItem("calanderToDo");
      localStorage.setItem("calanderToDo", JSON.stringify(workskedule));

      });

  }
}

function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      currentTime = moment().format("MMM Do, YYYY, hh:mm:ss");
      $("#date-time").text(currentTime);
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      timeLeft = 60;
    }
  }, 1000);
}

//call functions
countdown();
dayCalander();