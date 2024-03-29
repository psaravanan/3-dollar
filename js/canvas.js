function setup()
{


var fov = 250;

var SCREEN_WIDTH = 600; 
var SCREEN_HEIGHT = 300; 

var HALF_WIDTH = SCREEN_WIDTH/2; 
var HALF_HEIGHT = SCREEN_HEIGHT/2; 

var numPoints = 1000; 


function draw3Din2D(point3d)
{  
	x3d = point3d[0];
	y3d = point3d[1]; 
	z3d = point3d[2]; 
	var scale = fov/(fov+z3d); 
	var x2d = (x3d * scale) + HALF_WIDTH;	
	var y2d = (y3d * scale)  + HALF_HEIGHT;
	
	
	c.lineWidth= scale; 
	c.strokeStyle = "rgb(255,255,255)"; 	
	c.beginPath();
	c.moveTo(x2d,y2d); 
	c.lineTo(x2d+scale,y2d); 
	c.stroke(); 
	
}

var canvas = document.getElementById('Canvas2D');
var c = canvas.getContext('2d');

var points = [];

function initPoints()
{
	for (i=0; i<numPoints; i++)
	{
		point = [(Math.random()*400)-200, (Math.random()*400)-200 , (Math.random()*400)-200 ];
		points.push(point); 
	}

}

function render() 
{

	c.fillStyle="rgb(0,0,0)";
  	c.fillRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);
  	
	for (i=0; i<numPoints; i++)
	{
		point3d = points[i]; 
		
		z3d = point3d[2]; 
		z3d-=4; 
		if(z3d<-fov) z3d +=400; 
		point3d[2] = z3d; 
		
		
		draw3Din2D(point3d); 

	}
}

initPoints();

var loop = setInterval(function(){render();}, 50);

}
