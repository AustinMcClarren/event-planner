var saveBtn = $(".saveBtn");


//text elements
var hour9am = $("#hour-9");
var hour10am = $("#hour-10");
var hour11am = $("#hour-11");
var hour12pm = $("#hour-12");
var hour1pm = $("#hour-1");
var hour2pm = $("#hour-2");
var hour3pm = $("#hour-3");
var hour4pm = $("#hour-4");
var hour5pm = $("#hour-5");


var schELArray = [
	hour9am,
	hour10am,
	hour11am,
	hour12pm,
	hour1pm,
	hour2pm,
	hour3pm,
	hour4pm,
	hour5pm,
];






//displays date and day on top of page
var timeDisplayEl = $("#currentDay");
function displayTime() {
	var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
	timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);




// For coloring the past, present, and future time blocks
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(dayjs().format("H"));

Array.from(rows).forEach((row) => {
	let rowIdString = row.id,
		rowHour;
	if (rowIdString) {
		rowHour = parseInt(rowIdString);
	}
	if (rowHour) {
		// Compares row id to current hour and sets color accordingly
		if (currentHour === rowHour) {
			setColor(row, "red");
		} else if (currentHour < rowHour && currentHour > rowHour - 6) {
			setColor(row, "green");
		} else if (currentHour > rowHour && currentHour < rowHour + 6) {
			setColor(row, "lightgrey");
		} else {
			setColor(row, "white");
		}
	}
	$(row).children('textarea').val(localStorage.getItem(rowIdString))
});




saveBtn.on("click", function(){
	let key = $(this).parent().attr('id')
	console.log(key);
	let value = $(this).siblings('textarea').val()
	localStorage.setItem(key, value)
	console.log(value);
	console.log(this);
})


