

var currentTime = moment().format("MMM Do, YYYY, hh:mm:ss");

//addd time 
$("#date-time").text(currentTime);
var timeInterval = null;
var timeLeft = 60;
countdown() ;
workskedule = [];
// Return the hour, according to local time
var d = new Date();
var n = d.getHours();
console.log(n);
// Call functions 
for (var i = 6; i < 23; i++) 
{
 
  workskedule.push ({ hour: i , tododesc: "Go to dentist", Button: "<button class = \"saveBtn\" ><i class=\"fas fa-save\"></i></button>"});
}



// this is the code we need to loop for the come work and our stored value to the table on html.

var tableBody = document.getElementById('repo-table');
//var fetchButton = document.getElementById('fetch-button');

function getApi() {
 
  var data = workskedule ;

    
      console.log(workskedule);

      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        console.log( data[i].hour);
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableDataTime = document.createElement('td');
        var tableDataTodotask = document.createElement('td');
        var tableDatatasksave = document.createElement('td');
        var button = document.createElement('button');
        var btnImage = document.createElement('i');
        button.className = "saveBtn";
        btnImage.className = "fas fa-save";
        // Setting the text of link and the href of the link
        tableDataTime.textContent = data[i].hour;
        tableDataTodotask.textContent = data[i].tododesc;
       // tableDatatasksave.textContent = data[i].Button;
      //  link.textContent = data[i].;
      //  link.href = data[i].html_url;
//
        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
       // tableData.appendChild(tableDataTime);
        createTableRow.appendChild(tableDataTime);
        tableBody.appendChild(createTableRow);

       // tableData.appendChild(tableDataTodotaske);
        createTableRow.appendChild(tableDataTodotask);
        tableBody.appendChild(createTableRow);

        tableDatatasksave.appendChild(button);
        button.appendChild(btnImage);
        createTableRow.appendChild(tableDatatasksave);
        tableBody.appendChild(createTableRow);
      }

}


//Timer for game
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      currentTime = moment().format("MMM Do, YYYY, hh:mm:ss");
      $("#date-time").text(currentTime);;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      timeLeft = 60;
    }
  }, 1000);
}


getApi();
//<td><button class = "saveBtn" ><i class="fas fa-save"></i></button></td>
//fetchButton.addEventListener('click', getApi);