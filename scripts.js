//what do i want
	//emailer
//how do i make it
	//lightbox emailer that pops up on arrival

//after page loads, popup form after 3 seconds
setTimeout(popup, 1000);
function popup() {
	$("#signup").show();
	$("#black-overlay").show();
};

$("form span").hide();


var $name = $("#name");
var $email = $("#email");
var $emailconfirm = $("#emailconfirm");

var $submitButton = $("#signup-submit");

//on keypress of confirm email
//if ifconfirmed is false
//show form span

function isConfirmed() {
	return ( $email.val() === $emailconfirm.val() );
};


function isCompleted() {
	return ( $emailconfirm.val() !== "" ) && ( $name.val() !== "" );
};

function inputsReady() {
	return ( isConfirmed() && isCompleted() );
};


var $interests = [];
function pullInterests() {
	$(":checkbox").map(function() {
		if ($(this).prop("checked")) {
			$interests.push($(this).attr("id"));
		};
	});
	
};







// $submitButton.click( function(event)  {
// 	event.preventDefault();
// 	if ( isConfirmed() && isCompleted() ) {
		
// 	} else if ( isCompleted() ) {

// 	} else {

// 	};


// });









// $("#signup-submit").click(function(event){
// 	event.preventDefault();
// 	function isConfirmed() {
// 		if ( $email === $emailconfirm ){
// 			return true;
// 			$("form span").hide();
// 		} else {
// 			return false;
// 			$("form span").show();
// 		};
// 	};
// 	console.log( $name + $email + $emailconfirm + ", isConfirmed: " + isConfirmed() );
// }); //submit

// var formInfo = {};
// var interestsList = [];
// var submitButton = getElementsById("signup-submit");
// var cancelButton = getElementsById("signup-cancel");
// var closeButton = getElementsById("close-button");
// var overlay = getElementsById("black-overlay");
// var interestsList = {};

// var confirmEmail = function() {};

