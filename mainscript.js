document.onload = mainFunction();

function loadFiles(){
	var obekt = new XMLHttpRequest();
	obekt.open("GET", "file/obekt.txt", true);
	obekt.send();
	var mash = new XMLHttpRequest();
	mash.open("GET", "file/mash.txt", true);
	mash.send();
	var plob = new XMLHttpRequest();
	plob.open("GET", "file/PLOB.TXT", true);
	plob.send();
	var platki = new XMLHttpRequest();
	platki.open("GET", "file/platki.txt", true);
	platki.send();
	obekt.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("test").innerHTML = this.responseText;
		}
	};
	
		
}

function mainFunction(){
	if(window.File && window.FileReader && window.FileList && window.Blob){
		loadFiles();
		//load will be successfull
		//alert("load successfull");
	} else {
		alert("Your browser might not support the File APIs");
	}
	
}