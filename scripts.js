//what do i want
	//emailer
//how do i make it
	//lightbox emailer that pops up on arrival

//after page loads, popup form after 5 seconds
setTimeout(popup, 5000);
function popup() {
	$("#signup").show();
	$("#black-overlay").show();
};

$("form span").hide();

var $name = $("#name");
var $email = $("#email");
var $emailconfirm = $("#emailconfirm");


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

var $formData = {}
function pullInputs() {
	$formData = {
		name: $name.val(),
		email: $email.val(),
		interests: $interests
	}
};

var $submitButton = $("#signup-submit");
$submitButton.click( function(event)  {
	event.preventDefault();
	$("form span").hide();
	if ( inputsReady() ) {
		console.log("inputs ready, good to go");
		pullInterests();
		console.log($interests);
		pullInputs();
		console.log($formData);
		$("#signup").hide();
		$("#black-overlay").hide();

	} else if ( isCompleted() ) {
		console.log("iscomplete, but not isconfirmed");
		$("#confirm").show();
	} else {
		console.log("is not complete or confirmed");
		$("#complete").show();
	};
});

var $cancelButton = $("#signup-cancel");
$cancelButton.click(function(event) {
	event.preventDefault();
	$("#signup").hide();
	$("#black-overlay").hide();
});

var $closeButton = $("close-window");
$cancelButton.click(function(event) {
	event.preventDefault();
	$("#signup").hide();
	$("#black-overlay").hide();
});




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

