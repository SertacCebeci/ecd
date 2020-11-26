var lec1 = document.getElementById("lec1");
var lec2 = document.getElementById("lec2");

var book1 = document.getElementById("book1");
var book2 = document.getElementById("book2");
var book3 = document.getElementById("book3");
var book4 = document.getElementById("book4");

var endch1 = document.getElementById("endch1");
var endch2 = document.getElementById("endch2");
var endch3 = document.getElementById("endch3");
var endch4 = document.getElementById("endch4");

var endch5 = document.getElementById("endch5");
var endch6 = document.getElementById("endch6");
var endch7 = document.getElementById("endch7");
var endch8 = document.getElementById("endch8");




var lec1_time = new Date("November 27 2020 23:00");
var lec2_time = new Date("November 28 2020 23:00");

var book1_time = new Date("November 29 2020 23:00");
var book2_time = new Date("November 30 2020 23:00");
var book3_time = new Date("December 1 2020 23:00");
var book4_time = new Date("December 2 2020 23:00");

var endch1_time = new Date("December 3 2020 23:00");
var endch2_time = new Date("December 4 2020 23:00");
var endch3_time = new Date("December 5 2020 23:00");
var endch4_time = new Date("December 6 2020 23:00");

var endch5_time = new Date("December 7 2020 23:00");
var endch6_time = new Date("December 8 2020 23:00");
var endch7_time = new Date("December 9 2020 23:00");
var endch8_time = new Date("December 10 2020 23:00");

var current = new Date();


var timer = setInterval( () => {
    current = new Date();

    lec1.innerHTML = "Lesson Videos (1): " + msToTime(lec1_time - current);
    lec2.innerHTML = "Lesson Videos (2): " + msToTime(lec2_time - current);

    book1.innerHTML = "Book Read and Solve (1): " + msToTime(book1_time - current);
    book2.innerHTML = "Book Read and Solve (2): " + msToTime(book2_time - current);
    book3.innerHTML = "Book Read and Solve (3): " + msToTime(book3_time - current);
    book4.innerHTML = "Book Read and Solve (4): " + msToTime(book4_time - current);

    endch1.innerHTML = "Book Read and Solve (1): " + msToTime(endch1_time - current);
    endch2.innerHTML = "Book Read and Solve (2): " + msToTime(endch2_time - current);
    endch3.innerHTML = "Book Read and Solve (3): " + msToTime(endch3_time - current);
    endch4.innerHTML = "Book Read and Solve (4): " + msToTime(endch4_time - current);

    endch5.innerHTML = "Book Read and Solve (1): " + msToTime(endch5_time - current);
    endch6.innerHTML = "Book Read and Solve (2): " + msToTime(endch6_time - current);
    endch7.innerHTML = "Book Read and Solve (3): " + msToTime(endch7_time - current);
    endch8.innerHTML = "Book Read and Solve (4): " + msToTime(endch8_time - current);

}, 1000)



function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)))


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return seconds > -1 ? `${hours} : ${minutes} : ${seconds}` : "Passed"
}