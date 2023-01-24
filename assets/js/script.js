var now = moment();
$("#currentDay").text(now.format("dddd, MMMM Do"));


let timeBlockEl = $("#time-block");

timeBlockEl.addClass("present");