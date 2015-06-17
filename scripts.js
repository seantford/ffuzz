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
	};
};

var $submitButton = $("#signup-submit");
$submitButton.click( function(event) {
	event.preventDefault();
	$("form span").hide();
	if ( inputsReady() ) {
		pullInterests();
		pullInputs();
		console.log($formData);
		$("#signup").hide();
		$("#black-overlay").hide();
	} else if ( isCompleted() ) {
		$("#confirm").show();
	} else {
		$("#complete").show();
	};
});

$("#signup-cancel").click(function(event) {
	event.preventDefault();
	$("#signup").hide();
	$("#black-overlay").hide();
});

$("#close-window").click(function(event) {
	event.preventDefault();
	$("#signup").hide();
	$("#black-overlay").hide();
});

$("#black-overlay").click(function(event) {
	event.preventDefault();
	$("#signup").hide();
	$("#black-overlay").hide();
});