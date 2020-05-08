  //function to display image 
  var loadFile = function(event) {
    var image = document.getElementById('output_image');
    image.src = URL.createObjectURL(event.target.files[0]);
	document.getElementById("inner_text").innerText="";
	document.getElementById("conatainer")
    document.getElementById("view_box").style.border="none";
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

//function to set blur effect
function set_blur(){
var blur_val=document.getElementById("blur_tool").valueAsNumber;
obj.blur=blur_val;
document.getElementById('output_image').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";

//    console.log(obj.blur);
};

// function to set contrast
function set_contrast(){
    var contrast_val=document.getElementById("contrast_tool").valueAsNumber;
	obj.contrast=contrast_val;
	document.getElementById('output_image').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
	// console.log(obj.contrast);
};

//function to set saturation tool
function set_saturation() {
    var saturation_val=document.getElementById("saturation_tool").valueAsNumber;
	obj.saturate=saturation_val;
	document.getElementById('output_image').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
	// console.log(obj.saturate);

};

//Function to set opacity
function set_opacity() {
    var opacity_val=document.getElementById("opacity_tool").valueAsNumber;
	obj.opacity=opacity_val;
	document.getElementById('output_image').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
	// console.log(obj.saturate);

};

//Function to set brightness
function set_brightness() {
    var brightness_val=document.getElementById("brightness_tool").valueAsNumber;
	obj.bright=brightness_val;
	document.getElementById('output_image').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
	// console.log(obj.saturate);

};

function set_grayscale() {
    var grayscale_val=document.getElementById("grayscale_tool").valueAsNumber;
	obj.gscale=grayscale_val;
	document.getElementById('output_image').style.filter="contrast("+obj.contrast+"%) blur("+obj.blur+"px) opacity("+obj.opacity+"%) grayscale("+obj.gscale+"%) brightness("+obj.bright+"%) saturate("+obj.saturate+")";
	// console.log(obj.saturate);

};

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

