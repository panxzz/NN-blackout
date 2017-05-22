function displayMessage() { 
	//create element with HTML that lays over page
	$(document.body).css('position', 'relative');
	$(document.body).append('<div id="NetMessage" width="80%" height="60%" style="width:800px;height:300px;background:blue;position:absolute;z-index:2"><h1>This is the internet without Net Neutrailty</h1><p>Internet Service Providers may soon be able to slow content that they dont like. Tell the <a href="https://www.fcc.gov/about/contact" target="_blank">FCC</a> you support Net Neutrailty!</p></div>')
	//when page is clicked, element is removed from DOM
	$(document.body).click(function(){
		$('#NetMessage').remove();
	});
}