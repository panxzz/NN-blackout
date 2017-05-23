function displayMessage() { 
	
	//create element with HTML & inline styling that lays over page, no extra CSS file needed
	$(document.body).append('<div id="NetMessage" style="width:80%; height:50%; background:#183159; position:absolute; left:10%; top:25%; border-radius:25px; border:10px solid black;"></div>')
	$('#NetMessage').append('<h1 style="text-align:center; color:#e5eefc; margin-top:50px;">This is the internet without Net Neutrailty</h1>')
	$('#NetMessage').append('<p style="text-align:center; color:#e5eefc;">Internet Service Providers may soon be able to slow content that they dont like. Tell the <a href="https://www.fcc.gov/about/contact" target="_blank" style="color:white">FCC</a> you support Net Neutrailty!</p>')
	
	//when page is clicked, element is removed from DOM & website continues as normal
	$(document.body).click(function(){
		$('#NetMessage').remove();
	});
}