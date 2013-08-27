$(document).ready(function(){
	$("#new_user input#submit").click(function(e){	
		var missing = []
		$("#new_user .field input").each(function(i, element){
			if(element.value == ""){
				e.preventDefault();
				parent = $(element).parent()
				var name = $(parent.children("label")).text()
				missing.push(name);
			}
		})
		if(missing.length > 0){
			alert("Debes rellenar todos los campos. \nRevisa: " + missing.join(", ") )
			return false;			
		}else{
			return true;
		}
	})
})