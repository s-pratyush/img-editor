

let obj={								//global object to save styles
	blur:0,
	opacity:100,
	sat:1,
	gscale:1,
	bright:100,
	magic:10,
	saturate:1,
	contrast:100
};

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
	var v=document.getElementById("v").style.border="none";
	var it=document.getElementById("it").innerHTML=" ";
	v.style.backgroundColor="black";
	obj={								//global object to save styles
		blur:0,
		opacity:100,
		sat:1,
		gscale:1,
		bright:100,
		magic:10,
		saturate:1,
		contrast:100
	};
	
};
function blr(){

   var sl1=document.getElementById("sl1");
   var s1=sl1.valueAsNumber;
  
   obj.blur=s1;
   document.getElementById('output').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";

//    console.log(obj.blur);
}

function op(){
	// var document.getElementById('output')=document.getElementById('output');
    var sl2=document.getElementById("sl2");
   var s2=sl2.valueAsNumber;

   obj.opacity=s2;
   document.getElementById('output').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";

//    console.log(obj);
}

/* Figure out a good way of adding styles */

// function sat(){
	
// 	var sl3=document.getElementById("sl3");
// 	var s3=sl3.valueAsNumber;

// 	obj.sat=s3;
// 	document.getElementById('output').style.filter="blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
// 	// console.log(obj.sat);
 
// }

function gscale(){
	var sl4=document.getElementById("sl4");
	var s4=sl4.valueAsNumber;

	obj.gscale=s4;
	document.getElementById('output').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
	
	// console.log(obj.gscale);
}

function bri(){
	var sl5=document.getElementById("sl5");
	var s5=sl5.valueAsNumber;

	obj.bright=s5;
	document.getElementById('output').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";

	// console.log(obj.bright);
}



/* Figure out a good way of adding styles */

// function magic(){
// 	var sl6=document.getElementById("sl6");
// 	var s6=sl6.valueAsNumber;
// 	obj.magic=s6;
// 	document.getElementById('output').style.filter="blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";

// 	// console.log(obj.magic);

// }

function tmp(){
	var sl7=document.getElementById("sl7");
	var s7=sl7.valueAsNumber;
	obj.saturate=s7;
	document.getElementById('output').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
	// console.log(obj.saturate);


}

function con(){
	var sl8=document.getElementById("sl8");
	var s8=sl8.valueAsNumber;

	obj.contrast=s8;
	document.getElementById('output').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
	// console.log(obj.contrast);
}

// For Saving option
function printDiv(divName) {
	var printContents = document.getElementById(divName).innerHTML;
	var originalContents = document.body.innerHTML;

	// Append only desired content to body
	document.body.innerHTML = printContents;

	window.print();
	// Append origial content to body
	document.body.innerHTML = originalContents;
}