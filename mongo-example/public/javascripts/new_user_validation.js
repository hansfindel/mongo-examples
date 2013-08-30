function getSubmitButton(){
	return document.getElementById("newUserSubmit").childNodes[0];
}
function check(e){
	var missing = []	
	divs = document.getElementsByClassName("field")	
	for(var i = 0; i < divs.length; i++){
		var div = divs[i]
		label = div.childNodes[0]
		input = div.childNodes[1]
		if(input.value==""){
			var name = label.textContent
			missing.push(name)
		}
	}
	if(missing.length > 0){
		alert("Debes rellenar todos los campos. \nRevisa: " + missing.join(", ") )
		return false;			
	}else{
		return true;
	}
}

getSubmitButton().onclick = check;
getSubmitButton().onsubmit = check;