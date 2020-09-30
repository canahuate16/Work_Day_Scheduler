//9 AM

var inputVal = document.getElementById("9am").value;
function getInputValue(){ document.getElementById("9am").value;}
var currentTime = moment().format('HH');
var currentTimeinteger = parseInt (currentTime);

//assigning attribute to allow comparison with current time
var rowTimes= $("#9am").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#9am").val(localStorage.getItem('9am Block'));

//color coding based on current time


if (rowTimesInteger < currentTimeinteger) {
    $('#9am').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#9am').css("background-color", "gray")
  } else {
    $('#9am').css("background-color", "green");
  }


//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("9am").value;
//Stores it in local storage
   localStorage.setItem("9am Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#9am").val(localStorage.getItem('9am Block'));
});

//capture current day/time
function getHeaderDate() {
    var currentHeaderDate = moment().format('MMMM Do YYYY, hh:mm:ss a');
    $("#currentDay").text(currentHeaderDate);
}
// loads header date
getHeaderDate();



//10 AM

var inputVal = document.getElementById("10am").value;
function getInputValue(){ document.getElementById("10am").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#10am").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#10am").val(localStorage.getItem('10am Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#10am').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#10am').css("background-color", "gray")
  } else {
    $('#10am').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("10am").value;
//Stores it in local storage
   localStorage.setItem("10am Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#10am").val(localStorage.getItem('10am Block'));
});

//10 AM

var inputVal = document.getElementById("10am").value;
function getInputValue(){ document.getElementById("10am").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#10am").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#10am").val(localStorage.getItem('10am Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#10am').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#10am').css("background-color", "gray")
  } else {
    $('#10am').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("10am").value;
//Stores it in local storage
   localStorage.setItem("10am Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#10am").val(localStorage.getItem('10am Block'));
});


//11 AM

var inputVal = document.getElementById("11am").value;
function getInputValue(){ document.getElementById("11am").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#11am").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#11am").val(localStorage.getItem('11am Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#11am').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#11am').css("background-color", "gray")
  } else {
    $('#11am').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("11am").value;
//Stores it in local storage
   localStorage.setItem("11am Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#11am").val(localStorage.getItem('11am Block'));
});

//12 PM

var inputVal = document.getElementById("12pm").value;
function getInputValue(){ document.getElementById("12pm").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#12pm").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#12pm").val(localStorage.getItem('12pm Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#12pm').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#12pm').css("background-color", "gray")
  } else {
    $('#12pm').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("12pm").value;
//Stores it in local storage
   localStorage.setItem("12pm Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#12pm").val(localStorage.getItem('12pm Block'));
});


//13 PM

var inputVal = document.getElementById("13pm").value;
function getInputValue(){ document.getElementById("13pm").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#13pm").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#13pm").val(localStorage.getItem('13pm Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#13pm').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#13pm').css("background-color", "gray")
  } else {
    $('#13pm').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("13pm").value;
//Stores it in local storage
   localStorage.setItem("13pm Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#13pm").val(localStorage.getItem('13pm Block'));
});


//14 PM

var inputVal = document.getElementById("14pm").value;
function getInputValue(){ document.getElementById("14pm").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#14pm").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#14pm").val(localStorage.getItem('14pm Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#14pm').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#14pm').css("background-color", "gray")
  } else {
    $('#14pm').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("14pm").value;
//Stores it in local storage
   localStorage.setItem("14pm Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#14pm").val(localStorage.getItem('14pm Block'));
});

//15 PM

var inputVal = document.getElementById("15pm").value;
function getInputValue(){ document.getElementById("15pm").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#15pm").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#15pm").val(localStorage.getItem('15pm Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#15pm').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#15pm').css("background-color", "gray")
  } else {
    $('#15pm').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("15pm").value;
//Stores it in local storage
   localStorage.setItem("15pm Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#15pm").val(localStorage.getItem('15pm Block'));
});

//16 PM

var inputVal = document.getElementById("16pm").value;
function getInputValue(){ document.getElementById("16pm").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#16pm").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#16pm").val(localStorage.getItem('16pm Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#16pm').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#16pm').css("background-color", "gray")
  } else {
    $('#16pm').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("16pm").value;
//Stores it in local storage
   localStorage.setItem("16pm Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#16pm").val(localStorage.getItem('16pm Block'));
});


//17 PM

var inputVal = document.getElementById("17pm").value;
function getInputValue(){ document.getElementById("17pm").value;}
//assigning attribute to allow comparison with current time
var rowTimes= $("#17pm").attr ('rowTime');
//converting string of time into an integer
var rowTimesInteger = parseInt(rowTimes);
//Adding to local storage
$("#17pm").val(localStorage.getItem('17pm Block'));

//color coding based on current time

if (rowTimesInteger < currentTimeinteger) {
    $('#17pm').css("background-color", "red"); 
  } else if (rowTimesInteger === currentTimeinteger) {
    $('#17pm').css("background-color", "gray")
  } else {
    $('#17pm').css("background-color", "green");
  }

//captures text value
$(".saveBtn").click(function(getInputValue) {
    getInputValue.preventDefault();
    var inputVal = document.getElementById("17pm").value;
//Stores it in local storage
   localStorage.setItem("17pm Block", inputVal);
//    document.getElementById('entry1').value = localStorage.getItem('entries');
   $("#17pm").val(localStorage.getItem('17pm Block'));
});



