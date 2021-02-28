function updatePhone(val,code) {
	if (code === "Backspace") {return}
	if (val.length === 3 || val.length === 7 || val.length === 12) {
		val += "-"
	}
	document.getElementById("contact-phone").value = val
}

function stripPhone() {
	var cleanphone = ""
	var phone = document.getElementById("contact-phone")
	var phoneval = phone.value
	for (z = 0; z < phoneval.length; z++) {
		if (phoneval[z] === "-") {continue}
		else {
			cleanphone += phoneval[z]
		}
	}
	phone.value = cleanphone
}

function validateForm(){
	stripPhone();
	var frmvalidator = new Validator("contactform");
 	frmvalidator.addValidation("contact-firstname","req","Please enter your First Name");
 	frmvalidator.addValidation("contact-firstname","alpha","Please enter alphabetical characters only");
 	frmvalidator.addValidation("contact-firstname","maxlen=20","Maximum number of characters for First Name is 20");
 	frmvalidator.addValidation("contact-lastname","req","Please enter your Last Name");
 	frmvalidator.addValidation("contact-lastname","alpha","Please enter alphabetical characters Only");
 	frmvalidator.addValidation("contact-lastname","maxlen=50","Maximum number of characters for Last Name is 50");
 	frmvalidator.addValidation("contact-email","req","Please enter your email");
 	frmvalidator.addValidation("contact-email","email","Please enter a proper email address");
 	frmvalidator.addValidation("contact-phone","req","Please enter your phone number");
 	frmvalidator.addValidation("contact-phone","num","Please enter numbers only for phone number");
 	frmvalidator.addValidation("contact-phone","maxlen=15","Maximum number of digits for phone is 15");

 	frmvalidator.addValidation("contact-username","req","Please enter your username");
 	frmvalidator.addValidation("contact-username","maxlen=12","Maximum number of characters for username is 12");
 	frmvalidator.addValidation("contact-password","req","Please enter your password");
 	frmvalidator.addValidation("contact-password","maxlen=7","Maximum number of characters for password is 7");

 	frmvalidator.addValidation("contact-address","req","Please enter your address");
 	frmvalidator.addValidation("contact-city","req","Please enter your city");
 	frmvalidator.addValidation("contact-state","req","Please enter your state");
 	frmvalidator.addValidation("contact-country","req","Please enter your country");

 	if (document.getElementById("contact-country").value === "United States") {
 		frmvalidator.addValidation("contact-zip","maxlen=5","Maximum number of characters for zip is 5");
 	}


}