var currentTime = moment().format("MMM Do, YYYY, hh:mm:ss");
//localStorage.removeItem("calanderToDo");

//addd time
$("#date-time").text(currentTime);
var timeInterval = null;
var timeLeft = 60;
countdown();
workskedule = [];
var storedDayCalander = JSON.parse(localStorage.getItem("calanderToDo"));
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
  //alert("Will loop here if data in array")
}
// Return the hour, according to local time
var d = new Date();
var n = d.getHours();
// Call functions

var result = []; // Results will go here
var nowHour = new Date().getHours(); // Get current hour of the day
var timeValue;


var tableBody = document.getElementById("repo-table");

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
    if (i < nowHour) {
      createTableRow.className = "past";
    } else if (i === nowHour) {
      console.log(i);
      console.log(nowHour);
      createTableRow.className = "present";
    } else if (i > nowHour) {
      createTableRow.className = "future";
    }
    // Setting the text of link and the href of the link
    tableDataTime.textContent = data[i].hoursampm;
    tableDataTime.className = "hour";
    textarea.textContent = data[i].tododesc;
    tableDataTodotask.className = "textarea";
    createTableRow.appendChild(tableDataTime);
    tableBody.appendChild(createTableRow);

    // tableData.appendChild(tableDataTodotaske);
    tableDataTodotask.appendChild(textarea);
    createTableRow.appendChild(tableDataTodotask);
    tableBody.appendChild(createTableRow);

    tableDatatasksave.appendChild(button);
    button.appendChild(btnImage);
    createTableRow.appendChild(tableDatatasksave);
    tableBody.appendChild(createTableRow);
    button.addEventListener("click", function (event) {
 // Create each row's selection to easily choose the appropriate square
// `eq(0)` or `first()` is the `<h1>`
      var row = $(this).parent().parent().children().eq(1).children();
      var prow = $(this).parent().parent();
      console.log(row[0].value);
      console.log(prow[0].rowIndex);
      console.log(workskedule[0].tododesc);
      workskedule[prow[0].rowIndex -1].tododesc = row[0].value
      console.log(workskedule[prow[0].rowIndex -1]);
      localStorage.removeItem("calanderToDo");
      localStorage.setItem("calanderToDo", JSON.stringify(workskedule));

      });
    textarea.addEventListener("change", function (event) {
      var row = $(this).parent().parent();
      var rowIndex = $(row[0].rowIndex);
      
      console.log(row[0]);
      //alert(document.getElementById("repo-table").rows.item(rowIndex[0]).innerHTML);
      // workskedule[rowIndex[0]].tododesc= this.value;
      // localStorage.removeItem("calanderToDo");
      // localStorage.setItem("calanderToDo", JSON.stringify(workskedule))
    //this.textContent = this.value;
    //dayCalander();
    
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

dayCalander();
