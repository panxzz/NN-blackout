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

include("https://rawgit.com/panxzz/NN-blackout/master/lib/jquery-3.2.1.min.js", function(){
    $(document).ready(function() {
        console.log("jquery loaded");

        //check the date/time to see if the blackout is currently going on
        $.getScript("https://rawgit.com/panxzz/NN-blackout/master/lib/check-date.js", function(data, textStatus, jqxhr){
            if(jqxhr == 200 && textStatus == "success")
            {
                if(data == "blackout")
                {
                    //if it is blackout time then "break" the page
                    console.log("blackout active");

                    $.getScript("https://rawgit.com/panxzz/NN-blackout/master/lib/break-stuff.js", function(data, textStatus, jqxhr){
                        console.log(data);
                        console.log(textStatus);
                        console.log(jqxhr.status);
                        console.log("breaking site");

                        //after 10 seconds or any click on the page pop the modal
                        window.setTimeout(popModal, 10000);
                    });
                }
                else
                {
                    console.log("don't blackout!");
                }
            }
            else
            {
                console.log("not 200 status or unsucessful query for blackout");
            }

            var popModal = function(){
                $.getScript("https://rawgit.com/panxzz/NN-blackout/master/lib/modal-display.js", function(data, textStatus, jqxhr){
                    console.log(data);
                    console.log(textStatus);
                    console.log(jqxhr.status);
                    console.log("showing modal");
                    //modal is displayed
                });
            }
        });
    });
});

