window.onload = function(){
				
				var Form = document.getElementById("Form");
				Form.addEventListener("submit",function(){
					var Text = document.getElementsByTagName("textarea")[0];
					if(Text.value == ""){
						alert("您还没有输入留言内容！留言失败！");
					}else{
						alert("留言成功！");
						this.submit();
					}
				},false); 
				function f() {
				    return false;
				};
						
				function fun(id1,id2){
					if(id2.style.display == "none")
						id2.style.display = "";
					else id2.style.display = "none";
				
				};
				
				var contact = document.getElementById("contact");
				var list = document.getElementById("list");
				var close2 = document.getElementById("close2");
				contact.onclick = function () {
					if(close2.innerHTML == "收起")
						close2.innerHTML = "展开";
					else close2.innerHTML = "收起";
					fun(contact,list);
				};
			
				var study = document.getElementById("study");
				var school = document.getElementById("school");
				var close1 = document.getElementById("close1");
				study.onclick = function () {
					if(close1.innerHTML == "收起")
						close1.innerHTML = "展开";
					else close1.innerHTML = "收起";
					fun(study,school);
					
				};
				
				var introduce = document.getElementById("introduce");
				var descript = document.getElementById("descript");
				var close3 = document.getElementById("close3");
				introduce.onclick = function(){
					if(close3.innerHTML == "收起")
						close3.innerHTML = "展开";
					else close3.innerHTML = "收起";
					fun(introduce,descript);
				};
				
				var work = document.getElementById("work");
				var experience = document.getElementById("experience");
				var class4 = document.getElementById("close4");
				work.onclick = function(){
					if(close4.innerHTML == "收起")
						close4.innerHTML = "展开";
					else close4.innerHTML = "收起";
					fun(work,experience);
				};
				
				var box = document.getElementById("box");
				var set = document.getElementById("set");
				var content = document.getElementById("content");
				var btn = document.getElementById("btn");
				var showTooltips= document.getElementById("showTooltips");
				var reset1 = document.getElementById("reset1");
				var text2 = document.getElementById("text2");
				var text1 = document.getElementsByTagName("textarea")[0];
				set.onclick = function(){
					box.style.display = "block";			
					content.style.background = "darkgray";
					content.style.color = "ghostwhite";
					btn.style.background = "darkgray";
				};
				btn.onclick = function(){
					box.style.display = "none";
				};
				
	
				var blue = document.getElementById("blue");	
				blue.onclick = function(){
					document.body.style.color= "rgba(75,0,130,0.8)";
					document.body.style.background = "skyblue";
					text1.style.backgroundColor = "gainsboro ";
					text2.style.backgroundColor = "gainsboro";
					showTooltips.style.backgroundColor = "rgba(75,0,130,0.5)";
					reset1.style.backgroundColor = "rgba(75,0,130,0.5)";
					
				};
				
				var white = document.getElementById("white");
				white.onclick = function(){
					document.body.style.color= "black";
					document.body.style.background = "white";
					text1.style.background = "white";
					text2.style.background = "white";
					showTooltips.style.backgroundColor = "rgba(34,175,34,1)";
					reset1.style.backgroundColor = "rgba(34,175,34,1)";
					text1.style.backgroundColor = "white";
				};
				
				var black = document.getElementById("black");			
				black.onclick = function(){					
					document.body.style.color= "white";
					document.body.style.background = "rgba(0,0,0,0.9)";	
					showTooltips.style.backgroundColor =  "rgba(0,0,0,0.3)";
					reset1.style.backgroundColor =  "rgba(0,0,0,0.3)";
					text1.style.backgroundColor = "rgba(0,0,0,1)";
					text2.style.backgroundColor = "rgba(0,0,0,1)";
				};
			};
