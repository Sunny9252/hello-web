
var result = String(Date());
document.getElementById("result").innerHTML = result + "<br>";
result = Date().toString();
document.getElementById("result").innerHTML += result + "<br>";
var date = new Date(); 			// Date 객체 생성
result = date.getFullYear();
document.getElementById("result").innerHTML += result + "<br>";
result = date.getTime();		// 1970년 1월 1일부터 현재까지의 시간을 밀리초 단위의 숫자로 반환함.
document.getElementById("result").innerHTML += result + "<br>";
result = date.getTimezoneOffset();
document.getElementById("result").innerHTML += result + "<br>";

var days = ["일욜", "월욜", "화욜", "수욜", "목욜", "금욜", "토욜"];
document.write("Today is " + days[date.getUTCDay()] + " in Korean.");
document.write("<br>");

result = date.toLocaleDateString();
document.getElementById("result").innerHTML += result + "<br>";