$(document).ready(function(){
    function isLeapYear(year) {
        if ((year % 4 === 0) && (year % 100) || (year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    }

    var yearOption1 = isLeapYear(1993);
    var yearOption2 = isLeapYear(2004);
    var yearOption3 = isLeapYear(1900);
    var yearOption4 = isLeapYear(2000);
    var yearOption5 = isLeapYear(2020);

 console.log(yearOption1, yearOption2, yearOption3, yearOption4, yearOption5)
});

