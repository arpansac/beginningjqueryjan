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


// fetch data using ajax from url
// for each image link in the data
// create an <image> tag and set it's source
// append that image tag in a div
// div should be flex and there should be 4 images in a row

// click the button
$('#dog-data-button').click(function(){
// get data by ajax
	$.ajax({
		type: 'get',
		// url: 'https://dog.ceo/api/breeds/list',
		url: 'https://dog.ceo/api/breed/hound/images',
		success: function(data){

			console.log(data.message);
			for (let i=0; i<data.message.length; i++){
				console.log('breed link: ', data.message[i]);
				let breed = $('<img>', {
					'class': 'breedname',
					'src': data.message[i]
				});

				$('#dog-data').append(breed);


			}
		},
		error: function(){
			console.log('Error');
		}


	});

});

// 8Xwd5CLRqjkLzq2Twy3i6sMMiOC1xOINlIcZP4Ir
$('#nasa-data-button').click(function(){
	$.ajax({
		type: 'get',
		url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
		data: {
			'sol': $('#phone').val(),
			'api_key': '8Xwd5CLRqjkLzq2Twy3i6sMMiOC1xOINlIcZP4Ir'
		},
		success: function(data){
			for (let i=0; i<data.photos.length; i++){
				
				let photo = $('<img>', {
					'class': 'marsphoto',
					'src': data.photos[i].img_src
				});

				$('#mars-data').append(photo);


			}
		}


	});

});





// var ajaxRequest = function(){
// 	// var myRequest;
// 	// to make a request
// 	var init = function(){
// 		console.log('clicked');
// 		var myRequest = new XMLHttpRequest();

// 		myRequest.onreadystatechange = requestHandler;

// 		myRequest.open('GET', 'https://dog.ceo/api/breeds/list/api/breeds/list/all');
// 		myRequest.send();

// 	}

// 	var requestHandler = function(){
// 		console.log('called');
// 		if (myRequest.readyState == 4){
// 			if (myRequest.status == 200){
// 				var rData = JSON.parse(myRequest.responseText);
// 				console.log(rData);
// 				// play around with the data

// 			}else{
// 				console.log('Error!');
// 			}

// 		}

// 	}

// 	document.getElementById('ajax_button').addEventListener('click', init);

// }

























