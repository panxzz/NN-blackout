var s = document.createElement("script");
s.type = "text/javascript";
s.src = "/lib/jquery-3.2.1.slim.min.js";
document.head.appendChild(s);

//check the date/time to see if the blackout is currently going on
$.getScript('/lib/check-date.js', function(){

    //if it is blackout time then "break" the page
    $.getScript('/lib/break-stuff.js', function(){

        //after 10 seconds or any click on the page pop the modal
        window.setTimeout(popModal, 10000);
    });

    var popModal = function(){
        $.getScript('/lib/modal-display.js', function(){
            //modal is displayed
        });
    }
});