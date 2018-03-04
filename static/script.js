$('#linktogoogle').click(function(){
  event.preventDefault();
  window.location = 'https://www.kvlabs.in'

});


$('#level1').click(function(){
	console.log('level 1 clicked');
});



$('#level2').click(function(){
	event.stopPropagation();
	console.log('level 2 clicked');
});




$('#level3').click(function(){
		event.stopPropagation();
		$('#level1').triggerHandler('click');
	console.log('level 3 clicked');
});

// click the button
$('#dog-data-button').click(function(){
// get data by ajax
	$.ajax({
		type: 'get',
		url: 'https://dog.ceo/api/breeds/list',
		// /api/breed/hound/images
		success: function(data){

			console.log(data.message);
			for (let i=0; i<data.message.length; i++){
				console.log('breed name: ', data.message[i]);
				let breed = $('<p>', {
					'class': 'breedname',
					'html': data.message[i]
				});

				$('#dog-data').append(breed);


			}
		},
		error: function(){
			console.log('Error');
		}


	});

});


































