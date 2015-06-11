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
	setTimeout(popup, 1000);
	function popup() {
		$("#signup").show();
		$("#black-overlay").show();
	};
});//ready

$("form span").hide();

function isConfirmed() {
	return $email


	var $name = $("#name").val();
	var $email = $("#email").val();
	var $emailconfirm = $("#emailconfirm").val();

$("#signup-submit").click(function(event){
	event.preventDefault();


	function isConfirmed() {
		if ( $email === $emailconfirm ){
			return true;
			$("form span").hide();
		} else {
			return false;
			$("form span").show();
		};
	};


	console.log( $name + $email + $emailconfirm + ", isConfirmed: " + isConfirmed() );
}); //submit

// var formInfo = {};
// var interestsList = [];
// var submitButton = getElementsById("signup-submit");
// var cancelButton = getElementsById("signup-cancel");
// var closeButton = getElementsById("close-button");
// var overlay = getElementsById("black-overlay");
// var interestsList = {};

// var confirmEmail = function() {};

