function sendMessage(){

let name=document.getElementById("name").value;

if(name===""){
alert("Please enter your name");
return false;
}

alert("Message Sent Successfully!");
return false;
}