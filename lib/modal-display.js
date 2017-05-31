function displayMessage() {
	$(document.body).append("<div id='black-background' style='background:rgba(0, 0, 0, 0.6); position: fixed; top:0; left:0; width: 100%; height: 100%;'></div>");
	$(document.body).append("<div id='net-message' style='font-family: Arial, sans serif; text-align:center; padding:20px; width:80%; background:#eee; position:fixed; left:10%; top:25%; border-radius:5px; border:5px solid black;'></div>")
	$("#net-message").append("<h1 style='margin-top:5px;'>This is the internet <strong>without</strong> Net Neutrality!</h1>");
	$("#net-message").append("<h4>Without Net Neutrality, Internet Service Providers (ISPs) like Comcast and AT&T will be able to control exactly how you access the internet, which includes slowing or blocking your connection to websites they don't like.</h4>");
	$("#net-message").append("<p>Can you imagine if you wanted to switch from Comcast to one of their competitors, but you were unable to look into alternatives from your home network? This is a real possibility if Net Neutrality didn't exist because Comcast would have control over what you can browse on the internet.</p>");
	$("#net-message").append("<h2>What happens without Net Neutrality?</h2>");
	$("#net-message").append("<ul>");
	$("#net-message").append("<li style='padding:5px 50px 5px 50px;'>Comcast wants us to watch their own video content... They would have the ability to break or cripple Netflix forcing us to use Comcast's offerings.</li>");
	$("#net-message").append("<li style='padding:5px 50px 5px 50px;'>If you use Facebook or Instagram you would have to purchase the 'Social Bundle' for $15 extra per month. To use Netflix and Hulu you need to pay $20 for the 'Entertainment Bundle'.</li>");
	$("#net-message").append("<li style='padding:5px 50px 5px 50px;'>Entrepreneurs with new ideas would be stifled by the extreme costs of purchasing a 'Fast Lane' or else be inaccessible due to throttled speeds.</li>");
	$("#net-message").append("</ul>");
	$("#net-message").append("<p><h4>In August there will be a vote to remove Net Neutrality and we need you to join our efforts to protect it!</h4></p>");
	$("#net-message").append("<h1><a style='text-decoration: none;' href='https://dearfcc.org/' target='_blank'>Tell the FCC you support Net Neutrality!</a></h1>");
	//$("#net-message").append("<h1><a style='text-decoration: none;' href='http://www.house.gov/representatives/find/' target='_blank'>Tell your representative you support Net Neutrality!</a></h1>");

	$(document.body).click(function(){
		$('#net-message').remove();
		$('#black-background').remove();
	});
}