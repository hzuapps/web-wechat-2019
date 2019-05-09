/**
 * Created by Administrator on 2019/3/24.
 */
window.onload = function(){
    document.getElementById('loginForm').addEventListener("submit",function(e){
        console.log(e);
        var emailObj = document.getElementById("liuyan");
        if (emailObj.value == "") {
            alert("您还没有输入内容，无法留言！");
            if (e && e.preventDefault) {
                e.preventDefault();
            }else{
                window.event.returnValue= false;
            }
        }else{
            alert(emailObj.value);
        }
    },false);
};
function submit () {
    return false;
}