$(document).ready(function() {
	$("#add-phone").click(function() {
		$("#new-phones").append('<div class="for-new-phone">' +
		'<div class="form-group">' +
		'<label for="new-phone">Phone</label>' +
		'<input type="text" class="form-control new-phone">' +
		'</div>');
	});
	$("#add-email").click(function() {
		$("#new-emails").append('<div class="for-new-email">' +
		'<div class="form-group">' +
		'<label for="new-email">email</label>' +
		'<input type="text" class="form-control new-email">' +
		'</div>');
	});

	$("#add-address").click(function() {
		$("#new-addresses").append('<div class="new-address">' +
		'<div class="form-group">' +
		'<label for="new-street">Street</label>' +
		'<input type="text" class="form-control new-street">' +
		'</div>' +
		'<div class="form-group">' +
		'<label for="new-city">City</label>' +
		'<input type="text" class="form-control new-city">' +
		'</div>' +
		'<div class="form-group">' +
		'<label for="new-state">State</label>' +
		'<input type="text" class="form-control new-state">' +
		'</div>' +
		'</div>');
	});

	$("form#new-contact").submit(function(event) {
		event.preventDefault();

		var inputtedFirstName = $("input#new-first-name").val();
		var inputtedLastName = $("input#new-last-name").val();

		var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, phones: [], emails: [], addresses: [] };

		$(".for-new-phone").each(function() {
			var inputtedPhone = $(this).find("input.new-phone").val();

			newContact.phones.push(inputtedPhone);
		});

		$(".for-new-email").each(function() {
			var inputtedEmail = $(this).find("input.new-email").val();

			newContact.emails.push(inputtedEmail);
		});


		$(".new-address").each(function() {
			var inputtedStreet = $(this).find("input.new-street").val();
			var inputtedCity = $(this).find("input.new-city").val();
			var inputtedState = $(this).find("input.new-state").val();

			var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
			newContact.addresses.push(newAddress);
		});


		$("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + ' ' + newContact.lastName + "</span></li>");

		$(".contact").last().click(function() {
			$("#show-contact").show();

			$("#show-contact h2").text(newContact.firstName);
			$(".first-name").text(newContact.firstName);
			$(".last-name").text(newContact.lastName);

			$("ul#phones").text("");
			newContact.phones.forEach(function(phone) {
				$("ul#phones").append("<li>" + phone + "</li>");
			});

			$("ul#emails").text("");
			newContact.emails.forEach(function(email) {
				$("ul#emails").append("<li>" + email + "</li>");
			});

			$("ul#addresses").text("");
			newContact.addresses.forEach(function(address) {
				$("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
			});
		});

		$("input#new-first-name").val("");
		$("input#new-last-name").val("");
		$("input#new-phone").val("");
		$("input#new-email").val("");
		$("input#new-street").val("");
		$("input#new-city").val("");
		$("input#new-state").val("");
	});



///// TO DO: проверка полей,  phone 2,3 etc
});