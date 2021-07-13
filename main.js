var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
width_of_line=document.getElementById("width").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_x=e.clientX - canvas.offsetLeft;
current_position_of_y=e.clientY - canvas.offsetTop;
if(mouseEvent=="mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(current_position_of_x, current_position_of_y, 20 ,0 , 2 * Math.PI);
    ctx.stroke();
}

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseleave";
}
function clear()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}