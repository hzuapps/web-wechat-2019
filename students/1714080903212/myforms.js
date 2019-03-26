function myforms(){
	var x=document.getElementById("info").value;
	if(x===""||x===null)
		{
			alert("留言内容为空，请输入留言内容！");
			return false;
		}
	else{
		alert("提交成功！");
		return true;
	}
}
// JavaScript Document// JavaScript Document