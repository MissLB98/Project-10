const directory = document.getElementById('directory');

$.ajax({
	url: 'https://randomuser.me/api/?results=12',
	dataType: 'json',
	success: function(data) {
		/*console.log(data);
		for(var i = 0; i <data.results.length; i++)	{
			directory.innerHTML = data.results[i].name.first;
		};*/
		
		let HTML = '<ul class="employees">';
			for(let i = 0; i < data.results.length; i++)	{
				HTML += '<li class="employee">';
				/* Employee image*/
					HTML += '<div><img src="' + data.results[i].picture.medium + '" alt="employee pic"/></div>';
					
				/* Employee first and last name */
					HTML += '<div><h2>' + data.results[i].name.first + ' ' + data.results[i].name.last + '</h2>';
					
				/* Employee Email*/
					HTML += '<p>' + data.results[i].email + '</p>';
				
				/* Employee home city */
					HTML += '<span>' + data.results[i].location.city + '</span>';
				HTML += '</div></li>';
			};
		HTML += '</ul>';
		directory.innerHTML = HTML;
	}	
});
 