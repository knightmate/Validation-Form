const userData={

}

function showError(conteinerParentNode, errorMessage) {
	conteinerParentNode.className = 'error';
	var spanElem = document.createElement('span');
	spanElem.className = "error-message";
	spanElem.innerHTML = errorMessage;
	conteinerParentNode.appendChild(spanElem);
}

function resetError(conteinerParentNode) {
	conteinerParentNode.className = '';
	if (conteinerParentNode.lastChild.className == "error-message") {
		conteinerParentNode.removeChild(conteinerParentNode.lastChild);
	}
}

function validate(form) {
	var elems = form.elements;
	var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

		resetError(elems.firstname.parentNode);

		 

		if(validateName(elems.firstname.value)==false){
			showError(elems.firstname.parentNode, 'Only Alphabet allowed');
			return false;
		}
		else
		if (!elems.firstname.value) {
			showError(elems.firstname.parentNode, ' Please enter your first name.');
			return false;
		}
		else if (elems.firstname.value.length < 3 ) {
			showError(elems.firstname.parentNode, ' At least 3 characters.');
			return false;
		}

		resetError(elems.lastname.parentNode);
		if(!validateName(elems.lastname.value)){
			showError(elems.lastname.parentNode, ' Only Alphabet allowed');
			return false;
		
		}else
		if (!elems.lastname.value) {
			showError(elems.lastname.parentNode, ' Please enter your last name.');
			return false;
		}
		else if (elems.lastname.value.length < 3 ) {
			showError(elems.lastname.parentNode, ' At least 3 characters.');
			return false;
		}

		resetError(elems.email.parentNode);
		resetError(elems.mobile.parentNode);
		resetError(elems.password.parentNode);
		resetError(elems.lastname.parentNode);
		if(!elems.lastname.value) {
			showError(elems.email.parentNode, ' Please enter LastName');
			return false;
		}
		if(!elems.email.value ) {
			showError(elems.email.parentNode, ' Please enter your Email.');
			return false;
		}
		 
		else if (!regEmail.test(elems.email.value) == true){
			showError(elems.email.parentNode, ' Please enter a valid Email.');
			return false;
		} 
		if(elems.mobile.value.length!=10){
			 
			showError(elems.mobile.parentNode, ' Please enter a valid Mobile No .Must be length 10');
			return false;
		}
		if(elems.password.value.length<5){
			showError(elems.password.parentNode, ' Please enter a Password .Must Length > 5');
			return false;
		}


	alert('Success!');

	storeLoginDetails(elems.mobile.value,elems.password.value);


	window.location.href="/login.html"

	 

}


 function validateName(name){

	let match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let res = /^[a-zA-Z]+$/.test(name);
  console.log('res',res)
   return res; 
 }
const  isEmailValid=(email)=>{

    let match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email && !match.test(email) || email.length==0) {
   return false;
  }
   
  return true;
   
}

function storeLoginDetails(mobile,password){
	console.log("data saving",mobile,password)
	if(!mobile || !password){
		alert("Error in mobile or password");
		return;
	};

 
	localStorage.setItem("mobile", mobile);
	localStorage.setItem("password", password);

	console.log("data saved")
	
}
function Login(form){
  
	var elems = form.elements;
	console.log("Login is clicked")
	const mobile=elems.mobile.value;
	const password=elems.password.value;

console.log("userData",userData,"mobile",mobile,"password",password)
	if(!mobile || !password){
		alert("Wrong mobile or password");
		return;
	};

	let mobile_ = localStorage.getItem("mobile");
	let password_ = localStorage.getItem("password");

console.log("local storage ",mobile_,password_)
    if(mobile!=mobile_ || password_!=password){
		alert("Mobile No does not exists/Password Wrong")
		return;
	}

	 alert("Successful Login");

	window.location.href="/HomePage.html"


}