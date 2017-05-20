function include(filename, onload) {        //thanks http://stackoverflow.com/users/29407/darin-dimitrov
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

include("https://rawgit.com/panxzz/NN-blackout/master/lib/jquery-3.2.1.slim.min.js", function(){
    $(document).ready(function() {
        console.log("jquery loaded");

        //check the date/time to see if the blackout is currently going on
        include('https://rawgit.com/panxzz/NN-blackout/master/lib/check-date.js', function(){

            //if it is blackout time then "break" the page
            include('https://rawgit.com/panxzz/NN-blackout/master/lib/break-stuff.js', function(){

                //after 10 seconds or any click on the page pop the modal
                window.setTimeout(popModal, 10000);
            });

            var popModal = function(){
                include('https://rawgit.com/panxzz/NN-blackout/master/lib/modal-display.js', function(){
                    //modal is displayed
                });
            }
        });
    });
});

