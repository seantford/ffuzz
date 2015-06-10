//what do i want
	//emailer
//how do i make it
	//lightbox emailer that pops up on arrival
	
//create a pop up form
//add input for name
//add input for email 
//add input for email confirmation
//comment section
//add checkboxes for interests
//add submit button
//add closeout button and 'esc' to close functionality

// define your variables
$(document).ready(function() {
	setTimeout(popup, 2000);
	function popup() {
		$("#signup").show();
		$("#black-overlay").show();
	};
});//ready

var formInfo = {};

// $("form").submit()
$("#signup-submit").click(function(event){
	event.preventDefault();
	var visitorname = $("#name").val();
	console.log(visitorname)
});

// var useremail = $("#email").val;
// var emailConfirm = $("emailconfirm").val;
// var submitButton = getElementsById("signup-submit");
// var cancelButton = getElementsById("signup-cancel");
// var closeButton = getElementsById("close-button");
// var overlay = getElementsById("black-overlay");
// var interestsList = {};

// var confirmEmail = function() {};

