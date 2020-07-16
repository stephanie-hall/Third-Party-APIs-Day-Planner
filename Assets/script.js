$(document).ready(function () {

    // display current day/time on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentTime").text(moment().format("LTS"));

    // Save events in time slot
    $(".saveBtn").on("click", function () {
        let textContent = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, textContent);
    });

    function hours() {

        // Show past, present, and future times relative to current time
        $(".time-block").each(function () {
            let timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

            if (currentTime > timeBlockHour) {
                $(this).removeClass("present");
                $(this).addClass("past");
                $(this).removeClass("future");

            } else if (currentTime === timeBlockHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");

            } else {
                $(this).addClass("future");
            }
        })
    }

    // Use local storage to save events
    hours();
    let interval = setInterval(hours, 15000);
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

})