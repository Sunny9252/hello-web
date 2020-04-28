//Browser의 language
var lang = navigator.language;
document.write(lang, "<br>");

//Browser의 user agent
var agents = navigator.userAgent;
document.write(agents, "<br>");

if (lang == "en-US") {
  
  document.write("Hi", "<br>"); 
}

//출처: https://www.w3schools.com/js/js_window_navigator.asp
