function changeColor(){
	for(i = 0; i<4; i++)
	if (form1.color[i].checked){
		document.body.style.background = form1.color[i].value;
	}
}
function checkIP(){//js表单验证方法
   var text=document.getElementById("url").value;//通过id获取需要验证的表单元素的值
   if(text==""){//当上面获取的值为空时
     alert("不能为空哦！");//弹出提示
     return false;//返回false（不提交表单）
   }
   return true;//提交表单
}
function hire(){
	alert("聘用消息已发送！")
}