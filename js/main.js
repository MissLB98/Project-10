$.ajax({
	url: 'https://randomuser.me/api/?results=12',
	dataType: 'json',
	success: function(data) {
		let HTML = '<div class="employees">';
		
			for(let i = 0; i < data.results.length; i++)	{
				HTML += '<div class="employee">';//the profile
				
				//the close button for modal
					HTML += '<span class="close">&times;</span>';
					
				//Employee image
					HTML += '<div><img src="' + data.results[i].picture.large + '" alt="employee picture"/></div>';
					
				//div around all the written info
					HTML += '<div class="info">';//contact
				
				//Employee first and last name
					HTML += '<h2>' + data.results[i].name.first + ' ' + data.results[i].name.last + '</h2>';
					
				//Employee Email
					HTML += '<p>' + data.results[i].email + '</p>';
					
					
				//Employee home city
					HTML += '<span>' + data.results[i].location.city + '</span>';
					
				HTML += '</div>';
				
				
					
				//Modal window info!!!!!!!!!!!!!
				HTML += '<div class="modal-info">';//more contact
				
				//divider
					HTML += '<hr class="divider"/>';
				
				//ID name
					HTML += '<p><span>ID:</span> ' + data.results[i].id.name + '</p>';
				
				//Username
					HTML += '<h3>' + data.results[i].login.username + '</h3>';
					
				//Cell Number
					HTML += '<p><a href="tel:' + data.results[i].cell + '">' + data.results[i].cell + '</a></p>';
					
				//Address
					HTML += '<h3>Address</h3>' +
						'<p><span>Street Name:</span> ' + data.results[i].location.street + '</p>' +
						'<p><span>City:</span> ' + data.results[i].location.city + '</p>' +
						'<p><span>Country:</span> ' + data.results[i].location.state + '</p>' +
						'<p><span>Postal Code:</span> ' + data.results[i].location.postcode + '</p>';
						
				//DOB
					HTML += '<p><span>Birthday:</span> ' + data.results[i].dob + '</p>';
					
				HTML += '</div>';
				///////end of modal window
				
				HTML += '</div>';
			};
		HTML += '</div>';
		
		//Inserting HTML into the DOM
		$('#directory').html(HTML);
 
	$('.employee').click( function() {
		
	});
		
		
	}	
});
 
