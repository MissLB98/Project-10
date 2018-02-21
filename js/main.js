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
					HTML += '<p class="city"><span>City:</span> ' + data.results[i].location.city + '</p>';
					
				HTML += '</div>';
				
				
					
				//Modal window info!!!!!!!!!!!!!
				HTML += '<div class="modal-info">';//more contact
				
				//ID name
					HTML += '<p><span>ID:</span> ' + data.results[i].id.name + '</p>';
				
				//Username
					HTML += '<p><span>Username:</span> ' + data.results[i].login.username + '</p>';
					
				//Cell Number
					HTML += '<p><span>Cell:</span> <a href="tel:' + data.results[i].cell + '">' + data.results[i].cell + '</a></p>';
					
				//DOB
					HTML += '<p><span>DOB:</span> ' + data.results[i].dob + '</p>';
					
				//Address
					HTML += '<div class="address"><h3>Address</h3>' +
						'<p><span>Street Name:</span> ' + data.results[i].location.street + '</p>' +
						'<p><span>Country:</span> ' + data.results[i].location.state + '</p>' +
						
						'<p><span>Postal Code:</span> ' + data.results[i].location.postcode + '</p></div>';
						
					
				HTML += '</div>';
				///////end of modal window
				
				HTML += '</div>';
			};
		HTML += '</div>';
		
		//Inserting HTML into the DOM
		$('#directory').html(HTML);
 
	$('.employee').click( function() {
		$('#modal').css({
			'display' : 'block'
		});
		
		$('#modalContent').html(this.innerHTML);
		
		$('.close').css({
			'display' : 'block'
		});
		
		$('.modal-info').css({
			'display' : 'block'
		});
		
		$('.employee .modal-info').css({
			'display' : 'none'
		});
		
		$('.employee .close').css({
			'display' : 'none'
		});
	});
		
		
	$('#modal').click( function() {
		$('#modal').css({
			'display' : 'none'
		});
		
		$('.modal-info').css({
			'display' : 'none'
		});
		
		$('.close').css({
			'display' : 'none'
		});
	});
		
	}	
});
 
