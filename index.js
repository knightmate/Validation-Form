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
		if (!elems.firstname.value) {
			showError(elems.firstname.parentNode, ' Please enter your first name.');
			return false;
		}
		else if (elems.firstname.value.length < 3 ) {
			showError(elems.firstname.parentNode, ' At least 3 characters.');
			return false;
		}

		resetError(elems.lastname.parentNode);
		if (!elems.lastname.value) {
			showError(elems.lastname.parentNode, ' Please enter your last name.');
			return false;
		}
		else if (elems.lastname.value.length < 3 ) {
			showError(elems.lastname.parentNode, ' At least 3 characters.');
			return false;
		}

		resetError(elems.email.parentNode);
		if(!elems.email.value) {
			showError(elems.email.parentNode, ' Please enter your Email.');
			return false;
		}
		else if (!regEmail.test(elems.email.value) == true){
			showError(elems.email.parentNode, ' Please enter a valid Email.');
			return false;
		}
		alert('Success!');
}