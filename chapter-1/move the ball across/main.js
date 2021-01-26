var ball = document.getElementById('ball');
var field = document.getElementById('field');


field.addEventListener('click', mouseClicked);

function mouseClicked (event){
  var xposition = (event.clientX - ball.offsetLeft - ball.offsetWidth/2);
  var yposition = (event.clientY - ball.offsetTop - ball.offsetHeight/2);
  ball.style.transform = "translate("+ xposition + "px," + yposition + "px)";
  console.log(event);
}
