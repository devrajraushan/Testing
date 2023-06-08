
function sign(){
	var username = document.getElementById("user").value;
	var password = document.getElementById("password").value;
	var email_id = document.getElementById("email").value;
	var phone_number = document.getElementById("phone").value;
	var final = document.getElementById("result");
	if(username!="" && password!="" && email_id!="" &&phone_number!="")
	{	
	var mydata = {username:username,
				  password:password,
				  email:email_id,
				  phone:phone_number
				};

     var store = JSON.stringify(mydata);
     localStorage.setItem(email_id,store);
	final.setAttribute("class","alert alert-info");
    var para = document.createElement("STRONG");
    var text = document.createTextNode("success");
    para.appendChild(text);
    final.appendChild(para);
    document.getElementById("user").value="";
    document.getElementById("password").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
	setTimeout(function(){final.removeAttribute("class");para.remove();},2000);	

}

else{
	final.setAttribute("class","alert alert-danger");
    var para = document.createElement("STRONG");
    var text = document.createTextNode("empty field");
    para.appendChild(text);
    final.appendChild(para);
	setTimeout(function(){final.removeAttribute("class");para.remove();},2000);
}
return false;

}