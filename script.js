var image;
var loadFile = function(event) {
	 image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
	var v=document.getElementById("v").style.border="none";
	var it=document.getElementById("it").innerHTML=" ";
	v.style.backgroundColor="black";
	
};
function blr(){
   var sl1=document.getElementById("sl1");
   var s1=sl1.valueAsNumber;
   image.style.filter="blur("+s1+"px)";
}

function op(){
    var sl2=document.getElementById("sl2");
   var s2=sl2.valueAsNumber;
   image.style.filter="opacity("+s2+"%)";	
}


function sat(){
	var sl3=document.getElementById("sl3");
	var s3=sl3.valueAsNumber;
	image.style.filter="sepia("+s3/10+0.7+")";
	image.style.filter="contrast("+s3/10+1.1+")";
	image.style.filter="saturate("+s3/10+1.9+")";
	image.style.filter="grayscale("+s3/10+0.3+")";

 
}

function gscale(){
	var sl4=document.getElementById("sl4");
	var s4=sl4.valueAsNumber;
	image.style.filter="grayscale("+s4+"%)";	

}

function bri(){
	var sl5=document.getElementById("sl5");
	var s5=sl5.valueAsNumber;
	image.style.filter="brightness("+s5+"%)";	
                                
}





function magic(){
	var sl6=document.getElementById("sl6");
	var s6=sl6.valueAsNumber;
	image.style.filter="brightness("+s6+"%)";
	image.style.filter="contrast("+s6*5+"%)";
	image.style.filter="saturate("+s6/10+")";

}
function tmp(){



	var sl3=document.getElementById("sl7");
	var s7=sl7.valueAsNumber;
	image.style.filter="saturate("+s7+")";	



}

function con(){
	var sl8=document.getElementById("sl8");
	var s8=sl8.valueAsNumber;
	image.style.filter="contrast("+s8+"%)";	
                                
}