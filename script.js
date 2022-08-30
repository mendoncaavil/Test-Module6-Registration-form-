function validate(){
    let firstName = document.getElementById("first_name").value; 
    let lastName = document.getElementById("last_name").value;
    let emailId = document.getElementById("email-Id").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let batchNumber = document.getElementById("batchNumber").value;
    let currentModule = document.getElementById("currentModule").value;
    let tnc = document.getElementById("invalidCheck").checked;


    let error = false;

    if(firstName.length >= 3){
        document.getElementById("firstName-Valid").style.display = "block";
        document.getElementById("firstName-Invalid").style.display = "none";
    }
    else{
        document.getElementById("firstName-Valid").style.display = "none";
        document.getElementById("firstName-Invalid").style.display = "block";
        error = true
    }


    if(lastName.length >= 3){
        document.getElementById("lastName-Valid").style.display = "block";
        document.getElementById("lastName-Invalid").style.display = "none";
    }
    else{
        document.getElementById("lastName-Valid").style.display = "none";
        document.getElementById("lastName-Invalid").style.display = "block";
        error = true
    }

    if(emailId && emailId.includes("@") && emailId.includes(".") && emailId.lastIndexOf(".")<=emailId.length-3 && emailId.indexOf("@")!=0){
        document.getElementById("emailID-valid").style.display = "block";
        document.getElementById("emailID-Invalid").style.display = "none";
    }
    else{
        document.getElementById("emailID-valid").style.display = "none";
        document.getElementById("emailID-Invalid").style.display = "block";
        error = true;
    }

    if(phoneNumber.length == 10){
        document.getElementById("phoneNo-valid").style.display = "block";
        document.getElementById("phoneNo-Invalid").style.display = "none";
    }
    else{
        document.getElementById("phoneNo-valid").style.display = "none";
        document.getElementById("phoneNo-Invalid").style.display = "block";
        error = true;
    }

    if(batchNumber){
        document.getElementById("batchNo-valid").style.display = "block";
        document.getElementById("batchNo-Invalid").style.display = "none";
    }else{
        document.getElementById("batchNo-valid").style.display = "none";
        document.getElementById("batchNo-Invalid").style.display = "block";
        error = true;
    }

    if(currentModule){
        document.getElementById("Module-valid").style.display = "block";
        document.getElementById("Module-Invalid").style.display = "none";
    }else{
        document.getElementById("Module-valid").style.display = "none";
        document.getElementById("Module-Invalid").style.display = "block";
        error = true;
    }

    if(tnc){
        document.getElementById("invalidtnc").style.display = "none";

    }
    else{
        document.getElementById("invalidtnc").style.display = "block";
        error = true;
    }

    if(!error){
        alert("Your Details have been saved successfully");
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("emailId").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("batchNumber").value = "";
        document.getElementById("currentModule").value = "";
        document.getElementById("tnc").checked = false;


        document.getElementById("firstName-Valid").style.display = "";
        document.getElementById("lastName-Valid").style.display = "";
        document.getElementById("emailID-valid").style.display = "";
        document.getElementById("phoneNo-valid").style.display = "";
        document.getElementById("batchNo-valid").style.display = "";
        document.getElementById("Module-valid").style.display = "";
        document.getElementById("tnc_Invalid").style.display = "";
    }
}