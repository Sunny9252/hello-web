var height = 180;
var weight = 74;
var ideal_figure;
var diff;
ideal_figure = (height - 100) * 0.9;
diff = weight - ideal_figure;
var result;

result =
    "적정 체중은 " +
    ideal_figure +
    "kg이며, 현재 적정 체중에서 " +
    diff +
    "kg 초과한 것을 알 수 있습니다.";
document.write(result, "<br>");
