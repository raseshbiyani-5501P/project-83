var lastpositionofx,lastpositionofy;
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color = "blue";
var width = 5;

n_width=screen.width-200;
n_height=screen.height-400;

if(n_width<=768)
{document.getElementById('myCanvas').width=n_width;
document.getElementById('myCanvas').height=n_height;}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(){
    color=document.getElementById('color').value;
    
    width=document.getElementById('width').value;


    lastpositionofx= e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofy= e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
 cpx=e.touches[0].clientX-canvas.offsetLeft;
 cpy=e.touches[0].clientY-canvas.offsetTop;
 
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
     ctx.moveTo(lastpositionofx,lastpositionofy);
     ctx.lineTo(cpx,cpy);
     ctx.stroke();
    
 
 lastpositionofx=cpx;
 lastpositionofy=cpy;
}

function clrarea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }