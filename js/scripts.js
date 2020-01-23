$(document).ready(function(){
    function isLeapYear(year) {
        if ((year % 4 === 0) && (year % 100) || (year % 400 === 0)) {
            return "true";
        } else {
            return "false";
        }
    }
    $("#submitBtn").click(function(event) {
        event.preventDefault();
        var year = parseInt($("#year").val());
        var checkYear = isLeapYear(year)
        $("#results").text(checkYear)
        console.log(checkYear)
    })
});

