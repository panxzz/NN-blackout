
function include(filename, onload) {        //thanks http://stackoverflow.com/a/8139909/7314005
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;                                                  
                onload();
            }
        } 
        else {
            onload();          
        }
    };
    head.appendChild(script);
}

function typeOf (obj) {     //thanks http://stackoverflow.com/a/28475765/7314005
  return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

// PRODUCTION PATHS
var breakStuffPath = "https://rawgit.com/panxzz/NN-blackout/master/lib/break-stuff.js";
var displayModalPath = "https://rawgit.com/panxzz/NN-blackout/master/lib/modal-display.js";
// DEVELOPMENT PATHS
//breakStuffPath = "/lib/break-stuff.js";
//displayModalPath = "/lib/modal-display.js";

include("https://code.jquery.com/jquery-3.2.1.min.js", function(){
    $(document).ready(function() {
        //check the date/time to see if the blackout is currently going on
        $.getScript("http://novanetllc.org/datetime.php", function(data, textStatus, jqxhr){
            if(jqxhr.status == 200 && textStatus == "success")
            {
                //current blackout set to 2017-05-19 (month is zero based)
                var serverTime = new Date(parseInt(data));
                //if it is blackout time then "break" the page
                if(serverTime.getFullYear() == 2017 && serverTime.getMonth() == 5 && serverTime.getDate() == 14)
                {
                    console.log("blackout!");
                    $.getScript(breakStuffPath, function(data, textStatus, jqxhr){
                        if(jqxhr.status == 200 && textStatus == "success")
                        {
                            console.log("breaking stuff");
                            breakStuff();
                        }
                        //after 10 seconds or any click on the page pop the modal
                        window.setTimeout(popModal, 10000); 
                    });
                }
                else
                {
                    console.log("don't blackout!");
                }
            }

            var popModal = function(){
                $.getScript(displayModalPath, function(data, textStatus, jqxhr){
                    if(jqxhr.status == 200 && textStatus == "success")
                    {
                        console.log("showing modal");
                        displayMessage(); //function from modal-display.js that displays a popup with the NN message
                    }
                });
            }
        });
    });
});

