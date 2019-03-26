function changeColor(){
	for(i=0 ; i<4 ; i++){
		if(form1.color[i].checked){
			document.body.style.background = form1.color[i].value;
		}
	}
}

function isNull(){
	var str = document.getElementById("text").value;
	
		if(str == null || str == ""){
			alert("留言为空，请重新输入!");
			return false;
		}else{
			alert("感谢您的留言~~")
			return true;
		}
}

