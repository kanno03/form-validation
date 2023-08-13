
function formValidation()
{
var fname = document.registration.fname.value;
var lname = document.registration.lname.value;
var password = document.registration.password.value;
var password2 = document.registration.password2.value;
var address = document.registration.address.value;
var city = document.registration.city.value;
var email = document.registration.email.value;
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");  


if (fname==null || fname==""){  
    alert(" First Name can't be blank");  
    return false; }

else if (lname==null || lname==""){  
    alert("Last Name can't be blank");  
    return false; }

else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    alert("Please enter a valid e-mail address");  
    return false;  } 

else if (address==null || address==""){  
    alert("Address can't be blank");  
    return false;}

else if (city==null || city==""){  
    alert("City can't be blank");  
    return false;}

else if (password==null || password==""){  
    alert("Password can't be blank");  
    return false; }
    
else if(password.length<8){  
    alert("Password must be at least 8 characters long.");  
    return false; } 

           
if(password==password2){  
        return true; }    
else{  
     alert("password must be same!");  
        return false;}
}
function success(){
alert("successs");

}
