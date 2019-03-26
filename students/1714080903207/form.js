
window.onload = function(){  
    document.getElementById('textForm').addEventListener("submit",function(){
        
        var textObj = document.getElementById("textfield");
        
        if (textObj.value == "") {
            alert("您还没有输入留言");
        }else{  
            alert("提交成功");
        }
    },false);
}
