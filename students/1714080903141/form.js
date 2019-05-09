// JavaScript Document
window.onload = function(){
    document.getElementById('login').addEventListener("submit",function(){
       
        var emailObj = document.getElementById("email");
        
        if (emailObj.value == "") {
            alert("您还有输入留言！");
        }else{  
            alert(emailObj.value);
            this.submit(); 
        }
    },false);
}
function f () {
    return false;
}